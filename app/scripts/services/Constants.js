'use strict';

function constants(ENV) {

	var constants = {};
	var quorumConstants = {
		"mepsEndpoint": "node9.puyuma.org:10091",
		"bankNodes": {
			//  	"MASREGULATOR": {
			//  		"host": "quorumnx01.southeastasia.cloudapp.azure.com",
			//  		"port": "3000",
			//  		"bankName": "Monetary Authority of Singapore Regulator",
			//  		"centralBank": false,
			//  		"regulator": true
			// },
			"MASGSGSG": {
				"host": "node9.puyuma.org",
				"port": "10002",
				"bankName": "Monetary Authority of Singapore Central Bank",
				"centralBank": true,
				"regulator": false
			},
			"BOFASG2X": {
				"host": "node9.puyuma.org",
				"port": "10003",
				"bankName": "Bank of America Merrill Lynch",
				"centralBank": false,
				"regulator": false
			},
			"CHASSGSG": {
				"host": "node9.puyuma.org",
				"port": "10004",
				"bankName": "J.P. Morgan Chase",
				"centralBank": false,
				"regulator": false
			},
			"CITISGSG": {
				"host": "node9.puyuma.org",
				"port": "10005",
				"bankName": "Citi",
				"centralBank": false,
				"regulator": false
			},
			"CSFBSGSX": {
				"host": "node9.puyuma.org",
				"port": "10006",
				"bankName": "Credit Suisse",
				"centralBank": false,
				"regulator": false
			},
			"DBSSSGSG": {
				"host": "node9.puyuma.org",
				"port": "10007",
				"bankName": "DBS Bank Ltd",
				"centralBank": false,
				"regulator": false
			},
			"HSBCSGSG": {
				"host": "node9.puyuma.org",
				"port": "10008",
				"bankName": "HSBC Limited",
				"centralBank": false,
				"regulator": false
			},
			"MTBCSGSG": {
				"host": "node9.puyuma.org",
				"port": "10009",
				"bankName": "Mitsubishi UFJ Financial Group, Inc.",
				"centralBank": false,
				"regulator": false
			},
			"OCBCSGSG": {
				"host": "node9.puyuma.org",
				"port": "10010",
				"bankName": "Oversea-Chinese Banking Corporation Ltd",
				"centralBank": false,
				"regulator": false
			},
			"SCBLSGSG": {
				"host": "node9.puyuma.org",
				"port": "10012",
				"bankName": "Standard Chartered Bank",
				"centralBank": false,
				"regulator": false
			},
			"UOBVSGSG": {
				"host": "node9.puyuma.org",
				"port": "10014",
				"bankName": "United Overseas Bank",
				"centralBank": false,
				"regulator": false
			},
			"XSIMSGSG": {
				"host": "node9.puyuma.org",
				"port": "10015",
				"bankName": "Singapore Exchange",
				"centralBank": false,
				"regulator": false
			}
		},
		historyStatus: {
			0: "Pending",
			1: "Confirmed",
			2: "Hold",
			3: "Cancelled"
		}
	};

	switch (ENV.platform) {
		case 'quorum':
			constants.quorum = quorumConstants;
			break;
		default:
			break;
	}

	constants.priorities = {
		0: "Normal",
		1: "High"
	};

	constants.nettingStatus = [
		"SETTLED",
		"FAILED",
		"deadlock",
		"complete",
		"Deadlock",
		"Complete"
	];

	constants.status = {
		pending: "Pending",
		confirmed: "Confirmed",
		onhold: "On Hold",
		canceled: "Canceled",
		unknown: "Unknown"
	};

	constants.defaultBankLoc = "CSFBSGSX";
	constants.regulator = "MASGSGSG";
	constants.currencySymbol = "S$";
	constants.error = "error";
	constants.platform = {
		quorum: "Quorum"
	};

	return constants;
}