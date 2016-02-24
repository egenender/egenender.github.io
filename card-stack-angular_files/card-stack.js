angular
    .module('card-stack-demo', ['gajus.swing'])
    .controller('card-stack-playground', function ($scope) {
        $scope.cards = [
            {name: 'clubs', symbol: '♣'},
            {name: 'diamonds', symbol: '♦'},
            {name: 'hearts', symbol: '♥'},
            {name: 'spades', symbol: '♠'}
        ];

        $scope.throwout = function (eventName, eventObject) {
            console.log('throwout', eventObject);
        };

        $scope.throwoutleft = function (eventName, eventObject) {
            console.log('throwoutleft', eventObject);
        };

        $scope.throwoutright = function (eventName, eventObject) {
            console.log('throwoutright', eventObject);
        };
        
        $scope.throwoutup = function (eventName, eventObject) {
            console.log('throwoutup', eventObject);
        };

        $scope.throwoutdown = function (eventName, eventObject) {
            console.log('throwoutdown', eventObject);
            OAuth.initialize('6dcef04229086c5c46331c26cbd205a4');
            //Let's say the /message endpoint on the provider waits for
            //a POST request containing the fields "user_id" and "content"
            //and returns the field "id" containing the id of the sent message 
            OAuth.popup('flickr', function(err, res) {
                res.get({
                    url: 'http://api.flickr.com/services/rest/?method=flickr.photos.search',
                    data: {
                        text: "flower",
                        format: "json",
                        nojsoncallback: 1
                    }
                }).done(function(data) {
                    console.log(data)
                    $('#connect').slideUp('fast')
                    $('#res').html(template({
                        data: data
                    })).slideDown('fast')
                })
            })  
        };

        $scope.throwin = function (eventName, eventObject) {
            console.log('throwin', eventObject);
        };

        $scope.dragstart = function (eventName, eventObject) {
            console.log('dragstart', eventObject);
        };

        $scope.dragend = function (eventName, eventObject) {
            console.log('dragend', eventObject);
        };
    });
