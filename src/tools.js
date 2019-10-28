const baseUrl = "47.112.217.67:20005";
let tools = {
    requestByLogin(request, callback, errCallback, requestTimes, loginBool) {
      let that = this;
      requestTimes = requestTimes || 1;
      loginBool = loginBool && true;
    //   let token = wx.getStorageSync('token') || '';
      if (!request.url.includes('sid')) {
        let flag = request.url.includes('?') ? '&' : '?';
        request.url = request.url
        if (loginBool) {
        //   request.url += `${flag}sessionId=` + token;
        }
        // + `${flag}sessionId=` + token;
      } else {
        var lac = request.url.indexOf("sid");
        request.url = request.url.substr(0, lac + 4);
        // request.url = request.url + token;
      }
      if (!request.url.includes('http')) {
        request.url = `${settings.domain}${request.url}`;
      }
  
  
      request.method = (request.method || 'get').toUpperCase();
  
      if (request.isFormData) {
        request.header = request.header || {};
        request.header['content-type'] = 'application/x-www-form-urlencoded';
      }
  
      axios.post('/user', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      axios({
        url: request.url,
        data: request.data,
        header: request.header,
        method: "post",//request.method,
        dataType: request.dataType,
        success: function(res) {
          if (res.data.status == 2000000) {
            let data = null;
            request.isRes && (data = res.data);
            !request.isRes && (data = res.data.data);
            callback && callback(data);
          } else if (res.data.status == -2) {
            let data = null;
            request.isRes && (data = res.data);
            !request.isRes && (data = res.data.data);
            callback && callback(data);
          } else if (res.data.status == -3) {
            if (requestTimes % 5 !== 0) {
              that.login().then(() => {
                setTimeout(function() {
                  that.requestByLogin(request, callback, errCallback, requestTimes);
                }, 1000 * requestTimes++);
              });
            }
          } else {
            if (errCallback) {
              errCallback(res)
            }
          }
        }
      });
    }
};
export default {
    baseUrl,
    tools
}