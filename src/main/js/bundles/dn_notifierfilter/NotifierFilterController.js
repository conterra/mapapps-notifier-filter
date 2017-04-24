/*
 * Copyright (C) 2015 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
define([
    "dojo/_base/declare",
    "dojo/_base/array",
    "dojo/_base/lang",
    "dojo/aspect",
    "ct/array",
    "ct/_Connect",
    "ct/Stateful",
    "notifier/NotifierFactory"
], function (declare, d_array, d_lang, d_aspect, ct_array, _Connect, Stateful, NotifierFactory) {
    this.LOG_LEVELS = {
        LOG_ERROR: 1,
        LOG_WARNING: 2,
        LOG_INFO: 3,
        LOG_DEBUG: 4
    };
    return declare([_Connect, Stateful], {
        activate: function () {
            var that = this;
            var entries = this.entries = [];
            d_aspect.before(NotifierFactory.prototype, "logged", function (entry) {
                var index = ct_array.arrayFirstIndexOf(entries, {
                    level: entry.level,
                    message: entry.message,
                    shortInfo: entry.shortInfo
                });
                if (index === -1) {
                    entries.push(entry);
                    return that.showNotifier(entry);
                } else {
                    var oldEntry = entries[index];
                    var timeDiff = entry.get("date").getTime() - oldEntry.get("date").getTime();
                    if (timeDiff > that.hideTime) {
                        return that.showNotifier(entry);
                    } else {
                        return [null];
                    }
                }
            }, this);
        },
        showNotifier: function (entry) {
            var level = entry.get("level");
            var hide = level > this.hideLevel;
            if (hide) {
                return [null];
            } else {
                return [entry];
            }
        }
    });
});