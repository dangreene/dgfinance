define(['angular'], function (angular) {
    return angular.module('financeMain.ctrl',[])
        .controller('FinanceMainCtrl', [function(){
            var initializeController = function() {
                console.log("init");
            };

            initializeController();
        }]);
});
