define([
], function(){
    return alt.component({
        name: 'prototyperUiTab',
        require: '^prototyperUiTabset',
        templateUrl: 'component/prototyper/ui/tabset/tab/view.html',
        scope: {
            tab: '=?prototyperUiTabset',
            title: '@?'
        },
        link: ['$scope', '$log', '$controller', function($scope, $log, $controller){
            $scope.tab = angular.extend({
                id: $scope.$id,
                title: $scope.title || '',
                detail: {},
                show: true,
                selected: false
            }, $scope.tab);

            $controller.add($scope.tab);
        }]
    });
});