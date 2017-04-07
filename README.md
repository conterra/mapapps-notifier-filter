# Notifier Filter Bundle
The Notifier Filter bundle allows you to filter notifications by the notification-level and the time between two identical notifications.

### Sample App ###
http://www.mapapps.de/mapapps/resources/apps/downloads_introjs/index.html

### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

##### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`

Installation Guide
------------------

####Configuration
```
"dn_notifierfilter": {
    "NotifierFilterController": {
        "hideLevel": 3,
        "hideTime": 10000
    }
}
```
