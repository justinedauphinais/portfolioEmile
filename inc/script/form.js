    //update this with your js_form selector
    var form_id_js = "contactModal";

    var data_js = {
        "access_token": "ds6uvnqgc5svzehwkq23kzp1"
    };

    function js_onSuccess() {
        console.log("yes");
    }

    function js_onError(error) {
        console.log(error);
    }

    var sendButton = document.getElementById("sendButton");

    function js_send() {
        sendButton.value='Sending…';
        sendButton.disabled=true;
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (request.readyState == 4 && request.status == 200) {
                js_onSuccess();
            } else
            if(request.readyState == 4) {
                js_onError(request.response);
            }
        };

        var subject = "Message";
        var nom = document.getElementById("nomInput").value + "\n";
        var message = nom + document.querySelector("#" + form_id_js + " [name='text']").value;
        var replyTo = document.querySelector("#" + form_id_js + " [name='reply_to']").value;
        data_js['subject'] = subject;
        data_js['text'] = message;
        data_js['reply_to'] = replyTo;
        var params = toParams(data_js);

        request.open("POST", "https://postmail.invotes.com/send", true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.send(params);

        return false;
    }

    sendButton.onclick = js_send;

    function toParams(data_js) {
        var form_data = [];
        for ( var key in data_js ) {
            form_data.push(encodeURIComponent(key) + "=" + encodeURIComponent(data_js[key]));
        }

        return form_data.join("&");
    }

    var js_form = document.getElementById(form_id_js);
    js_form.addEventListener("submit", function (e) {
        e.preventDefault();
    });