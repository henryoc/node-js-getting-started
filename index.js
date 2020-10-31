var http = require('http'),
    url = require('url');
var request = require('request');

http.createServer(function (req, res) {
    var query = url.parse(req.url, true).query;
    if (query.email) {

        var headers = {
            'Host': 'login.microsoftonline.com',
            'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:62.0) Gecko/20100101 Firefox/62.0',
            'Accept': 'application/json',
            'Accept-Language': 'fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3',
            'Referer': 'https://login.microsoftonline.com/81122329-96bb-41cc-9053-65e30c689cd5/saml2?SAMLRequest=lZJBa%2BMwEIX%2Fim86KbKU2LFFHMg2LATaUtLdLexlUeTJViBLXs24bv997ZRlu5dCr8Ob7z3ezAZN53u9G%2BgxHOHPAEjZDhESuRiuYsChg3QP6clZ%2BH68btgjUY9aiHEcFwSmI%2BN8TAsbO2EmiECMYv1yHO3tw%2FnLcxTGIsv2E9YFMzP%2FEXz87cKiczZFjGeKwbsAF1AlpVJLVfO6PJ34SlrL67xY8rKAZW7LqrZtIebgimWHfcN%2BleYsc5nXvDUt8JWqTtzAquAyXxd1WZ%2BqdWknKeIAh4BkAjVM5bLi%2BZrL6puSelVpVf9k2Q9IeEmpFjnLnjsfUM9ODRtS0NGgQx1MB6jJ6vvdzbWehNr8bez9Sv%2FxTp8iRRs9225mtb6kS9vP9tsBmdaQ2Yj3lM3bWW8n18P%2BLnpnX7Kd93G8SmAIGkZpAJZ9jakz9HHOeeJafr5IdT%2F3gwSBmNi%2Bef7%2FPdtX',
            'hpgid': '1104',
            'hpgact': '1900',
            'canary': 'AQABAAAAAAC5una0EUFgTIF8ElaxtWjTDOngIJdGzmzyrNKHfOxfTDldmjJKIFGVXj3bCVVCGBFAEsVGiZOrFPU8mHEiV5s1HwE-io91ZKAJZ9mwMUhthlRf4PUYT9Z2O9D0uGZ0c6M2k6zNYYWYGnBnv7tjpVG2ARbVu-4kuMUY1NW_z5dnmLT3rrySo3lpO7guZ3QTUO4O0mPPJ9sqY5aFr4jCtJ5yqloKExv_V_UpxmQqnmrzWCAA',
            'client-request-id': 'd905583e-d949-45ed-a95e-aaded6e306ea',
            'hpgrequestid': 'bfb2aefc-fe44-4283-a3ee-c62b9fea0300',
            'Content-type': 'application/json; charset=utf-8',
            'Cookie': 'buid=AQABAAEAAAC5una0EUFgTIF8ElaxtWjTPNZSAPtH0u5Xld51DjAPm4KcHyR8mme6fokqsQU-8cYiF-m_MdxLa0XlMhfpEmI1-AIWZTW1-fMRT2RNsCnR1iSr7-kzKl1HTxRkdwV_UzkgAA; ExternalIdpStateHash=wNidvKctbEGa4RQZX0XCMWkly6UbZ6-1Z1l07I9pVKk; esctx=AQABAAAAAAC5una0EUFgTIF8ElaxtWjTLLiXEyGG3tibZf4lu8u_B7vq4p4y2KsN0u5oag8mV-OmGGbl_S_As8gK9-7ufq6Bxt3D8cpQW7CESHt6JlWMqAmur2oyB788XvLdwjqSO0TXsU6gjiyaJc4L-ImIqq99HAtzN8e-rg8pRts3hmOiRrTyAxnoq388desqsW1KWY4gAA; x-ms-gateway-slice=003; stsservicecookie=ests',
            'Connection': 'close'
        }

        var js = {
            "username": query.email,
            "isOtherIdpSupported": true,
            "checkPhones": false,
            "isRemoteNGCSupported": false,
            "isCookieBannerShown": false,
            "isFidoSupported": false,
            "originalRequest": "rQIIAeNisLLIKCkpKLbS1y8vL9crSU3MLUnMzMkv0kvOz9VPLC3J0C8uztc3rwwqT_YLT3OqyNfPTS1JTEksSSwS4hKwi2C96XnzrevKuFX3rj1me7WK0ZhU4xKTiw8xqsabJaYZGhgaWOqmJKak6poYWSTpJqaamOoaGpibWppZJlmYmyVfYGR8wch4i4k1ODE3x-gXk0lpUZ5VfmJxZrFVXmJuarFVSbJVsKOvj5WRngFYJDNFNy2_KDexxKogtQiorCQ1r2QTs4qFoaGRkbGRpa6lWVKSrolhcrKupYGpsa6ZaaqxQbKZhWVyiukFFp5XLEwGfD9YGBexAn36Z92m_S7_mp0WvzumPf8VM8MpVn2PfKNSJ08nL-egQBdDwxxzE-ewkCg_k6psJ4sqff9A43ADC6-KYBfzcudyWyMrwwlsvKfYGD6wMXawM-ziJCecAA2",
            "country": "TN",
            "flowToken": "AQABAAEAAAC5una0EUFgTIF8ElaxtWjTWHfOI5dH3wwU0OCQaE9K7ACCsjI7DaIRFeN7Dg0HkhhRhskHMDCIkebjhNO7o_CZdUG3w7G8uUxyKbNCnY92FsgWXRtveOcEGdfwLlm9CdsBqePUs3D2H_8RO6c142svHlejtqjSiXJvzFsVXUKFSUmvrE17Bw56GKsWBiy7_mvufnEDk0PYjed2dVwPysqiLL1SJUekvYT3wFDRZBL_mv1AzAQMT_uCgK5V1m3Cb12OyWZsNkK8a5yfQsQI-R8HaOUDAEefQY0ajN2vBjoVBnQbokHzJyijXGDMBkd3Em6Wd7Vl09rboZhYCsNzJRZhnyEx86x3NCqvB6N7fatBaTX6Z60kpvX06HRDa7IEcWlXLLW2xkZjO6d96h6PnszU2-cRQoYJoE0TnYAcH2ttAyAA"
        }


        var options = {
            method: 'POST',
            url: 'https://login.microsoftonline.com/common/GetCredentialType?mkt=fr',
            headers: headers,
            json: js
        };
        request(options, function (err, response, body) {
            if (body) {
                if (body.IfExistsResult == 1) {
                    res.end('notExist')
                } else if (body.IfExistsResult == 5) {
                    res.end('exist');
                } else {
                    res.end('somethingElse')
                }
            }
        })
    } else {
        res.end('noEmail');
    }

    
}).listen(process.env.PORT || 8080);
console.log("Server running at https://collec-bot.herokuapp.com?email=xxxxxxxx@hotmail.com");
