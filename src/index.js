'use strict'

module.exports = {
  Router: require('./router'),
  utils: require('./utils'),
  services: {
    startMistGeth: require('./services/startMistGeth'),
    startFrontend: require('./services/startFrontend'),
    autoMine: require('./services/autoMine'),
    sharedFolder: require('./services/sharedFolder'),
    getWeb3Peers: require('./services/getWeb3Peers')
  }
}
