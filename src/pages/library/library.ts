import { Component, OnInit } from '@angular/core';
// import { NavController, NavParams } from 'ionic-angular';

import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';

@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})

export class LibraryPage implements OnInit {

	quoteCollection: { 
		category: string, 
		quotes: Quote[], 
		icon: string 
	}[]; // this mimics the Database and the '[]' initializes it as an array of these objects. 

	quotesPage = QuotesPage;

	ngOnInit(){
		this.quoteCollection = quotes;
	}

}
