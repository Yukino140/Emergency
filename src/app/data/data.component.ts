import { Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog/dialog.component';
import { HomeComponent } from '../home/home.component';
import { LocationComponent } from '../location/location.component';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor(private matDialog:MatDialog) { }

  ngOnInit(): void {
  }
 
  openTempDialog(){
    this.matDialog.open(
    /*  DialogComponent,{
      data: {
        Name:"Jhon Doe",
        Type:"Police",
        Time:"12:00"
      }
      
    }*/LocationComponent );
  }
  }



