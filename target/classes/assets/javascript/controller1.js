

   var mainApp = angular.module("mainApp").controller('CRUDController', function ($scope,$http, teriMeriService1) {

       $scope.BookModel = teriMeriService1.BookModel;
       $scope.total=teriMeriService1.total;
       $scope.BookList = teriMeriService1.BookList;
       $scope.editingData =teriMeriService1.editingData;
      // alert("shashank");
       $http.get("/book").success( function(response) {
         $scope.books = response;
         var x= $scope.books;
         
         for (var i = 0; i < x.length; i++) {
         var Book = {
         isbn: $scope.books[i].isbn,
         bookname: $scope.books[i].bookname,  
         authorid: $scope.books[i].authorid,
         edition: $scope.books[i].edition,
         price:  $scope.books[i].price,
         available_units: $scope .books[i].available_units,
        }
         $scope.total= x.length;
        $scope.BookList.push(Book);
         
   }
       });
         
       $scope.AddData = function (Books) {
           var _Book1 = {
               isbn: Books.Isbn,
               bookname: Books.Name,
               authorid:  Books.Author,
               edition:  Books.Edition,
               price: Books.Price,
               available_units:  Books.Availableunits,
           };
         
           $scope.editingData[Books.isbn] = false;
           $scope.total++;
           $scope.BookList.push(_Book1);
            //alert(JSON.stringify(_Book1));
           $.ajax({
               type : "POST",
               url : "/addbook",
               data : JSON.stringify(_Book1),
               contentType : "application/json; charset=utf-8",
               dataType : "json",
               success : function(msg) {
                   $scope.BookList.push(_Book1);
               },
               error : function(errormessage) {
                   console.log(errormessage.statusText);
                  }
           });
           ClearModel();
           }

         $scope.DeleteData = function (Book) {
         
         var _index = $scope.BookList.indexOf(Book);
         $scope.BookList.splice(_index, 1);
          $http({ method: "POST", 
        	  url: "/bookDelete", 
        	  data: Book
        	   }).success(function(data){
                  
        	   });
        	  
          }
        		  
       $scope.modify = function(book){
       $scope.editingData[book.isbn] = true; 
       };

       $scope.update = function(tableData){
    	   alert("shashank");
    	   $scope.editingData[tableData.isbn] = false;
    	    
    	$http({ method: "POST", 
         	  url: "/bookUpdate", 
         	  data: tableData
         	   }).success(function(data){
                   
         	});
    		
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
   
   

