<h1 align="center">
  <br/>
  <img src="https://cdn.rawgit.com/buttercup-pw/buttercup-assets/054fc0fa/badge/desktop.svg" alt="Buttercup Desktop">
  <br/>
  <br/>
  <br/>
</h1>

> Cross-platform, free and open-source password manager based on NodeJS.

[![Buttercup](https://cdn.rawgit.com/buttercup-pw/buttercup-assets/6582a033/badge/buttercup-slim.svg)](https://buttercup.pw) [![Build Status](https://travis-ci.org/buttercup/buttercup-desktop.svg?branch=master)](https://travis-ci.org/buttercup/buttercup-desktop) [![Build status](https://ci.appveyor.com/api/projects/status/tvthn0hnrsrr4ugy/branch/master?svg=true)](https://ci.appveyor.com/project/sallar/buttercup/branch/master)
 [![Github All Releases](https://buttercup-download-count.now.sh/)](https://github.com/buttercup/buttercup-desktop/releases) [![Backers on Open Collective](https://opencollective.com/buttercup/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/buttercup/sponsors/badge.svg)](#sponsors) [![encryption](https://img.shields.io/badge/Encryption-AES%20256%20CBC-red.svg)](https://tools.ietf.org/html/rfc3602) [![Gitter](https://img.shields.io/gitter/room/buttercup-cpre/buttercup.svg)](https://gitter.im/buttercup/buttercup)

![image](https://user-images.githubusercontent.com/768052/29536730-9db58428-86c7-11e7-9bef-418a8cd14830.png)

## Beta software

Buttercup is currently under heavy development, and updates will be pushed here very frequently.
The application is currently in beta, but should be considered stable for general use.

Please check [buttercup-core](https://github.com/perry-mitchell/buttercup-core) for more information on Buttercup’s core module.

## Download & Install

[Head over to our website](https://buttercup.pw), or checkout the [releases page](https://github.com/buttercup/buttercup-desktop/releases) to download different builds and versions.

If you're using macOS, you can also use **Homebrew Cask** to download and install Buttercup:

``` bash
$ brew cask install buttercup
```

Buttercup is available for **macOS (dmg)**, **Windows (exe)** and **Linux (deb, rpm, tarball)** (64bit only). Buttercup is also available for [Arch linux (32/64bit) (AUR)](https://aur.archlinux.org/packages/buttercup-desktop/).

## Encryption & Format

Buttercup uses a delta-system to manage archive changes and save conflicts. The archive, upon saving, is encrypted with AES 256bit CBC mode with a SHA256 HMAC. Encryption is performed once the password has been salted and prepared with PBKDF2 at between 200-250k iterations.

Because security with password storage is of the utmost importance, Buttercup will remain in alpha/beta release mode until some level of professional scrutiny has occurred. It is completely possible that security-related changes will occur, but this is inevitable and we handle every question and criticism with great care when it comes to the safety of using our software.

## Features

Buttercup supports loading and saving credentials archives both locally and remotely. Remote archives can be stored in a variety of service providers like Dropbox, ownCloud and Nextcloud (and others that support WebDAV, such as Yandex).

Archives store groups and entries in a simple hierarchy. Both groups and entries can be moved into other groups. Deleted items are trashed before being removed permanently.

Buttercup has basic merge conflict resolution when 2 changes are made at once on the file (locally or remote).

You can import from other password managers (such as 1Password and KeePass) by opening your archive and choosing Import from the menu.

## Internationalization

Buttercup for Desktop supports the following languages:

 * **English** (Default)
 * Spanish
 * German
 * French
 * Russian

## Development

If you're interested in developing Buttercup:

### Install Dependencies & Run

``` bash
$ npm install
$ npm run start
```

## Package & Release

### Install Dependencies

You will need some extra dependencies to build for different platforms on a single platform. Please refer to [this guide](https://github.com/electron-userland/electron-builder/wiki/Multi-Platform-Build) and install required software for your platform.

### Building libraries before releasing

``` bash
$ npm run build
```

### Package

To package the app and make installers for all supported platforms:

``` bash
$ npm run release
```
This may take a while depending on how fast your computer is. All apps and installers will be in `app` directory.

To package only for the current platform:

``` bash
$ npm run package:current
```

Or for a specific platform:
``` bash
$ npm run package:mac
$ npm run package:win
$ npm run package:linux
```

## Contributors

### Creation

 * Sallar ([@sallar](https://twitter.com/sallar))
 * Perry ([@perry_mitchell](https://twitter.com/perry_mitchell))

### Contributions

This project exists thanks to all the people who contribute. [[Contribute]](CONTRIBUTING.md).
<a href="graphs/contributors"><img src="https://opencollective.com/buttercup/contributors.svg?width=890" /></a>

We'd also like to thank:

 * Mohammad Amiri (Brand & Identity) ([@pixelvisualize](https://twitter.com/pixelvisualize))
 * Arash Asghari (Brand & Identity) ([@_arashasghari](https://twitter.com/_arashasghari))

> We welcome contributions. Please read [Contribution Guide](CONTRIBUTING.md) before sending a PR.

### Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/buttercup#backer)]

<a href="https://opencollective.com/buttercup#backers" target="_blank"><img src="https://opencollective.com/buttercup/backers.svg?width=890"></a>

### Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/buttercup#sponsor)]

<a href="https://opencollective.com/buttercup/sponsor/0/website" target="_blank"><img src="https://opencollective.com/buttercup/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/buttercup/sponsor/1/website" target="_blank"><img src="https://opencollective.com/buttercup/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/buttercup/sponsor/2/website" target="_blank"><img src="https://opencollective.com/buttercup/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/buttercup/sponsor/3/website" target="_blank"><img src="https://opencollective.com/buttercup/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/buttercup/sponsor/4/website" target="_blank"><img src="https://opencollective.com/buttercup/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/buttercup/sponsor/5/website" target="_blank"><img src="https://opencollective.com/buttercup/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/buttercup/sponsor/6/website" target="_blank"><img src="https://opencollective.com/buttercup/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/buttercup/sponsor/7/website" target="_blank"><img src="https://opencollective.com/buttercup/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/buttercup/sponsor/8/website" target="_blank"><img src="https://opencollective.com/buttercup/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/buttercup/sponsor/9/website" target="_blank"><img src="https://opencollective.com/buttercup/sponsor/9/avatar.svg"></a>

## License

Released under [GNU/GPL Version 3](LICENSE)
