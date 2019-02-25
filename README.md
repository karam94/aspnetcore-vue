# .NET Core 2.2 & VueJS 2.0  Template

This template is based on [Mark Pieszak's](https://github.com/MarkPieszak/aspnetcore-Vue-starter) starter template which is based on the [original starter templates](https://blogs.msdn.microsoft.com/webdev/2017/02/14/building-single-page-applications-on-asp-net-core-with-javascriptservices/) (Angular, Knockout, React, Aurelia, etc), which can be found [here](https://github.com/aspnet/JavaScriptServices/tree/dev/templates).

This template was created to cater for easy and quick creation of MVC/VueJS-based micro-frontends, matching my team's preferred technology stack. If you spot any [bugs or improvements](#bugs), please feel free to submit an issue or pull request!

# Table of Contents

* [Features](#features)
* [Prerequisites](#prerequisites)
* [Getting Started](#getting-started)
* [Recommended Plugins for VueJS](#recommended-plugins-for-VueJS)
* [Planned Improvements](#planned-improvements)
* [Credits](#credits)

# Features

- **[ASP.NET Core 2.2](https://get.asp.net/)**
  - Web API
- **[VueJS 2.0](https://vuejs.org/)**
  - Vuex (State Management)
- **[Webpack](https://webpack.js.org/)**
  - HMR (Hot Module Replacement/Reloading)
- **[Bulma](https://bulma.io)**
  - Flexbox based CSS Framework

# Prerequisites:
 * [.NET Core 2.2](https://www.microsoft.com/net/download/windows)
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
* Upgrade from Vue.js 2.0 to Vue.js 3.0.
* Integrate Vue.js 3.0 CLI usage.
* Install [Vuex-Persist](https://github.com/championswimmer/vuex-persist) as this will allow the optional out of the box ability to persist your Vuex state to Cookies or LocalStorage.

# Credits
Huge shoutout to [Mark Pieszak](https://github.com/MarkPieszak/) and his [aspnetcore-Vue-starter](https://github.com/MarkPieszak/aspnetcore-Vue-starter) template that this project is based on, alongside all the contributors that have aided that [project](https://github.com/MarkPieszak/aspnetcore-Vue-starter).