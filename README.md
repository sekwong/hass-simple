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
  /config-hass/
    configuration.yaml     # home assistant main config
    groups.yaml            # group config
    automations.yaml
  
  /config-appdaemon/
    appdaemon.yaml        # appdaemon config
    /dashboards/
      Panel.dash          # ha dashboard config
```
## Home Assistant Config ##
- Main configuration file at config-hass/configuration.yaml
- [Configuration guide ](https://home-assistant.io/docs/configuration/)
- For production please add http:api_password
## Dashboard Config ##
- Main configuration file at config-appdaemon/appdaemon.yaml 
- [Configuration guide ](hhttp://appdaemon.readthedocs.io/en/latest/INSTALL.html#configuratio)
- For acccess hass.io in Raspberry Pi 3 change docker-compose.yml HASS:ha_url to http://hassio.local:8123

## Hass.io Setup ##
- [Installation guide](https://home-assistant.io/hassio/installation/)
- ping it
```
$ ping hassio.local
```
- After setup finish go to  http://hassio.local:8123 and install SSH add-on
- install appdeamon addon from https://github.com/vkorn/hassio-addons
- update authorized_keys or password
- upload home assistant config by scp:
```
$ scp -r ./config-hass root@hassio.local:/config
```
