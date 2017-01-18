angular.module('data-factories', [])

    .factory('bookFactory', function () {
        return {
            books: [
                {
                    "id": 1,
                    "name": "The Crime and the Punishment",
                    "author": "Fyodor Dostoyevsky"
                },
                {
                    "id": 2,
                    "name": "Slaughterhouse 5",
                    "author": "Kurt Vonnegut"
                },
                {
                    "id": 3,
                    "name": "The Post Office",
                    "author": "Charles Bukowski"
                }
            ]
        }
    });
