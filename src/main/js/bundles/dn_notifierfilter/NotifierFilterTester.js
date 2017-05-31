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
    "ct/async"
], function (declare, ct_async) {
    return declare([], {
        activate: function () {
            ct_async(function () {
                this._logService.error({
                    id: 1,
                    message: "Error"
                });
            }, this, 2000);
            ct_async(function () {
                this._logService.warn({
                    id: 2,
                    message: "Warning"
                });
            }, this, 4000);
            ct_async(function () {
                this._logService.info({
                    id: 3,
                    message: "Info"
                });
            }, this, 6000);
            ct_async(function () {
                this._logService.error({
                    id: 1,
                    message: "Error"
                });
            }, this, 10000);
            ct_async(function () {
                this._logService.error({
                    id: 1,
                    message: "Error"
                });
            }, this, 14000);
        }
    });
});