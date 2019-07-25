# Template Printer
This is a project to work with the tessel and thermal printer to print generic simple reciepts based off a template.

## Local Installation
These are the steps to install and run the project on your local machine.

### Download
To install and run this project, you need to download it, and install the node
dependencies. Run the following command in the root of the project.
```
npm install
```

You'll also need to setup your Tessel 2, and install the Tessel 2 command line
interface, `t2-cli`. You can find all these instructions here:
https://tessel.github.io/t2-start/index.html

The `npm start` script included will kick off a `t2 run`, so installing the cli,
either globally or into the project, is important.

## Hardware

### Tessel 2
The Tessel 2 is a small prototyping device that can run Node, Python, or Rust.
It has serial ports which can connect to arduino hardware. For more information,
check the website: https://tessel.io/

### Mini Thermal Receipt Printer
The Mini Thermal Receipt Printer is a tiny receipt printer, similar to what you
would see in any shop or restaurant. It uses no ink, and prints on special
receipt paper. For more information, check the website:
https://www.adafruit.com/products/597

## Contributing
If you would like to help or suggest something for the project, feel free to
create a git issue, or fork the project and make a PR.

## Related Projects
- Ticket Printer, using data from a webpage to fill in and print ticket information:
https://github.com/JRJurman/ticket-printer
- Tessel Thermal Printer, the inspiration for all of this:
https://github.com/zaccolley/tessel-thermalprinter
