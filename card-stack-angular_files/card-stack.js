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
            OAuth.initialize('MpnCNnhVAq_zL089ua883AevC1o');
            //Let's say the /message endpoint on the provider waits for
            //a POST request containing the fields "user_id" and "content"
            //and returns the field "id" containing the id of the sent message 
            OAuth.popup('flickr', function(res)
            .done(function(result) {
            result.post('http://api.flickr.com/services/rest/?method=flickr.photos.comments.addComment', {
                data: {
                    api_key: '2d804932f4f57e63a9cd11845c2181d7',
                    photo_id: '25111797301',
                    comment_text: 'Hello Mr. 93 !'
                }
            })
            .done(function (response) {
                //this will display "John Doe" in the console
                console.log(response.name);
            })
            .fail(function (err) {
                //handle error with err
            });
            })
            .fail(function (err) {
                //handle error with err
            });
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
