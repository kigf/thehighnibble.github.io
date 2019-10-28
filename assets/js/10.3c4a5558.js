(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{130:function(e,t,s){"use strict";s.r(t);var i=s(0),o=Object(i.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("If you experience problems that are not covered in this trouble shooting guide, please post them to the "),s("a",{attrs:{href:"http://bit.ly/IMSAI8080esp",target:"_blank",rel:"noopener noreferrer"}},[e._v("IMSAI 8080esp forum"),s("OutboundLink")],1),e._v(". Maybe someone else has already solved that problem and can help you if I am asleep or unavailable. Also, any problem you have is likely to be experienced by someone else and so, the discussion and resolution via the forum can act as a knowledge base until I can update this guide to include notes on the problem.")])]),e._v(" "),e._m(1),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("The troubleshooting outlined here focuses on understanding the messages that are logged to the console by the ESP32 as it boots.\nThe simplest way to see these messages is to")]),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("If you do not see a TTY/COM port on your PC presented by the ESP32-PICO-KIT, you may need to install a driver for the "),s("em",[e._v("Silicon Labs CP210x USB to UART bridge")]),e._v(" used on the ESP32-PICO-KIT. See "),s("router-link",{attrs:{to:"./../configure/#serial-communications-rs232-usb"}},[e._v("Serial Communications (RS232, USB)")]),e._v(" in the Configuration guide for details.")],1)]),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),s("p",[e._v("If you see only:")]),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),s("p",[e._v("If you see something similar to:")]),e._v(" "),e._m(10),e._v(" "),s("p",[e._v("Then your soldering of the PSRAM has been unsuccessful. You should rework all the solder joints of the PSRAM SOP-8 package, check that you have "),s("code",[e._v("C1")]),e._v(" and "),s("code",[e._v("R14")]),e._v(" correctly installed and that you have added the extra 2 sets of 3 male header pins to the ESP32-PICO-KIT board as per the "),s("router-link",{attrs:{to:"./../assembly/#esp32-microcontroller-psram-micro-sd-card-socket"}},[e._v("assembly instructions")])],1),e._v(" "),s("p",[e._v("If you see something similar to:")]),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),s("p",[e._v("The NVS (Non Volatile Storage) has not yet been initialised. You must have all the toggles soldered in before you can set the "),s("router-link",{attrs:{to:"./../configure/#startup-configuration-non-volatile-storage-nvs"}},[e._v("Startup Configuration in NVS")])],1),e._v(" "),e._m(13),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("If you see a Wi-Fi Access Point SSID named "),s("code",[e._v("imsai8080")]),e._v(" on your Wi-Fi network, and can get any of the Desktop UI to load when you point your Chrome browser at "),s("a",{attrs:{href:"http://imsai8080.local",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://imsai8080.local"),s("OutboundLink")],1),e._v(" then your soldering of the "),s("code",[e._v("microSD Card Socket")]),e._v(" is perfect.")]),e._v(" "),e._m(14)]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),e._m(17),e._v(" "),e._m(18),e._v(" "),e._m(19),e._v(" "),s("p",[e._v("Once the toggle switches are soldered in you will be able to more get some more conclusive tests done.")]),e._v(" "),e._m(20),e._v(" "),e._m(21),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("For a visual guide to the following tests refer to the YouTube video titled "),s("a",{attrs:{href:"https://youtu.be/VrSLJicIlcU",target:"_blank",rel:"noopener noreferrer"}},[e._v("THN #019 - Kit Assembly #11- The dead LED is fixed and testing continues."),s("OutboundLink")],1),e._v(" "),s("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/VrSLJicIlcU",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]),e._v(" "),e._m(22),e._v(" "),e._m(23),e._v(" "),e._m(24),e._v(" "),e._m(25),e._v(" "),e._m(26),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("At this point your IMSAI 8080esp should by fully operational.")]),e._v(" "),s("p",[e._v("For a visual guide to the following tests refer to the YouTube video titled "),s("a",{attrs:{href:"https://youtu.be/Cwv_gRtWnZM",target:"_blank",rel:"noopener noreferrer"}},[e._v("THN #022 - Kit Assembly #14 - Some last testing before final assembly"),s("OutboundLink")],1),e._v(" "),s("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/Cwv_gRtWnZM",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])]),e._v(" "),e._m(27),e._v(" "),e._m(28),e._v(" "),e._m(29),e._v(" "),e._m(30),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("You should be able to repeat any of the above tests but more importantly you should be able to enter "),s("em",[e._v("startup configuration mode")]),e._v(" and configure your IMSAI 8080esp to boot into a ROM based application eg. BASIC, or to boot a floppy disk image and start a disk based operating system eg. CP/M 2.2 (as supplied). See the "),s("router-link",{attrs:{to:"./../configure/"}},[e._v("Configuration guide")]),e._v(" for details.")],1)]),e._v(" "),e._m(31),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),e._m(32),e._v(" "),s("p",[e._v("If you haven't visited it yet, head over to the "),s("a",{attrs:{href:"http://bit.ly/IMSAI8080esp",target:"_blank",rel:"noopener noreferrer"}},[e._v("IMSAI 8080esp Forum"),s("OutboundLink")],1),e._v(". You need to "),s("strong",[e._v("request to join")]),e._v(" before you can post, but you can freely browse the exiting posts while you wait to be added.")]),e._v(" "),e._m(33)]),e._v(" "),e._m(34),e._v(" "),s("p",[e._v("If you have LEDs or Toggle switches that don't operate correctly the most likely cause is the soldering.")]),e._v(" "),s("p",[e._v("A visual inspection of all solder joints is ofter the best first approach.")]),e._v(" "),s("p",[e._v("Any joints that don't look like the others, especially on pads connected to the faulty component can be re-worked with a hot soldering iron and some flux, or more solder added if required.")]),e._v(" "),s("p",[e._v("You will have to (partially or fully) disassemble the acrylic components to get access to the PCB so that you can do any soldering or some further testing. A digital multimeter can be a useful tool for this work to help you do some continuity testing, test resistors for correct values, check that voltages are as expected (+5V DC).")]),e._v(" "),e._m(35),e._v(" "),e._m(36),e._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),e._m(37),e._v(" "),e._m(38),e._v(" "),s("p",[e._v("See the "),s("router-link",{attrs:{to:"./../configure/#startup-configuration-non-volatile-storage-nvs"}},[e._v("Startup configuration (Non-Volatile Storage, NVS)")]),e._v(" section of the Configuration guide for instructions on setting the "),s("strong",[e._v("NVS_LOG_LEVEL")])],1)]),e._v(" "),s("p",[e._v("When you are posting in the forum requesting help with a problem, it would be a good idea to include an attached file of your current ESP32 console logs that highlight the problem.")])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"troubleshooting-draft"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting-draft","aria-hidden":"true"}},[this._v("#")]),this._v(" Troubleshooting (Draft)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"during-assembly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#during-assembly","aria-hidden":"true"}},[this._v("#")]),this._v(" During assembly")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("connect the "),s("code",[e._v("ESPP32-PICO-KIT")]),e._v(" to a PC using a suitable USB cable")]),e._v(" "),s("li",[e._v("start a terminal emulator on the PC set for 115200 baud 8N1 connected to the serial device your OS identifies the ESP32 on\n"),s("ul",[s("li",[e._v("Windows will be a COMx: port")]),e._v(" "),s("li",[e._v("OSX will be /dev/tty.SLAB_USBtoUART")]),e._v(" "),s("li",[e._v("Linux will be /dev/ttyUSB0 (or similar, TBA)")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"with-just-the-esp32-psram-and-microsd-card-in-place-and-supporting-passives"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#with-just-the-esp32-psram-and-microsd-card-in-place-and-supporting-passives","aria-hidden":"true"}},[this._v("#")]),this._v(" With just the ESP32, PSRAM and microSD card in place (and supporting passives)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"no-firmware"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#no-firmware","aria-hidden":"true"}},[this._v("#")]),this._v(" No firmware")])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("rst:0x1 (POWERON_RESET),boot:0x13 (SPI_FAST_FLASH_BOOT)\nflash read err, 1000\nets_main.c 371\nets Jun  8 2016 00:22:57\n\nrst:0x10 (RTCWDT_RTC_RESET),boot:0x13 (SPI_FAST_FLASH_BOOT)\nflash read err, 1000\nets_main.c 371\nets Jun  8 2016 00:22:57\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Then that's my fault, and I've shipped you an ESP32-PICO-KIT module without the IMSAI 8080esp firmware flashed. This does "),t("strong",[this._v("not")]),this._v(" require a return and re-mail. But it will require you to follow a number of steps involving installing some tools from the "),t("code",[this._v("esp-idf")]),this._v(" to flash the firmware yourself. A detailed guide for this unlikely outcome will follow.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"i-see-an-error-in-the-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-see-an-error-in-the-logs","aria-hidden":"true"}},[this._v("#")]),this._v(" I see an error in the logs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"danger custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),t("p",[this._v("An error in the logs appears as "),t("strong",[this._v("red text")]),this._v(" with a capital "),t("strong",[this._v("E")]),this._v(" as the first character of the line.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),t("p",[this._v("Some errors cause the ESP32 to continuously reboot and so the error will be repeated and scroll up the screen and be hard to read. Simply unplug the USB cable to stop the console error log so you can read the error.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[this._v("Rebooting...\nets Jun  8 2016 00:22:57\n\nrst:0xc (SW_CPU_RESET),boot:0x13 (SPI_FAST_FLASH_BOOT)\nconfigsip: 188777542, SPIWP:0xee\nclk_drv:0x00,q_drv:0x00,d_drv:0x00,cs0_drv:0x00,hd_drv:0x00,wp_drv:0x00\nmode:DIO, clock div:1\nload:0x3fff0018,len:4\nload:0x3fff001c,len:4276\nload:0x40078000,len:9948\nload:0x40080400,len:6464\nentry 0x400806cc\n"),t("span",{staticStyle:{color:"#00FF00"}},[this._v("I (269) psram: This chip is ESP32-PICO")]),this._v("\n"),t("span",{staticStyle:{color:"#FF0000"}},[this._v("E (269) cpu_start: Failed to init external RAM, needed for external .bss segment")]),this._v("\nabort() was called at PC 0x400817e4 on core 0\n")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("pre",[t("code",[t("span",{staticStyle:{color:"#00FF00"}},[this._v("I (832) cpu_start: Pro cpu start user code\nI (178) cpu_start: Starting scheduler on PRO CPU.\nI (0) cpu_start: Starting scheduler on APP CPU.\n"),t("span",{staticStyle:{color:"#FF0000"}},[this._v("E (224) nvs: Error (UNKNOWN ERROR) opening NVS handle!")]),this._v("\nI (224) esp32_boot: Log Level set to NONE\nI (834) phy: phy_version: 4100, 6fa5e27, Jan 25 2019, 17:02:06, 0, 0\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("strong",[this._v("This is completely normal at this stage")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("This error will "),t("strong",[this._v("not")]),this._v(" prevent you getting on with the assembly &/or testing the Wi-Fi connectivity.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The Desktop UI is served from the "),t("code",[this._v("microSD Memory Card")]),this._v(" by the embedded web server and will only show if the connection checks out.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"i-don-t-see-a-wi-fi-access-point-ssid-named-imsai8080-but-i-do-see-one-named-imsai"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#i-don-t-see-a-wi-fi-access-point-ssid-named-imsai8080-but-i-do-see-one-named-imsai","aria-hidden":"true"}},[this._v("#")]),this._v(" I don't see a Wi-Fi Access Point SSID named "),t("code",[this._v("imsai8080")]),this._v(" but I do see one named "),t("code",[this._v("imsai")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("At this early stage, this is the only indication you'll get that you haven't successfully soldered the "),t("code",[this._v("microSD Card Socket")]),this._v(", or maybe you just forgot to insert the "),t("code",[this._v("microSD Memory Card")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),t("p",[this._v("I thought a bad "),t("code",[this._v("microSD Card Socket")]),this._v(" connection would be more obvious at this point and reported by an explicit error message in the console log, but it appears I was wrong. I will work to improve this step in the troubleshooting in a future firmware release.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("You also wont (shouldn't) be able to get the Desktop UI to load in your browser if this is your problem. The Desktop UI is served from the "),t("code",[this._v("microSD Memory Card")]),this._v(" by the embedded web server.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Once you've checked that it's not the latter and are suspecting the former, try some more flux and heat to reflow the solder along the fine pins at the rear of the "),t("code",[this._v("microSD Card Socket")]),this._v(". Only add more solder sparingly or you'll start to bridge pins, although some desoldering wick will help you resolve that issue if that is what you suspect has gone wrong.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"with-all-the-leds-and-ics-in-place-and-supporting-passives"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#with-all-the-leds-and-ics-in-place-and-supporting-passives","aria-hidden":"true"}},[this._v("#")]),this._v(" With all the LEDs and ICs in place (and supporting passives)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),t("p",[this._v("Without the toggle switches in place, the testing that is possible is limited, don't expect too much")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"testing-for-power-on-off"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing-for-power-on-off","aria-hidden":"true"}},[this._v("#")]),this._v(" Testing for power on/off")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("(refer to video above for now)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"testing-the-leds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing-the-leds","aria-hidden":"true"}},[this._v("#")]),this._v(" Testing the LEDs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("(refer to video above for now)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"with-the-toggle-switches-in-place"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#with-the-toggle-switches-in-place","aria-hidden":"true"}},[this._v("#")]),this._v(" With the toggle switches in place")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"testing-the-leds-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing-the-leds-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Testing the LEDs")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("(refer to video above for now)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h4",{attrs:{id:"testing-the-red-and-blue-toggle-switches"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing-the-red-and-blue-toggle-switches","aria-hidden":"true"}},[this._v("#")]),this._v(" Testing the Red and Blue Toggle Switches")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("em",[this._v("(refer to video above for now)")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"after-assembly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#after-assembly","aria-hidden":"true"}},[this._v("#")]),this._v(" After assembly")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("There is a growing community of fellow IMSAI 8080esp owners and interested parties, sharing with and helping each other on the "),t("strong",[this._v("IMSAI 8080esp Forum")]),this._v(".")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Remember I am one person, I have a day job, I need sleep and I'm in Sydney, Australia (UTC+10). So I could be at work or asleep when you most need support. The "),t("strong",[this._v("IMSAI 8080esp Forum")]),this._v(" on the other hand has members located all around the world, in different timezones and with great experience. I highly recommend the forum.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"essential-hardware-functionality-leds-and-toggle-switches"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#essential-hardware-functionality-leds-and-toggle-switches","aria-hidden":"true"}},[this._v("#")]),this._v(" Essential hardware functionality (LEDs and Toggle Switches)")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"the-hardware-checks-out-you-suspect-it-is-the-software"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-hardware-checks-out-you-suspect-it-is-the-software","aria-hidden":"true"}},[this._v("#")]),this._v(" The hardware checks out, you suspect it is the software")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("The troubleshooting outlined here focuses on understanding the messages that are logged to the console by the ESP32 as it boots.\nThe simplest way to see these messages is to")]),e._v(" "),s("ol",[s("li",[e._v("connect the "),s("code",[e._v("ESPP32-PICO-KIT")]),e._v(" to a PC using a suitable USB cable")]),e._v(" "),s("li",[e._v("start a terminal emulator on the PC set for 115200 baud 8N1 connected to the serial device your OS identifies the ESP32 on\n"),s("ul",[s("li",[e._v("Windows will be a COMx: port")]),e._v(" "),s("li",[e._v("OSX will be /dev/tty.SLAB_USBtoUART")]),e._v(" "),s("li",[e._v("Linux will be /dev/tty.USB0 (or similar, TBA)")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The level of detail provided by the ESP32 in the console logs can be changed by the "),t("strong",[this._v("NVS_LOG_LEVEL")]),this._v(" bits in the "),t("em",[this._v("startup configuration")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The most informative level to set "),t("strong",[this._v("NVS_LOG_LEVEL")]),this._v(" is "),t("strong",[this._v("INFO")]),this._v(". This is not recommended for normal operation as it is too verbose, but it is recommended for troubleshooting.")])}],!1,null,null,null);t.default=o.exports}}]);