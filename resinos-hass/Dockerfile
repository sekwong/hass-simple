FROM resin/rpi-raspbian
MAINTAINER Ludovic Roguet <code@fourteenislands.io>

# Base layer
ENV ARCH=arm
ENV CROSS_COMPILE=/usr/bin/

# Install some packages
# #1:   20160803 - Added net-tools and nmap for https://home-assistant.io/components/device_tracker.nmap_scanner/
# #3:   20161021 - Added ssh for https://home-assistant.io/components/device_tracker.asuswrt/
# #8:   20170313 - Added ping for https://home-assistant.io/components/switch.wake_on_lan/
# #10:  20170328 - Added libffi-dev, libpython-dev and libssl-dev for https://home-assistant.io/components/notify.html5/
# #11:	20170628 - Added libud3v-dev for https://home-assistant.io/components/zwave/
# #14: 	20170802 - Added bluetooth and libbluetooth-dev for https://home-assistant.io/components/device_tracker.bluetooth_tracker/
RUN apt-get update &&     apt-get install --no-install-recommends       build-essential python3-dev python3-pip       libffi-dev libpython-dev libssl-dev       libudev-dev       bluetooth libbluetooth-dev       net-tools nmap       iputils-ping       ssh &&     apt-get clean &&     rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Mouting point for the user's configuration
# VOLUME /config
COPY ./config /config

# Start Home Assistant
CMD [ "python3", "-m", "homeassistant", "--config", "/config" ]

# Install Home Assistant
RUN pip3 install homeassistant==0.53.1
RUN hass --open-ui
