'use strict';

function constants(ENV) {

	var constants = {};
	var quorumConstants = {
		"mepsEndpoint": "192.168.56.4:9001",
		"bankNodes": {
			//  	"MASREGULATOR": {
			//  		"host": "quorumnx01.southeastasia.cloudapp.azure.com",
			//  		"port": "3000",
			//  		"bankName": "Monetary Authority of Singapore Regulator",
			//  		"centralBank": false,
			//  		"regulator": true
			// },
			"MASGSGSG": {
				"host": "192.168.56.4",
				"port": "3000",
				"bankName": "Monetary Authority of Singapore Central Bank",
				"centralBank": true,
				"regulator": false
			},
			"BOFASG2X": {
				"host": "192.168.56.5",
				"port": "3000",
				"bankName": "Bank of America Merrill Lynch",
				"centralBank": false,
				"regulator": false
			},
			"CHASSGSG": {
				"host": "192.168.56.6",
				"port": "3000",
				"bankName": "J.P. Morgan Chase",
				"centralBank": false,
				"regulator": false
			},
			"CITISGSG": {
				"host": "192.168.56.7",
				"port": "3000",
				"bankName": "Citi",
				"centralBank": false,
				"regulator": false
			},
			"CSFBSGSX": {
				"host": "192.168.56.8",
				"port": "3000",
				"bankName": "Credit Suisse",
				"centralBank": false,
				"regulator": false
			},
			"DBSSSGSG": {
				"host": "192.168.56.9",
				"port": "3000",
				"bankName": "DBS Bank Ltd",
				"centralBank": false,
				"regulator": false
			},
			"HSBCSGSG": {
				"host": "192.168.56.10",
				"port": "3000",
				"bankName": "HSBC Limited",
				"centralBank": false,
				"regulator": false
			},
			"MTBCSGSG": {
				"host": "192.168.56.11",
				"port": "3000",
				"bankName": "Mitsubishi UFJ Financial Group, Inc.",
				"centralBank": false,
				"regulator": false
			},
			"OCBCSGSG": {
				"host": "192.168.56.12",
				"port": "3000",
				"bankName": "Oversea-Chinese Banking Corporation Ltd",
				"centralBank": false,
				"regulator": false
			},
			"SCBLSGSG": {
				"host": "192.168.56.13",
				"port": "3000",
				"bankName": "Standard Chartered Bank",
				"centralBank": false,
				"regulator": false
			},
			"UOBVSGSG": {
				"host": "192.168.56.14",
				"port": "3000",
				"bankName": "United Overseas Bank",
				"centralBank": false,
				"regulator": false
			},
			"XSIMSGSG": {
				"host": "192.168.56.15",
				"port": "3000",
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