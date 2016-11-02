(function() {
    'use strict';
    window.ajax = window.ajax || {};
    console.log('im here');

    var myToken;

    $('.tokenButton').on('click', function submitToken(event) {
        myToken = $('input').val();
        $.ajax({
                url: 'https://api.github.com/users/jisaacks/orgs',
                method: 'GET',
                dataType: 'json',
                headers: {
                    Authorization: 'token ' + myToken
                }

            })
            .done(function ajaxSucceed(data) {
                console.log(data);
                window.ajax.buildList(data)

            })
            .fail(function ajaxFailed(xhr) {
                console.log(xhr);
            })
    })

}());
