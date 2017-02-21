package entity;

import javax.persistence.*;
import java.util.Scanner;

@Entity
@Table(name = "book", catalog = "bookmanagementdb")
public class Book implements java.io.Serializable {

	public static Scanner scan = new Scanner(System.in);
	private static final long serialVersionUID = 1L;

	@Id
	@Column(name = "isbn")
	private long isbn;
	@Column(name = "bkname")
	private String bookname;
	@Column(name = "authorid")
	private Integer authorid;
	@Column(name = "edition")
	private String edition;
	@Column(name = "price")
	private Integer price;
	@Column(name = "available_units")
	private Integer available_units;

	public Book(){}
	public Book(long Isbn,String Bookname, Integer authorid,String Edition,Integer price,Integer available_units) {
		this.isbn=Isbn;
		this.bookname = Bookname;
		this.authorid = authorid;
		this.edition=Edition;
		this.price=price;
		this.available_units=available_units;
	}

	public long getisbn() {
		return this.isbn;
	}
	public void setisbn(long isbn) {
		this.isbn = isbn;
	}

	public String getbookname() {
		return this.bookname;
	}
	public void setbookname(String Bookname) {
		this.bookname = Bookname;
	}

	public Integer getauthorid() {
		return this.authorid;
	}
	public void setauthorid(Integer authorid) {
		this.authorid = authorid;
	}

	public String getedition() {
		return edition;
	}
	public void setedition(String Edition) {
		this.edition = Edition;
	}

	public Integer getprice() {
		return price;
	}
	public void setprice(Integer price) {
		this.price = price;
	}

	public Integer getavailable_units() {
		return this.available_units;
	}
	public void setavailable_units(Integer available_units) {
		this.available_units = available_units;
	}
}

