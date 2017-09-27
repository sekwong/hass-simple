## Development setup ##
```
$ docker-compose up
```
- any changed to home assistant config need to restart
```
$ docker-compose restart
```
- changed in Panel.dash, just refresh browser

## File structure ##

```
--/
  /config/
    configuration.yaml     # home assistant main config
    groups.yaml            # group config
    automations.yaml
  
    /hadaemon/
      appdaemon.yaml        # appdaemon config
      /dashboards/
        Panel.dash          # ha dashboard config
```
## Home Assistant Config ##
- Main configuration file at config/configuration.yaml
- [Configuration guide ](https://home-assistant.io/docs/configuration/)
- For production please add http:api_password
## Dashboard Config ##
- Main configuration file at config/hadaemon/appdaemon.yaml 
- [Configuration guide ](hhttp://appdaemon.readthedocs.io/en/latest/INSTALL.html#configuratio)
- For acccess hass.io in Raspberry Pi 3 change docker-compose.yml HASS:ha_url to http://hassio.local:8123

## Hass.io Setup ##
- [Installation guide](https://home-assistant.io/hassio/installation/)
- ping it
```
$ ping hassio.local
```
- Update hadaemon/appdaemon.yaml with new hassio ip to HASS:ha_url and HADashboard:dash_url
- After setup finish go to home assistant admin at  http://hassio-ip-address:8123 and install SSH add-on
- update ssh add-on authorized_keys with key from ~/.ssh/id_rsa.pub
- install appdeamon addon from https://github.com/vkorn/hassio-addons at add-on repository
- update app daemon network port from 3030 to 80
- update app daemon config
- upload home assistant config by scp:
```
$ scp -r ./config root@hassio.local:/
```
- restart home assistant