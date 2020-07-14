# Aseprite Rich Presence

A simple to use Discord RPC application for Aseprite.

![](https://i.imgur.com/VMkH8TK.png)

## Requirements
- Node v12.x.x - [Download](https://nodejs.org/en/download/)
- NPM - Included with Node.
- Windows Build Tools - check Setup.

## Setup
- Pull the repository contents, or download the repository ZIP and extract the contents.
- In the console, type `npm install --global windows-build-tools`, this is required. _Windows only._
- After that is done, type `npm install`, this will install all of the needed packages.
- Type `node index.js` to run the rich presence.

## Alternative Setup - Windows only
- Run `windows-build-tools-install.bat`.
- When the installation is done, run `npm-install.bat`, this installs all needed packages.
- After everything is installed, you don't need to install it anymore. Every time you need to run the rich presence, open `start.bat`.

## Supported File Extensions
- `ASE`/`ASEPRITE`,
- `JPG`/`JPEG`,
- `PNG`,
- `GIF`,
- Other extensions will be shown as _image_.

## Note
- Please note that **only** the currently open **file name and extension** will be shown on the presence.