(function() {
    'use strict';
    window.ajax = window.ajax || {};

    console.log('im here');

    window.ajax.buildList = function buildList(data) {
        $(data).each(function grabData(i) {
            $('ul').append('<li><img src="' + data[i].avatar_url + '"/><p>' + data[i].login + '</p></li>');
        })

        console.log('building list', data)


    };

}());
