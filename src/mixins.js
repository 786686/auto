// Mixins

export default {
    mounted() {
      const vm = this;
      vm.$root.apiRoot = ``;
      // vm.axios.defaults.baseURL = 'http://47.112.217.67:20005/';      
      vm.axios.defaults.baseURL = '/';      
      vm.axios.defaults.headers.post['Content-Type'] = 'application/json';
    },
    methods: {
      //跳转页面
      handleRouter(name, obj) {
        // window.event.stopPropagation();
        this.$router.push({ name: name, query: obj });
      },
      // 阻止事件冒泡
      handleStopPropagation() {
        window.event.stopPropagation();
      },
      removeCookie(name, options) {
        this.addCookie(name, null, options);
      },
      // 阻止蒙层底部页面滑动
      stopBodyScroll(isFixed, bodyEl) {
        if (isFixed) {
          const top = window.scrollY;
  
          bodyEl.style.position = 'fixed';
          bodyEl.style.top = -top + 'px';
        } else {
          bodyEl.style.position = '';
          bodyEl.style.top = '';
  
          window.scrollTo(0, top) // 回到原先的top
        }
      },
      addCookie(name, value, options) {
        if (arguments.length > 1 && name != null) {
          if (options == null) {
            options = {};
          }
          if (value == null) {
            options.expires = -1;
          }
          if (typeof options.expires == "number") {
            var time = options.expires;
            var expires = options.expires = new Date();
            expires.setTime(expires.getTime() + time * 1000);
          }
          document.cookie = encodeURIComponent(String(name)) + "=" + encodeURIComponent(String(value)) + (options.expires ? "; expires=" + options.expires.toUTCString() : "") + (options.path ? "; path=" + options.path : "") + (options.domain ? "; domain=" + options.domain : ""), (options.secure ? "; secure" : "");
        }
      },
      getCookie(name) {
        if (name != null) {
          var value = new RegExp("(?:^|; )" + encodeURIComponent(String(name)) + "=([^;]*)").exec(document.cookie);
          return value ? decodeURIComponent(value[1]) : null;
        }
      }
    }
  };
  