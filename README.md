# Home Page
Very first home page to teach myself the basics of how to use HTML, CSS, JavaScript, and Node.js. Before this, I had no knowledge of any web development. Heavy visual inspiration from [alanrey6](https://github.com/alanrey6/startpage-az). Many tweaks, comments, and changes were made just about everywhere other than the visuals. I basically wanted to improve his version and learn how to make it myself, while customizing it to my needs and adding a way to deploy it using Express.js through docker.  This repository will essentially be my notes on how it works and to run it.

## Manual Setup

[Node.js](https://nodejs.org/en/) is needed to run the HTTP server. I tested it with the [WSL2 version](https://docs.microsoft.com/en-ca/windows/dev-environment/javascript/nodejs-on-wsl).

First, install the packages in the environment.
```bash
npm install
```
To enable weather functionality, a `.env` file needs to be created in the root directory with an OpenWeatherMap API key along with a location. One can paste the necessary values into the `.env.sample` file then remove `.sample` from the filename.

Web links, located in `/public/js/config.js`, can be customized to whatever one desires.

Finally, to start the web server:
```bash
node app.js
```

## Docker Setup


## Other Links to Read
- [https://stpg.tk/guides/basic-startpage/]()
- [https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics]()
- [https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics]()
- [https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics]()
- [https://gist.github.com/jkrems/b14894e0b8efde10aa10a28c652d3541]()