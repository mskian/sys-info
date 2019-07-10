# MY System INFO

> Get your Linux or Windows System Info 🗃  

[![Build Status](https://travis-ci.org/mskian/sys-info.svg?branch=master)](https://travis-ci.org/mskian/sys-info)  

![System Info](https://raw.githubusercontent.com/mskian/sys-info/master/screenshot.png)  

![System Info](https://raw.githubusercontent.com/mskian/sys-info/master/screenshot1.png)  

## Requirements

- Node 8x or 10x LTS
- GIT for Clone the RESPO

## Install via GIT

```bash
git clone https://github.com/mskian/sys-info.git
cd sys-info
npm install
```

- Execute the Script

```bash
node system.js
```

OR

```bash
npm start
```

## Used as CLI

- Open Cloned Location

```bash
npm link
```

```bash
mysysinfo
```

## Install via NPM

```bash
npm install -g mysystem-info
```

```bash
mysysinfo
```

## Library

Node `systeminformation` Library <https://github.com/sebhildebrandt/systeminformation>

## Changelogs

**v0.0.1**

- First Release

**v0.0.2**

- Add `.travis.yml` to `.npmignore`

**v0.0.3**

- Replace blockDevices with fsSize For proper Showing Proper Disk Usage
- still we need More information from Other Diskblocks but it shown one only
- Refer - <https://github.com/sebhildebrandt/systeminformation/issues/260>

## License

MIT
