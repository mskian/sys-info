# My System INFO 🖥

> Get your Linux Distro or Windows System Info 🗃  

[![dependencies Status](https://david-dm.org/mskian/sys-info/status.png)](https://david-dm.org/mskian/sys-info) [![Build Status](https://travis-ci.org/mskian/sys-info.svg?branch=master)](https://travis-ci.org/mskian/sys-info) [![Github Workflow](https://github.com//mskian/sys-info/workflows/sys-info-test/badge.svg)](https://github.com/mskian/sys-info/actions)  

![System Info](https://raw.githubusercontent.com/mskian/sys-info/master/screenshot.png)  

![System Info](https://raw.githubusercontent.com/mskian/sys-info/master/screenshot1.png)  

## ⚙ Requirements

- Node 8x or 10x LTS
- GIT for Clone the RESPO

## 📦 Install via GIT

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

## 🌀 Used as CLI

- Open Cloned Location

```bash
npm link
```

```bash
mysysinfo
```

## 📦 Install via NPM

```bash
npm install -g mysystem-info
```

```bash
mysysinfo
```

## 🖥 Supported OS

I am Tested this on Ubuntu and Windows 10 it works well but I gathered some issues on Windows after fetching the Output it does not exit the Process if you are Facing this issue please open an issue ticket with Proper error details.

## 🗃 Library

Node `systeminformation` Library <https://github.com/sebhildebrandt/systeminformation>

## 🏗 Contributions

Your PR's are Always welcome 🦄

## 🐛 Bug Report

If you find any issues create an issue Ticket Here ✉ <https://github.com/mskian/sys-info/issues>

## 📑 Changelogs

**v0.0.1**

- First Release

**v0.0.2**

- Add `.travis.yml` to `.npmignore`

**v0.0.3**

- Replace blockDevices with fsSize For proper Showing Proper Disk Usage
- still we need More information from Other Diskblocks but it shown one only
- Refer - <https://github.com/sebhildebrandt/systeminformation/issues/260>

**v0.0.4**

- Remove Unused Code
- Dependency Update

**v0.0.5**

- Update Dependency
- Improved Readme

**v0.0.6**

- No Major Changes

**v0.0.7**

- Remove Colors and Lines from Console log Output (Simplify)

**v0.0.8**

- Add Github Workflow Test
- Bring back Text color on Terminal
- Windows CMD Stucks After Fetching the System info Output (I due some npm module issues)

**v0.0.9**

- Update dependencies

## ☑ License

MIT
