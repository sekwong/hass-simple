$(function(){ //DOM Ready

    function navigate(url)
    {
        window.location.href = url;
    }

    $(document).attr("title", "Test Bed Panel");
    content_width = (128 + 5) * 12 + 5
    $('.gridster').width(content_width)
    $(".gridster ul").gridster({
        widget_margins: [5, 5],
        widget_base_dimensions: [128, 128],
        avoid_overlapped_widgets: true,
        max_rows: 15,
        max_size_x: 12,
        shift_widgets_up: false
    }).data('gridster').disable();
    
    // Add Widgets

    var gridster = $(".gridster ul").gridster().data('gridster');
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseiframe-default-logo-frame" id="default-logo-frame"><div class="outer-frame iframe"><iframe class="scaled-frame" data-bind="attr: {style: frame_style, src: frame_src}" allowfullscreen></iframe></div><div class="outer-image"><img class="img-frame" data-bind="attr: {src: img_src}"></img></div><h1 class="title" data-bind="text: title, attr: {style: title_style}"></h1></div></li>', 3, 2, 1, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseweather-default-weather" id="default-weather"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><div data-bind="attr: {style: main_style}">	<p class="primary-climacon" data-bind="html: dark_sky_icon"></p>	<p class="primary-info" data-bind="text: dark_sky_temperature"></p>	<p class="primary-unit" data-bind="html: unit, attr: {style: unit_style}"></p><br><div data-bind="attr: {style: sub_style}">	<p class="secondary-info">Humidity:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_humidity"></p>	<p class="secondary-info">%</p>	<br>	<p class="secondary-info">Apparent Temp:&nbsp;</p>	<p class="secondary-info" data-bind="html: dark_sky_apparent_temperature"></p>	<p class="secondary-info" data-bind="html: unit"></p>	<br>	<p class="secondary-info">Rain:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_precip_probability"></p>	<p class="secondary-info">&nbsp;%</p>	<p class="secondary-info">&nbsp;/&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_precip_intensity"></p>	<p class="secondary-info">in</p>	<br>	<p class="secondary-info">Wind:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_wind_speed"></p>	<p class="secondary-info">&nbsp;Mph</p>	<p class="secondary-info">&nbsp;/&nbsp;</p>	<p class="secondary-info" data-bind="html: dark_sky_wind_bearing"></p>	<p class="secondary-info">&nbsp;&deg;</p>	<br>	<p class="secondary-info">Pressure:&nbsp;</p>	<p class="secondary-info" data-bind="text: dark_sky_pressure"></p>	<p class="secondary-info">&nbsp;Mbar</p></div></div></li>', 2, 2, 4, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseclock-default-clock" id="default-clock"><h1 class="date"data-bind="text: date, attr: {style: date_style}"></h1><h2 class="time" data-bind="text: time, attr: {style: time_style}"></h2></div></li>', 2, 1, 6, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-office-temp" id="default-office-temp"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 8, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-javascript-default-reload" id="default-reload"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2></div></li>', 1, 1, 9, 1)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-left-lamp" id="default-left-lamp"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 6, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-center-lamp" id="default-center-lamp"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 7, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-baseswitch-default-right-lamp" id="default-right-lamp"><span class="toggle-area" id="switch"></span><h1 class="title" data-bind="text: title, attr:{style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{style: title2_style}"></h1><h2 class="icon" data-bind="attr:{style: icon_style}"><i data-bind="attr: {class: icon}"></i></h2><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 8, 2)
    
        gridster.add_widget('<li><div data-bind="attr: {style: widget_style}" class="widget widget-basedisplay-default-door-sensor" id="default-door-sensor"><h1 class="title" data-bind="text: title, attr:{ style: title_style}"></h1><h1 class="title2" data-bind="text: title2, attr:{ style: title2_style}"></h1><div class="valueunit"><h2 class="value" data-bind="html: value, attr:{ style: value_style}"></h2><p class="unit" data-bind="html: unit, attr:{ style: unit_style}"></p></div><h1 class="state_text" data-bind="text: state_text, attr: {style: state_text_style}"></h1></div></li>', 1, 1, 9, 2)
    
    
    
    var widgets = {}
    // Initialize Widgets
    
        widgets["default-logo-frame"] = new baseiframe("default-logo-frame", "", "default", {'widget_type': 'baseiframe', 'fields': {'title': '', 'frame_src': '', 'img_src': '', 'frame_style': '""'}, 'icons': [], 'static_css': {'title_style': 'color: #fff;background-color: rgba(0, 0, 0, 0.5);', 'widget_style': 'background-color: #444;'}, 'css': {}, 'static_icons': [], 'img_list': ['https://storage.googleapis.com/rkgroup/rk_logo.png']})
    
        widgets["default-weather"] = new baseweather("default-weather", "", "default", {'widget_type': 'baseweather', 'fields': {'title': '', 'unit': '', 'dark_sky_temperature': '', 'dark_sky_humidity': '', 'dark_sky_precip_probability': '', 'dark_sky_precip_intensity': '', 'dark_sky_wind_speed': '', 'dark_sky_pressure': '', 'dark_sky_wind_bearing': '', 'dark_sky_apparent_temperature': '', 'dark_sky_icon': ''}, 'css': {}, 'static_css': {'title_style': 'color: #00aaff;', 'unit_style': 'color: #ffaa00;', 'main_style': 'color: #ffaa00;', 'sub_style': 'color: #00aaff;', 'widget_style': 'background-color: #444;'}, 'icons': [], 'static_icons': [], 'units': '&deg;C'})
    
        widgets["default-clock"] = new baseclock("default-clock", "", "default", {'widget_type': 'baseclock', 'fields': {'date': '', 'time': ''}, 'static_css': {'date_style': 'color: #fff;', 'time_style': 'color: #FFF;', 'widget_style': 'background-color: #444;'}, 'static_icons': [], 'icons': [], 'css': {}, 'show_seconds': 1, 'time_style': 'color: #FFF;'})
    
        widgets["default-office-temp"] = new basedisplay("default-office-temp", "", "default", {'widget_type': 'basedisplay', 'entity': 'sensor.office_temperature', 'sub_entity': '', 'fields': {'title': 'ห้องออฟฟิต', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': 'color: #FFF;', 'value_style': 'color: #FFF;', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #FFF;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #FFF;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'units': '&deg;C', 'value_style': 'color: #FFF;', 'unit_style': 'color: #FFF;'})
    
        widgets["default-reload"] = new javascript("default-reload", "", "default", {'widget_type': 'javascript', 'command': 'location.reload(true)', 'fields': {'title': 'รีเฟรส', 'title2': '', 'icon': '', 'icon_style': ''}, 'icons': {'icon_active': 'fa-spinner fa-spin', 'icon_inactive': 'fa-refresh'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'css': {'icon_active_style': 'color: #fff;', 'icon_inactive_style': 'color: #fff;'}, 'static_icons': []})
    
        widgets["default-left-lamp"] = new baseswitch("default-left-lamp", "", "default", {'widget_type': 'baseswitch', 'entity': 'light.left_lamp', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'light.left_lamp'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'light.left_lamp'}, 'fields': {'title': 'ไฟด้านซ้าย', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-lightbulb-o', 'icon_off': 'fa-lightbulb-o'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'icon_on': 'fa-lightbulb-o', 'icon_off': 'fa-lightbulb-o'})
    
        widgets["default-center-lamp"] = new baseswitch("default-center-lamp", "", "default", {'widget_type': 'baseswitch', 'entity': 'switch.center_lamp', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.center_lamp'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.center_lamp'}, 'fields': {'title': 'ไฟตรงกลาง', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-lightbulb-o', 'icon_off': 'fa-lightbulb-o'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'icon_on': 'fa-lightbulb-o', 'icon_off': 'fa-lightbulb-o'})
    
        widgets["default-right-lamp"] = new baseswitch("default-right-lamp", "", "default", {'widget_type': 'baseswitch', 'entity': 'switch.right_lamp', 'state_active': 'on', 'state_inactive': 'off', 'enable': 1, 'post_service_active': {'service': 'homeassistant/turn_on', 'entity_id': 'switch.right_lamp'}, 'post_service_inactive': {'service': 'homeassistant/turn_off', 'entity_id': 'switch.right_lamp'}, 'fields': {'title': 'ไฟด้านขวา', 'title2': '', 'icon': '', 'icon_style': '', 'state_text': ''}, 'icons': {'icon_on': 'fa-lightbulb-o', 'icon_off': 'fa-lightbulb-o'}, 'static_icons': [], 'css': {'icon_style_active': 'color: #aaff00;', 'icon_style_inactive': 'color: #888;'}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'state_text_style': 'color: #fff;', 'widget_style': 'background-color: #444;'}, 'icon_on': 'fa-lightbulb-o', 'icon_off': 'fa-lightbulb-o'})
    
        widgets["default-door-sensor"] = new basedisplay("default-door-sensor", "", "default", {'widget_type': 'basedisplay', 'entity': 'binary_sensor.door_sensor', 'sub_entity': '', 'fields': {'title': 'ประตูออฟฟิต', 'title2': '', 'value': '', 'unit': '', 'state_text': ''}, 'static_css': {'title_style': 'color: #fff;', 'title2_style': 'color: #fff;', 'unit_style': '', 'value_style': '', 'state_text_style': 'color: #fff;font-size: 100%;', 'widget_style': 'background-color: #444;'}, 'css': {'value_style': 'color: #00aaff;font-size: 250%;', 'text_style': 'color: #fff;font-size: 100%;', 'unit_style': 'color: #00aaff;font-size: 100%;'}, 'icons': [], 'static_icons': [], 'state_map': {'on': 'เปิด', 'off': 'ปิด'}})
    

    // Setup click handler to cancel timeout navigations

    $( ".gridster" ).click(function(){
        clearTimeout(myTimeout);
    });

    // Set up timeout

    var myTimeout

    if (location.search != "")
    {
        var query = location.search.substr(1);
        var result = {};
        query.split("&").forEach(function(part) {
        var item = part.split("=");
        result[item[0]] = decodeURIComponent(item[1]);
        });

        if ("timeout" in result && "return" in result)
        {
            url = result.return
            argcount = 0
            for (arg in result)
            {
                if (arg != "timeout" && arg != "return")
                {
                    if (argcount == 0)
                    {
                        url += "?";
                    }
                    else
                    {
                        url += "?";
                    }
                    argcount ++;
                    url += arg + "=" + result[arg]
                }
            }
            myTimeout = setTimeout(function() { navigate(url); }, result.timeout * 1000);
        }
    }

    // Start listening for HA Events
    if (location.protocol == 'https:')
    {
        wsprot = "wss:"
    }
    else
    {
        wsprot = "ws:"
    }
    var stream_url = wsprot + '//' + location.host + '/stream'
    ha_status(stream_url, "Test Bed Panel", widgets);

});