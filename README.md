# Y U K I

<p align="center">
  <img width="250" height="250" src="https://cdn.imgchest.com/files/3yrgc5znz4z.png">
</p>
<b>
<p align="center" style = "emphasis">
  A collection of essential software for your PC.
</p>
</b>

<a href="https://github.com/Az-21/pwgen/blob/main/LICENSE" alt="GPL 3.0">
        <img src="https://img.shields.io/github/license/Az-21/pwgen?style=for-the-badge" /></a>
<a href="https://pwgen-az-21.vercel.app/" alt="Launch Website">
        <img src="https://img.shields.io/website?down_message=Offline&label=Website%20Status&logo=Vercel&style=for-the-badge&up_message=Online&url=https%3A%2F%2Fyuki-sage.vercel.app%2F" /></a>
<a href="https://kit.svelte.dev/" alt="Svelte">
        <img src="https://img.shields.io/badge/Built%20With-Svelte-%23F73C00?style=for-the-badge&logo=svelte" /></a>
<a href="https://tailwindcss.com/" alt="Tailwind CSS">
        <img src="https://img.shields.io/badge/Styled%20With-Tailwind-%2306B6D4?style=for-the-badge&logo=tailwind%20css" /></a>

# Website

[🚀 Launch Website](https://yuki-sage.vercel.app/)

# 🌠 Install Chocolatey

Chocolatey is a package manager for Windows. It simplifies the process of installing and updating software.

## One-time choco installation

1. Search `Windows PowerShell` in Start. Right-click -> Run as Administrator

2. Copy-paste and run the following command

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
```

3. When installation is complete, close PowerShell.

4. Restart PowerShell as admin (see step 1). Your system in now ready to install apps via `choco`. **NOTE: to use `choco` commands, you have to open PowerShell as an admin**

## Install an app

Copy the desired commands from [YUKI](https://yuki-sage.vercel.app/), paste it into PowerShell, and then run. That's it! Here's an example

```powershell
choco install spotify -y
```

## Update all apps

```powershell
choco update all -y
```

## Uninstall an app

```powershell
choco uninstall spotify -y
```

# User interface

<p>
  <img width="400" src="https://cdn.imgchest.com/files/84jdczjv84k.png">
</p>

## Features

✔ Info about price and source code

✔ Link to website

✔ Copy-paste `choco` commands

✔ Get all programs within a category with one click
