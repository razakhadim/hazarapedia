# Hazarapedia

Hazarapedia V3 Gatsby.js + Stoyblok

## Build Setup

``` bash
# clone
$ git clone https://github.com/razakhadim/hazarapedia.git

# install Gatsby CLI
$ npm install -g gatsby-cli

# install dependencies
$ npm install

# serve with hot reload at localhost:8000
$ gatsby develop

# storyblok HTTPS local setup
# dev preview URL is https://localhost:3010

$ brew install mkcert  #use choco for windows
$ mkcert -install
$ mkcert localhost

# Then install and run the proxy
$ npm install -g local-ssl-proxy
$ local-ssl-proxy --source 3010 --target 8000 --cert localhost.pem --key localhost-key.pem
```
