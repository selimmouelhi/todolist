angular.module('todoApp', [])
    .controller('TodoListController', function($scope) {

        $scope.todos = [{
            title: 'Take Coffee',
            done: true
        }, {
            title: 'Reach Platinium',
            done: false
        }];




        $scope.addTodo = function() {
            $scope.todos.push({
                title: $scope.todoText,
                done: false
            })

            $scope.todoText = '';
        }

        $scope.remove = function(index) {
            if (index > -1) {
                $scope.todos.splice(index, 1);
            }  
        }

    })
