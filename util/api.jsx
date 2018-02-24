import $ from 'jquery';

class Mutil{
    request(param) {
        return new Promise((resolve, reject) => {
            $.ajax({
                type: param.type || 'get',
                url: param.url || '',
                dataType: param.dataType || 'json',
                data: dataType.data || null,
                success(res) {
                    // 发送请求成功
                    if(0 === res.status) {
                        typeof resolve === 'function' && resolve(res.data || res.msg)
                    }
                    // 强制登录
                    else if(10 === res.status) {
                        this.doLogin()
                    }
                    // 
                    else{
                        typeof reject === 'function' && reject(res.msg || res.data);
                    }
                },
                error(err) {
                    typeof reject === 'function' && reject(err.statusText);
                }
            })
        })
    }

    doLogin(){
        let loginUrl = '/login?redirect=' + encodeURIComponent(window.location.pathname);
        window.location = loginUrl;
    }
}

export default Mutil;