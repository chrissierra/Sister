import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pasotres',
  templateUrl: './pasotres.component.html'
})
export class PasotresComponent implements OnInit {
	public url:any;
  constructor(private param: ActivatedRoute) { 
  	  	this.url = "https://sister.cl/recepcionimagen1v1.php?rut=" + this.param.snapshot.paramMap.get('rut');
  	  	
  }

  ngOnInit() {
  }

  onUploadFinished(file) {
  console.log(file);
}

onRemoved(file) {
  console.log(file);
}

onUploadStateChanged(state: boolean) {
  console.log(state);
}

canDeactivate() {
    return false;
  }

}
