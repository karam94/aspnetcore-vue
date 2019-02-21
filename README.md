# .NET Core 2.2 & VueJS 2.0  Template

This template is based on [Mark Pieszak's](https://github.com/MarkPieszak/aspnetcore-Vue-starter) starter template which is based on the [original starter templates](https://blogs.msdn.microsoft.com/webdev/2017/02/14/building-single-page-applications-on-asp-net-core-with-javascriptservices/) (Angular, Knockout, React, Aurelia, etc), which can be found [here](https://github.com/aspnet/JavaScriptServices/tree/dev/templates).

This template was created to cater for easy and quick creation of MVC/VueJS-based micro-frontends, matching my team's preferred technology stack. If you spot any [bugs or improvements](#bugs), please feel free to submit an issue or pull request!

# Table of Contents

* [Features](#features)
* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)
* [Recommended Plugins](#recommended-plugin-for-debugging-VueJS)
* [Planned Improvements](#planned-improvements)
* [Bugs & Improvements](#found-a-bug?-suggest-an-improvement?)
* [Special Thanks](#special-thanks)

# Features

- **[ASP.NET Core 2.2](https://get.asp.net/)**
  - Web API
- **[VueJS 2.0](https://vuejs.org/)**
  - Vuex (State Management)
- **Webpack**
  - HMR (Hot Module Replacement/Reloading)
- **[Bulma](https://bulma.io)**
  - Flexbox based CSS Framework

# Prerequisites:
 * [.Net Core 2.2](https://www.microsoft.com/net/download/windows)
 * [NodeJS](https://nodejs.org/) >= 8.9.4
 * [VSCode](https://code.visualstudio.com/) or VS2017

# Getting Started:
 - Install the template to your .NET CLI from NuGet: `dotnet new -i TODO`.
 - Create folder from template: `dotnet new TODO` ([Official documentation](https://docs.microsoft.com/en-us/dotnet/core/tools/dotnet-new?tabs=netcore2x)).
 - Restore Node dependencies by running `npm install`.
 - `dotnet run` or `npm run dev` or Run the application in VS Code or Visual Studio 2017.
   - Note: `dotnet run` should be run in `Development` environment for hot reloading. This setting can be set either within the command line or via the `launchSettings.json` available in the `Properties` folder.
- Browse to [http://localhost:5000](http://localhost:5000).

# Recommended plugins for VueJS
- [Vue.js Devtools for Google Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en).
- [Vue.js Devtools for Mozilla Firefox](https://addons.mozilla.org/en-GB/firefox/addon/vue-js-devtools/).

# Planned Improvements
* Install [Vuex-Persist](https://github.com/championswimmer/vuex-persist) as this will allow the optional out of the box ability to persist your Vuex state to Cookies or LocalStorage.

# Found a Bug? Suggest an improvement?

Nothing's ever perfect, but please let me know by creating an issue (make sure there isn't an existing one about it already), and we'll try and work out a fix for it! If you have any good ideas, or want to contribute, feel free to either make an Issue with the Proposal, or just make a PR from your Fork.


# Special Thanks

Many thanks go out to Steve Sanderson (@SteveSandersonMS) from Microsoft and his amazing work on [JavaScriptServices](https://blogs.msdn.microsoft.com/webdev/2017/02/14/building-single-page-applications-on-asp-net-core-with-javascriptservices/) and integrating the world of Node with ASP.NET Core.

### Also, a million thanks to key Contributors ! 

- [@Nordes](https://github.com/Nordes) :sparkles:
- [@mika76](https://github.com/mika76) :sparkles:
- [@vip32](https://github.com/vip32) :sparkles:
- [@anderly](https://github.com/anderly) :sparkles: