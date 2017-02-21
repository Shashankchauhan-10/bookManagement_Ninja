package controllers;

import entity.Book;
import ninja.Result;
import ninja.Results;

import com.google.inject.Singleton;

import javax.persistence.EntityManager;
import javax.servlet.http.HttpServletResponse;

import java.util.List;

import javax.persistence.*;

//...

import com.google.inject.Inject;

import com.google.inject.Provider;

import com.google.inject.Singleton;

import ninja.Router;
import ninja.jpa.UnitOfWork;
import ninja.params.PathParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.inject.persist.Transactional;

@Singleton
public class ApplicationController {

    @Inject
    Provider<EntityManager> entitiyManagerProvider;
    @Inject
    Router router;
    public Result index() {
        return Results.html();
    }
    public Result Book() {
        return Results.html();
    }


    @UnitOfWork
    public Result getallBook() {
        EntityManager entityManager = entitiyManagerProvider.get();
        List<Book> x = entityManager.createQuery("from Book").getResultList();
        return Results.json().render(x);
    }

    @Transactional    
   public Result addAllBook(Book book){
    	
    	 EntityManager entityManager = entitiyManagerProvider.get();
    	 List<Book> list = entityManager.createQuery(" SELECT from Book where Book.isbn = "+ book.getisbn()).getResultList();
    	 
    	 if(list.size()>0){
    		 return  Results.badRequest();
    	 }
    	 entityManager.persist(book);
         return Results.json().render(book);
         
    }
    
    @Transactional
    	public Result deleteBook(Book book) {
    	EntityManager entityManager = entitiyManagerProvider.get();
    	 Book bo=entityManager.find(Book.class,book.getisbn());
    	 entityManager.remove(bo);
    		return Results.json().render("success");
    	} 

      
    @Transactional
	public Result updateBook(Book book) {
		EntityManager entityManager = entitiyManagerProvider.get();
		Book bo=entityManager.find(Book.class,book.getisbn());
		bo.setbookname(book.getbookname());
		bo.setauthorid(book.getauthorid());
		bo.setprice(bo.getprice());
		bo.setavailable_units(book.getavailable_units());
		bo.setedition(book.getedition());
		//entityManager.remove(q.getSingleResult());
		return Results.json().render("success");
	} 

  
    
    
    
    

        
    public Result helloWorldJson() {
        
        SimplePojo simplePojo = new SimplePojo();
        simplePojo.content = "Hello World! Hello Json!";

        return Results.json().render(simplePojo);

    }
    
    public static class SimplePojo {

		public String content;
}
    
    
    
    
    
    }
