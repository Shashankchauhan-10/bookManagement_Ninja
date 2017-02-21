


var mainApp = angular.module("mainApp", []);
mainApp.service('teriMeriService1', function () {

    this.BookModel = {
        Isbn: 0,
        Price: 0,
        Name: '',
        Edition:'',
        Author:'',
        Availableunits:'',
    };
    this.total=0;
    this.BookList = [];
    this.editingData = {};
});


