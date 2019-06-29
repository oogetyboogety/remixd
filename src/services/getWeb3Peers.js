var net = require('net')

var Web3 = require('web3')

var Admin = require('web3-eth-admin')

module.exports = {
	websocket: null, 

	setWebSocket: function (websocket) {
		this.websocket = websocket
	},

	getPeers: function (args, cb) {
	  try {
	    var node1Provider = args.node1ProviderIPCPath + '/geth.ipc'
	    const admin = new Admin.Admin(node1Provider, net)

	    console.error("tesseraAPI connected ")


			console.error(admin.getPeers())
			admin.getPeers().then(console.error)
			admin.getPeers().then(cb)
	  } catch (e) {
	    cb(e.message)
	  }
	}
} 

// txManager1Provider = new Web3.providers.IpcProvider("../../quorum-examples/qdata/tm/tm.ipc", net) 

// node1Provider = new Web3.providers.IpcProvider("../../quorum-examples/qdata/dd/geth.ipc", net) 

// tesseraAPI = new Web3(txManager1Provider)


 