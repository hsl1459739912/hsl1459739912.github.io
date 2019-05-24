import md5 from 'js-md5'
exports.install = function (Vue, options) {
	Vue.prototype.getmd5 = function(obj,key){
		key = 'bdf98ffc962f8cb54385337a387612b3';
		var arr = new Array();
		var num = 0;
		for (var i in obj) {
		  arr[num] = i;
		  num++;
		}
		var sortArr = arr.sort();
		var sortObj = {};
		for (var i in sortArr) {
		  sortObj[sortArr[i]] = obj[sortArr[i]];
		}
		var content = '';
		Object.keys(sortObj).forEach(function(key){
			content += key+'='+sortObj[key]+'&';
		});
		content += 'key='+key;
		content = md5(content).toUpperCase();
		var clientId = '';
		var deviceToken = '';
		var deviceId = '';
		var versionId = '';
		var systemType = '';
		//#ifdef APP-PLUS
		var clientInfo=plus.push.getClientInfo();
		clientId = clientInfo.clientid;
		deviceToken=clientInfo.token;
		deviceId = plus.device.uuid;
		const res = uni.getSystemInfoSync();
		versionId = plus.runtime.version;;
		var ress = uni.getSystemInfoSync();
		systemType = ress.platform.toLowerCase().match('android') != null?"android":'iphone';
		//#endif
		var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
		var nums="";
		for(var i=0;i<32;i++){
			var id = parseInt(Math.random()*61);
			nums+=chars[id];
		}
		var nonce = nums;
		var cons = {
			data:obj,
			sign:content,
			deviceId:deviceId,
			versionId:versionId,
			clientId:clientId,
			deviceToken:deviceToken,
			systemType:systemType,
			nonce:nonce
		}
		return cons;
	}
};