


var mainApp = angular.module("mainApp", []);
mainApp.service('teriMeriService1', function () {

    this.BookModel = {
        isbn: 0,
        Price: 0,
        bookname: '',
        edition:'',
        authorid:'',
        available_units:'',
    };
    this.total=0;
    this.BookList = [];
    this.editingData = {};
});


