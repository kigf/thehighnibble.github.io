(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{106:function(t,e,i){t.exports=i.p+"assets/img/rs232_jumpers.aa5b21af.jpg"},128:function(t,e,i){"use strict";i.r(e);var s=[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"configuration-draft"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration-draft","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration (Draft)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview","aria-hidden":"true"}},[this._v("#")]),this._v(" Overview")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Just like the real IMSAI 8080 computer, the default configuration of your kit is an empty machine. While you "),e("em",[this._v("can")]),this._v(" enter instructions using the toggle switches (and you "),e("em",[this._v("should")]),this._v(" experiment with this sometime) it's more interesting to run some real software.\nThe default configuration is like an empty machine with no ROM only RAM.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"getting-connected"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#getting-connected","aria-hidden":"true"}},[this._v("#")]),this._v(" Getting connected")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("Plug in the power to the IMSAI 8080esp kit.")]),t._v(" "),i("li",[t._v("On your computer, open the Wi-Fi settings and select the "),i("code",[t._v("imsai8080")]),t._v(" network (SSID).")]),t._v(" "),i("li",[t._v("When prompted for a password, enter "),i("code",[t._v("password")]),t._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("If you have a Mac, open your browser and enter "),e("code",[this._v("imsai8080.local")]),this._v(" as the web address.")]),this._v(" "),e("li",[this._v("If you have a PC, open your browser and enter "),e("code",[this._v("192.168.4.1")]),this._v(" as the address.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"default-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#default-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Default configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"imsai-8080-guest"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#imsai-8080-guest","aria-hidden":"true"}},[this._v("#")]),this._v(" IMSAI 8080 (guest)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("The default configuration is like an empty machine with no ROM only RAM.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("RAM is 64K occupying the entire address space from "),i("code",[t._v("0000h")]),t._v(" to "),i("code",[t._v("FFFFh")])]),t._v(" "),i("li",[t._v("CPU is Intel 8080 @ 2MHz with support for undocumented op-codes")]),t._v(" "),i("li",[t._v("No boot ROM is active by default")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"esp32-host"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esp32-host","aria-hidden":"true"}},[this._v("#")]),this._v(" ESP32 (host)")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("Wi-Fi set to "),i("strong",[t._v("Access-Point (AP)")]),t._v(" mode with the default SSID of "),i("code",[t._v("imsai8080")]),t._v(", password of "),i("code",[t._v("password")])]),t._v(" "),i("li",[t._v("Hostname (HOSTNAME environment variable) set to "),i("code",[t._v("imsai8080")]),t._v(" ("),i("code",[t._v("imsai8080.local")]),t._v(" for mDNS)")]),t._v(" "),i("li",[t._v("Port (PORT environment variable) set to "),i("code",[t._v("80")])]),t._v(" "),i("li",[t._v("Timezone (TZ environment variable) set for AEST+10, ADST+11 (ie. Sydney, Australia)")]),t._v(" "),i("li",[t._v("Time server (NTP_SERVER environment variable) set to "),i("code",[t._v("pool.ntp.org")])]),t._v(" "),i("li",[t._v("POST (Power On Self Test) disabled")]),t._v(" "),i("li",[t._v("Console log level set to "),i("code",[t._v("NONE")]),t._v(" (details to follow)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("Once you are connected to the Wi-Fi network, start a Chrome browser and enter the URL "),e("code",[this._v("http://imsai8080.local")]),this._v(" to see the Desktop UI.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"startup-configuration-non-volatile-storage-nvs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#startup-configuration-non-volatile-storage-nvs","aria-hidden":"true"}},[this._v("#")]),this._v(" Startup configuration (Non-Volatile Storage, NVS)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To enter "),e("em",[this._v("startup configuration mode")]),this._v(", follow the sequence:")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[t._v("ensure the ESP32 is connected to a USB power source, the red LED on the ESP32 board should be illuminated")]),t._v(" "),i("li",[t._v("turn the front panel power switch "),i("strong",[t._v("off")]),t._v(", "),i("code",[t._v("PWR OFF")]),t._v(", the down position")]),t._v(" "),i("li",[t._v("hold the "),i("code",[t._v("EXAMINE")]),t._v(" toggle in the "),i("strong",[t._v("Examine")]),t._v(", up position")]),t._v(" "),i("li",[t._v("press and release the "),i("code",[t._v("Reset")]),t._v(" switch while holding the "),i("code",[t._v("EXAMINE")]),t._v(" toggle up")]),t._v(" "),i("li",[t._v("hold the "),i("code",[t._v("EXAMINE")]),t._v(" toggle for a second or two")]),t._v(" "),i("li",[t._v("release the "),i("code",[t._v("EXAMINE")]),t._v(" toggle")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("There are 2 "),i("code",[t._v("Reset")]),t._v(" switches available that both do the same thing:")]),t._v(" "),i("ul",[i("li",[t._v("The "),i("code",[t._v("Tactile Switch SPST-NO")]),t._v(" you installed in the "),i("code",[t._v("Reset")]),t._v(" position on the PCB")]),t._v(" "),i("li",[t._v("The small tactile switch on the ESP32 board marked "),i("code",[t._v("EN")])]),t._v(" "),i("li",[i("strong",[t._v("NOT")]),t._v(" the "),i("em",[t._v("blue toggle switch")]),t._v(" on the front panel")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("The IMSAI 8080esp should now be in "),i("em",[t._v("startup configuration mode")]),t._v(". This is indicted by a running LED pattern (right to left) on the 4 LEDS at the right hand side of the front panel ("),i("code",[t._v("HOLD")]),t._v(", "),i("code",[t._v("WAIT")]),t._v(", "),i("code",[t._v("RUN")]),t._v(", "),i("code",[t._v("INTERRUPTS ENABLED")]),t._v(").")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("The current "),e("em",[this._v("startup configuration value")]),this._v(" is displayed on the Address Bus LEDs (bits 0-15) when you enter "),e("em",[this._v("startup configuration mode")]),this._v(".")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("The whole procedure, including entering a value to boot into CP/M 2.2 (see below) is demonstrated in this "),e("em",[this._v("Kit Assembly")]),this._v(" video\n"),this._v(" "),e("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/Cwv_gRtWnZM?start=200",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"warning custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("p",[t._v("When you "),i("strong",[t._v("Deposit")]),t._v(" a new "),i("em",[t._v("startup configuration value")]),t._v(", all the bits of the current value are overwritten. If your objective is to "),i("strong",[t._v("modify")]),t._v(" the existing value changing only a few of the bits, you must toggle in all the bits of the existing value indicated by the Address Bus LEDs and then switch the bits you want to configure differently, before you "),i("strong",[t._v("Deposit")]),t._v(" this new value.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("Booting into MSBASIC 1.4 (8K)")]),t._v(" "),i("p",[t._v("To configure the IMSAI 8080esp to boot directly into a ROM based "),i("em",[t._v("MSBASIC 1.4 (8K)")]),t._v(" in 8080 mode @ 2 MHz, the following startup configuration value can be used.")]),t._v(" "),i("ul",[i("li",[t._v("Binary: 0000 0100 0000 0000")]),t._v(" "),i("li",[t._v("Octal: 002000")]),t._v(" "),i("li",[t._v("Hexadecimal: 0400")])]),t._v(" "),i("ol",[i("li",[t._v("Enter "),i("em",[t._v("startup configuration mode")]),t._v(" (above)")]),t._v(" "),i("li",[t._v("Toggle in this value on the "),i("strong",[t._v("Address")]),t._v(" toggle switches")]),t._v(" "),i("li",[t._v("Raise the "),i("code",[t._v("DEPOSIT")]),t._v(" toggle to the "),i("strong",[t._v("Deposit")]),t._v(", up position to store the entered startup configuration value.")]),t._v(" "),i("li",[t._v("Reboot the IMSAI 8080esp by pressing a "),i("code",[t._v("Reset")]),t._v(" switch")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("Booting into XYBASIC")]),t._v(" "),i("p",[t._v("To configure the IMSAI 8080esp to boot directly into a ROM based "),i("em",[t._v("XYBASIC")]),t._v(" in Z80 mode @ 4 MHz, the following startup configuration value can be used.")]),t._v(" "),i("ul",[i("li",[t._v("Binary: 0000 0101 0101 0000")]),t._v(" "),i("li",[t._v("Octal: 002520")]),t._v(" "),i("li",[t._v("Hexadecimal: 0550")])]),t._v(" "),i("ol",[i("li",[t._v("Enter "),i("em",[t._v("startup configuration mode")]),t._v(" (above)")]),t._v(" "),i("li",[t._v("Toggle in this value on the "),i("strong",[t._v("Address")]),t._v(" toggle switches")]),t._v(" "),i("li",[t._v("Raise the "),i("code",[t._v("DEPOSIT")]),t._v(" toggle to the "),i("strong",[t._v("Deposit")]),t._v(", up position to store the entered startup configuration value.")]),t._v(" "),i("li",[t._v("Reboot the IMSAI 8080esp by pressing a "),i("code",[t._v("Reset")]),t._v(" switch")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("Booting into CP/M 2.2")]),t._v(" "),i("p",[t._v("To configure the IMSAI 8080esp to boot from the disk image in drive "),i("code",[t._v("DSK:A:")]),t._v(" in Z80 mode @ 4 MHz, the following startup configuration value can be used. You can mount the "),i("code",[t._v("cpm_22.dsk")]),t._v(" disk image in drive "),i("code",[t._v("DSK:A:")]),t._v(" via the "),i("em",[t._v("Desktop UI")]),t._v(".")]),t._v(" "),i("ul",[i("li",[t._v("Binary: 0000 1001 0101 0000")]),t._v(" "),i("li",[t._v("Octal: 004520")]),t._v(" "),i("li",[t._v("Hexadecimal: 0950")])]),t._v(" "),i("ol",[i("li",[t._v("Enter "),i("em",[t._v("startup configuration mode")]),t._v(" (above)")]),t._v(" "),i("li",[t._v("Toggle in this value on the "),i("strong",[t._v("Address")]),t._v(" toggle switches")]),t._v(" "),i("li",[t._v("Raise the "),i("code",[t._v("DEPOSIT")]),t._v(" toggle to the "),i("strong",[t._v("Deposit")]),t._v(", up position to store the entered startup configuration value.")]),t._v(" "),i("li",[t._v("Reboot the IMSAI 8080esp by pressing a "),i("code",[t._v("Reset")]),t._v(" switch")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",{staticStyle:{"text-align":"right"}},[t._v("Address Bit")]),t._v(" "),i("th",[t._v("Name")]),t._v(" "),i("th",[t._v("Equivalent Flag")]),t._v(" "),i("th",[t._v("Description")])])]),t._v(" "),i("tbody",[i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("0")]),t._v(" "),i("td",[t._v("NVS_POST")]),t._v(" "),i("td",[t._v("n/a")]),t._v(" "),i("td",[t._v("Enable Power On Self Test (POST)")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("1-2")]),t._v(" "),i("td",[t._v("NVS_LOG_LEVEL")]),t._v(" "),i("td",[t._v("n/a")]),t._v(" "),i("td",[t._v("Set ESP32 console "),i("strong",[t._v("Log Level")]),t._v(", 0 = NONE; 1 = ERROR; 2 = WARN; 3 = INFO")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("3")]),t._v(" "),i("td",[t._v("NVS_IF_STA")]),t._v(" "),i("td",[t._v("n/a")]),t._v(" "),i("td",[t._v("Set Wi-Fi Mode,  0 = Access Point Mode (AP); 1 = Station Mode (STA)")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("4")]),t._v(" "),i("td",[t._v("NVS_Z80")]),t._v(" "),i("td",[i("code",[t._v("-z")]),t._v(", "),i("code",[t._v("-8")])]),t._v(" "),i("td",[t._v("Enable Z80 CPU emulation, 0 = 8080 "),i("code",[t._v("-8")]),t._v("; 1 = Z80 "),i("code",[t._v("-z")])])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("5")]),t._v(" "),i("td",[t._v("NVS_NO_UNDOC")]),t._v(" "),i("td",[i("code",[t._v("-u")])]),t._v(" "),i("td",[t._v("Suppress support for undocumented op. codes, 1 = "),i("code",[t._v("-u")])])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("6")]),t._v(" "),i("td",[t._v("NVS_4MHZ")]),t._v(" "),i("td",[i("code",[t._v("-f")])]),t._v(" "),i("td",[t._v("Set CPU speed, 0 = 2 MHz "),i("code",[t._v("-f 2")]),t._v("; 1 = 4 MHz "),i("code",[t._v("-f 4")])])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("7")]),t._v(" "),i("td",[t._v("NVS_UNLIMITED")]),t._v(" "),i("td",[i("code",[t._v("-f 0")])]),t._v(" "),i("td",[t._v("Set CPU speed to Unlimited, 0 = use speed from bit 6; 1 = Unlimited "),i("code",[t._v("-f 0")])])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("8-10")]),t._v(" "),i("td",[t._v("NVS_BOOT_ROM")]),t._v(" "),i("td",[i("code",[t._v("-x")])]),t._v(" "),i("td",[t._v("Set boot ROM to 1 of 7 "),i("em",[t._v("slots")]),t._v(", 0 = No boot ROM, 1-7 = use slot "),i("em",[t._v("n")]),t._v(" "),i("code",[t._v("-x $ROMn")])])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("11")]),t._v(" "),i("td",[t._v("NVS_BANK_ROM")]),t._v(" "),i("td",[i("code",[t._v("-r")])]),t._v(" "),i("td",[t._v("Enable "),i("strong",[t._v("MPU-B(A)")]),t._v(" style Banked ROM/RAM functionality, 1 = "),i("code",[t._v("-r")]),t._v(". Only compatible with MPU-A ROM images.")])]),t._v(" "),i("tr",[i("td",{staticStyle:{"text-align":"right"}},[t._v("12-15")]),t._v(" "),i("td"),t._v(" "),i("td"),t._v(" "),i("td",[t._v("Reserved for future use")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[t._v("To "),i("strong",[t._v("set")]),t._v(" a bit, put the corresponding "),i("strong",[t._v("Address")]),t._v(" toggle switch in the "),i("strong",[t._v("up")]),t._v(" position.")]),t._v(" "),i("li",[t._v("To "),i("strong",[t._v("clear")]),t._v(" a bit, put the corresponding "),i("strong",[t._v("Address")]),t._v(" toggle switch in the "),i("strong",[t._v("down")]),t._v(" position.")]),t._v(" "),i("li",[t._v("Raise the "),i("code",[t._v("DEPOSIT")]),t._v(" toggle to the "),i("strong",[t._v("Deposit")]),t._v(", up position to store the entered startup configuration value.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("The IMSAI 8080esp must be rebooted for the new configuration to take effect. This can be done by pressing a "),e("code",[this._v("Reset")]),this._v(" switch.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("For further details about the "),i("em",[t._v("Equivalent Flag")]),t._v(" refer to the "),i("strong",[t._v("Z80PACK")]),t._v(" documentation for the "),i("strong",[t._v("imsaisim")]),t._v(" machine.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"serial-communications-rs232-usb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serial-communications-rs232-usb","aria-hidden":"true"}},[this._v("#")]),this._v(" Serial Communications (RS232, USB)")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("The "),i("strong",[t._v("IMSAI 8080esp")]),t._v(" is configured with a single simulated "),i("strong",[t._v("SIO")]),t._v(" UART (TTY:). When the machine boots, the "),i("strong",[t._v("SIO")]),t._v(" UART is routed to the physical UART on the "),i("code",[t._v("ESP32-PICO-KIT")]),t._v(".")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("Both the "),i("em",[t._v("ESP32 console log")]),t._v(" and the IMSAI 8080 "),i("strong",[t._v("SIO")]),t._v(" (TTY:) will be directed to the serial UART. If you set the "),i("code",[t._v("NVS_LOG_LEVEL")]),t._v(" to "),i("code",[t._v("INFO")]),t._v(" (3) this will likely send console log messages during normal use of the machine. It is recommended to set the "),i("code",[t._v("NVS_LOG_LEVEL")]),t._v(" to a lower level during normal operation.")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"warning custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),i("p",[t._v("If you start the "),i("strong",[t._v("Desktop UI")]),t._v(" from a web browser and the "),i("em",[t._v("TTY: virtual device")]),t._v(" is connected (default behavior) then the simulated SIO UART (TTY:) is disconnected from the physical UART on the "),i("code",[t._v("ESP32-PICO-KIT")]),t._v(" and instead re-routed to the "),i("em",[t._v("TTY: virtual device")]),t._v(" on the Desktop UI. If the "),i("em",[t._v("TTY: virtual device")]),t._v(" is disconnected, then the SIO UART is re-routed back to the physical UART on the "),i("code",[t._v("ESP32-PICO-KIT")]),t._v(", ie. only one of these two destinations can be connected at a time.")]),t._v(" "),i("p",[i("strong",[t._v("Note: the "),i("em",[t._v("ESP32 console log")]),t._v(" is always sent to the physical UART and is never redirected.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"serial-uart-over-usb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serial-uart-over-usb","aria-hidden":"true"}},[this._v("#")]),this._v(" Serial UART over USB")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("ESP32-PICO-KIT")]),this._v(" supports serial communications from the UART over USB. It uses a "),e("em",[this._v("Silicon Labs CP210x USB to UART bridge")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",[i("li",[t._v("connect the "),i("code",[t._v("ESPP32-PICO-KIT")]),t._v(" to a PC using a suitable USB cable")]),t._v(" "),i("li",[t._v("start a terminal emulator on the PC set for 115200 baud 8N1 connected to the serial device your OS identifies the "),i("code",[t._v("ESP32-PICO-KIT")]),t._v(" on\n"),i("ul",[i("li",[t._v("Windows will be a COMx: port")]),t._v(" "),i("li",[t._v("OSX will be /dev/tty.SLAB_USBtoUART")]),t._v(" "),i("li",[t._v("Linux will be /dev/ttyUSB0 (or similar, TBA)")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("If you do not see a TTY/COM port on your PC presented by the ESP32-PICO-KIT when connected, you may need to install a driver for the "),e("em",[this._v("Silicon Labs CP210x USB to UART bridge")]),this._v(".")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"serial-uart-over-rs232"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serial-uart-over-rs232","aria-hidden":"true"}},[this._v("#")]),this._v(" Serial UART over RS232")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("Serial UART over RS232")]),this._v(" and "),e("em",[this._v("Serial UART over USB")]),this._v(" are mutually exclusive, ie. they cannot be used at the same time.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("em",[this._v("Serial UART over RS232")]),this._v(" is configured by using the supplied jumpers/shunts to bridge the required pins on the "),e("code",[this._v("Patch")]),this._v(" and "),e("code",[this._v("Comms")]),this._v(" headers accessible on the rear of the PCB, and connecting a suitable RS232 device to the DE-9M connector labeled "),e("code",[this._v("RS232-1")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You must position 4 of the jumpers/shunts provided to enable the "),e("em",[this._v("Serial UART over RS232")]),this._v(". This image shows the only currently valid and supported configuration for the jumpers/shunts on both the "),e("code",[this._v("Patch")]),this._v(" and "),e("code",[this._v("Comms")]),this._v(" headers.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:i(106),alt:"Patch & Comms jumpers"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"patch-header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#patch-header","aria-hidden":"true"}},[this._v("#")]),this._v(" Patch header")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("bridge Tx - T1 - "),e("em",[this._v("position second from right")])]),this._v(" "),e("li",[this._v("bridge Rx - R1 - "),e("em",[this._v("right most position")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"comms-header"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#comms-header","aria-hidden":"true"}},[this._v("#")]),this._v(" Comms header")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("bridge @ Tx1 - "),e("em",[this._v("second position from top")])]),this._v(" "),e("li",[this._v("bridge @ Rx1 - "),e("em",[this._v("fourth position from top")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("The DE-9M connector labeled "),e("code",[this._v("RS232-2")]),this._v("is currently unused but is intended for future expansion")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"wi-fi-communications"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wi-fi-communications","aria-hidden":"true"}},[this._v("#")]),this._v(" Wi-Fi Communications")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("The ESP32 has on-board Wi-Fi and can boot in either "),i("strong",[t._v("Access Point")]),t._v(" (AP) or "),i("strong",[t._v("Station")]),t._v(" (STA) mode. The mode is determined by the "),i("strong",[t._v("NVS_IF_STA")]),t._v(" bit in the "),i("em",[t._v("startup configuration")]),t._v(" stored in NVS and described "),i("a",{attrs:{href:"#startup-configuration-non-volatile-storage-nvs"}},[t._v("above")]),t._v(".")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[t._v("In AP mode, the ESP32 acts as an Access Point and broadcasts a system defined SSID and provides DHCP services for clients to connect\n"),i("ul",[i("li",[t._v("The "),i("strong",[t._v("SSID")]),t._v(" hardcoded in the firmware is "),i("em",[t._v("imsai")]),t._v(" with a "),i("strong",[t._v("password")]),t._v(" of "),i("em",[t._v("password")]),t._v(", this will only be used if the "),i("strong",[t._v("boot.conf")]),t._v(" file on the microSD card cannot be read or does not include a "),i("code",[t._v("HOSTNAME=name")]),t._v(" statement, see "),i("a",{attrs:{href:"#boot-conf-file"}},[t._v("Boot.conf file")]),t._v(" below.")]),t._v(" "),i("li",[t._v("If a "),i("code",[t._v("HOSTNAME=name")]),t._v(" statement is found in the "),i("strong",[t._v("boot.conf")]),t._v(" file, then this hostname is also used as the "),i("strong",[t._v("SSID")]),t._v(" in AP mode. In this case, the "),i("strong",[t._v("password")]),t._v(" still remains "),i("em",[t._v("password")])])])]),t._v(" "),i("li",[t._v("In STA mode, the ESP32 acts as a Wi-Fi station or client and can join an existing Wi-Fi network (supporting WPA or WPA2, but not Enterprise WPA).\n"),i("ul",[i("li",[t._v("The "),i("strong",[t._v("SSID")]),t._v(" and "),i("strong",[t._v("password")]),t._v(" of the desired Wi-Fi network must be configured in the "),i("strong",[t._v("boot.conf")]),t._v(" file using the "),i("code",[t._v("SSID=name")]),t._v(" and "),i("code",[t._v("PASSWORD=password")]),t._v(" statements, see "),i("a",{attrs:{href:"#boot-conf-file"}},[t._v("Boot.conf file")]),t._v(" below.")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),i("p",[t._v("The "),i("strong",[t._v("boot.conf")]),t._v(" file can be edited via the "),i("strong",[t._v("SYS:")]),t._v(" virtual system device in the Desktop UI while connected to the IMSAI 8080esp running in AP mode.\nAlternatively the "),i("strong",[t._v("microSD Card")]),t._v(" can be mounted in a PC and the "),i("code",[t._v("/imsai/conf/boot.conf")]),t._v(" file edited directly in a text editor then the "),i("strong",[t._v("microSD Card")]),t._v(" returned to the IMSAI 8080esp before it is powered on.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("When the IMSAI 8080esp is configured to work in station mode (STA) but it is unable to make a connection to the configured Wi-Fi network within 30 seconds, the ESP32 will reboot and temporarily start in AP mode.")]),this._v(" "),e("ul",[e("li",[this._v("This enables you to connect to the IMSAI 8080esp from a browser on the advertised SSID and modify/correct the STA mode Wi-Fi configuration.")]),this._v(" "),e("li",[this._v("The simplest way to determine if this has happed is to look for the AP mode SSID being broadcast, or to look at the ESP32 console log output on the UART.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("The design of the IMSAI 8080esp is intended for only "),e("strong",[this._v("one")]),this._v(" Wi-Fi client (browser)to be connected at any given time. It is untested and not recommended to connect multiple clients at the same time.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"boot-conf-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#boot-conf-file","aria-hidden":"true"}},[this._v("#")]),this._v(" Boot.conf file")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("strong",[this._v("boot.conf")]),this._v(" file is located on the microSD card with the path "),e("code",[this._v("/imsai/conf/boot.conf")]),this._v("\nAs the ESP32 boots this file is loaded, each line parsed and the "),e("strong",[this._v("variable=value")]),this._v(" pair is added to the environment (like posix environment variables).")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("There is little to no error checking done at the moment. If you significantly change this file and remove a variable, or leave a value blank you may cause the boot process to fail. I know I've managed to do that once or twice.")]),this._v(" "),e("p",[this._v("The solution is to mount the microSD card on a PC and edit the "),e("strong",[this._v("boot.conf")]),this._v(" file to fix the problem.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("#Network configuration\nNTP_SERVER=pool.ntp.org\nTZ=AEST-10AEDT,M10.1.0,M4.1.0\nHOSTNAME=imsai8080\nPORT=80\nSSID=mySSID\nPASSWORD=myPASSWORD\n#Bootrom configutation\nROM1=mpu-a-rom.hex\nROM2=mpu-a-vio-rom.hex\nROM3=basic4k.hex\nROM4=basic8k.hex\nROM5=xybasic.hex\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("em",[this._v("Network configuration")]),this._v(" entries should be familiar and mostly self explanatory.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The TZ variable cannot use values like "),e("em",[this._v("Sydney/Australia")]),this._v(" (Olson format) but must use explicitly defined timezone strings (POSIX format) eg. "),e("code",[this._v("TZ=AEST-10AEDT,M10.1.0,M4.1.0")]),this._v(" which is correct for Sydney, Australia.")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",[t._v("The "),i("em",[t._v("Bootrom configuration")]),t._v(" entries define the "),i("em",[t._v("slots")]),t._v(" corresponding to the "),i("strong",[t._v("NVS_BOOT_ROM")]),t._v(" bits in the "),i("em",[t._v("Startup configuration (NVS)")]),t._v(" (see above). There can be a maximum of 7, "),i("code",[t._v("ROM1")]),t._v(" to "),i("code",[t._v("ROM7")]),t._v(". Each value should be the filename of a bootable program in "),i("em",[t._v("Intel HEX file format")]),t._v(" (TBA) and located on the microSD card in the path "),i("code",[t._v("/imsai/")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"system-conf-file"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#system-conf-file","aria-hidden":"true"}},[this._v("#")]),this._v(" System.conf file")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("strong",[this._v("system.conf")]),this._v(" file is located on the microSD card with the path "),e("code",[this._v("/imsai/conf/system.conf")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("This is a legacy configuration file, maintained for source code compatibility with the "),e("em",[this._v("Z80PACK, imsaisim")]),this._v(" machine.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-config extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("ram            64\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"danger custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("WARNING")]),this._v(" "),e("p",[this._v("Changing this value is not tested and is likely to result in the machine failing to work as expected.")])])}],o=i(0),n=Object(o.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("p",[t._v("In order to run any applications, you will need to activate a virtual ROM (eg. to run BASIC, or boot a floppy disk) and maybe load an operating system (such as CP/M) from a virtual disk.")]),t._v(" "),i("p",[t._v("Also like the original computer, your IMSAI 8080esp has no video output port. Owners of the original IMSAI 8080 would connect a serial terminal (either a teletype printer or visual display unit) to a serial port. While you can still do this (see "),i("a",{attrs:{href:"http://localhost:8080/imsai8080/configure/#serial-communications-rs232-usb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Serial Communications"),i("OutboundLink")],1),t._v(" section), this modern kit offers a much easier solution using Wi-Fi.")]),t._v(" "),i("p",[t._v("Once power is applied to your kit, the ESP32 will create a Wi-Fi Access Point. You can connect your computer to this Wi-Fi network as if it were connected to a Wi-FI router. You can then open a web page, the Desktop UI, that will give you full access to the IMSAI 8080esp - including a virtual serial terminal (TTY:), floppy disks, printer (LPT:) and more.")]),t._v(" "),i("p",[t._v("Once connected, you can then configure the IMSAI 8080esp to connect directly to your home Wi-Fi, so you can use it without having to change your Wi-FI settings again.")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),i("p",[t._v("Your computer should now be connected, and you will be able to open the Desktop UI. The web interface has been written and tested with the Chrome browser in mind, and you might find it works differently if you are using a different browser.")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),i("p",[t._v("The startup configuration is modified via the toggle switches on the front panel.")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),i("p",[t._v("To set the startup configuration mode value, follow the sequence:")]),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),t._m(29),t._v(" "),i("p",[t._v("This enables you to use any software on the IMSAI 8080 that communicates via the SIO (TTY:) using a terminal or terminal emulator depending your method of connection.")]),t._v(" "),i("p",[t._v("The only supported speed with the current firmware is 115200 baud @ 8N1")]),t._v(" "),t._m(30),t._v(" "),t._m(31),t._v(" "),t._m(32),t._v(" "),t._m(33),t._v(" "),t._m(34),t._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),t._m(35),t._v(" "),i("p",[t._v("Drivers are available direct from the manufacturer at "),i("a",{attrs:{href:"https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers"),i("OutboundLink")],1)])]),t._v(" "),i("p",[t._v("Additional information is available from the Espressif (manufacturer of the "),i("code",[t._v("ESP32-PICO-KIT")]),t._v(") web site at "),i("a",{attrs:{href:"https://docs.espressif.com/projects/esp-idf/en/latest/get-started/establish-serial-connection.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.espressif.com/projects/esp-idf/en/latest/get-started/establish-serial-connection.html"),i("OutboundLink")],1)]),t._v(" "),t._m(36),t._v(" "),t._m(37),t._v(" "),t._m(38),t._v(" "),i("p",[t._v("RS232 line levels are provided by the Maxim MAX3232 IC (data sheet TBA)")]),t._v(" "),t._m(39),t._v(" "),t._m(40),t._v(" "),t._m(41),t._v(" "),t._m(42),t._v(" "),t._m(43),t._v(" "),t._m(44),t._v(" "),t._m(45),t._v(" "),t._m(46),t._v(" "),t._m(47),t._v(" "),t._m(48),t._v(" "),t._m(49),t._v(" "),t._m(50),t._v(" "),t._m(51),t._v(" "),t._m(52),t._v(" "),t._m(53),t._v(" "),t._m(54),t._v(" "),i("p",[t._v("The default configuration, as shipped is a follows:")]),t._v(" "),t._m(55),t._m(56),t._v(" "),i("div",{staticClass:"tip custom-block"},[i("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),t._m(57),t._v(" "),i("p",[t._v("A file with TZ variable values for many timezones can be found at "),i("a",{attrs:{href:"https://www.di-mgt.com.au/src/wclocktz.ini",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.di-mgt.com.au/src/wclocktz.ini"),i("OutboundLink")],1),t._v(" "),i("a",{attrs:{href:"https://groups.google.com/d/msg/imsai8080esp/PdNyxAOeBhU/7_IgKXXbCAAJ",target:"_blank",rel:"noopener noreferrer"}},[t._v("Credit to: John Mann in the Forum"),i("OutboundLink")],1)]),t._v(" "),i("p",[t._v("An article that defines the POSIX format can be found at "),i("a",{attrs:{href:"https://www.gnu.org/software/libc/manual/html_node/TZ-Variable.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Specifying the Time Zone with TZ"),i("OutboundLink")],1),t._v(', however please note, the "third format" referenced in this article is the Olson format, and not supported on the ESP32.')])]),t._v(" "),t._m(58),t._v(" "),t._m(59),t._v(" "),t._m(60),t._v(" "),t._m(61),t._v(" "),i("p",[t._v("The only parameter that effects the IMSAI 8080esp is the last line:")]),t._v(" "),t._m(62),i("p",[t._v("This still sets the maximum amount of RAM allocated to the simulated machine in KB.")]),t._v(" "),t._m(63)])},s,!1,null,null,null);e.default=n.exports}}]);