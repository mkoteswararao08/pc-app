import { Component, OnInit, Inject } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { SearchService } from '../../services/search/search.service';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

@Component({
  selector: 'searchresults',
  templateUrl: './searchresults.component.html',
  styleUrls: ['./searchresults.component.css'],
})
export class SearchResultsComponent implements OnInit {

    results:any[];
  constructor(private route: ActivatedRoute,
    private router: Router, private searchService: SearchService, @Inject(SESSION_STORAGE) private storage: StorageService) { }

  ngOnInit() {
   this.searchService.getSearchResults().subscribe((results) => {
    console.log(' SearchResultsComponent --> results--->', results);
    this.results = results.items;
   });
   this.results = this.storage.get('search-results');
  }
}
