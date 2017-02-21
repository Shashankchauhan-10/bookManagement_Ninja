

   var mainApp = angular.module("mainApp").controller('CRUDController', function ($scope, teriMeriService1) {

       $scope.BookModel = teriMeriService1.BookModel;
         $scope.total=teriMeriService1.total;
       $scope.BookList = teriMeriService1.BookList;
         $scope.editingData =teriMeriService1.editingData;
       $scope.AddData = function (Books) {
           var _Book1 = {
               Isbn: $scope.total+ 1,
               Name: Books.Name,
               Price: Books.Price,
               Edition:  Books.Edition,
               Author:  Books.Author,
               Availableunits:  Books.Availableunits,
           };
           $scope.editingData[$scope.total+1] = false;
           $scope.total++;
           $scope.BookList.push(_Book1);
           ClearModel();
           }

           $scope.DeleteData = function (Book) {
           var _index = $scope.BookList.indexOf(Book);
           $scope.BookList.splice(_index, 1);
           }




       $scope.modify = function(book){
       $scope.editingData[book.Isbn] = true;
       };

       $scope.update = function(tableData){
       $scope.editingData[tableData.Isbn] = false;
       };

       function ClearModel() {
           $scope.Model.Isbn = 0;
           $scope.Model.Name ='';
           $scope.Model.Price = 0;
           $scope.Model.Edition = '';
           $scope.Model.Author='';
             $scope.Model.Availableunits='';


       }
   });
   
