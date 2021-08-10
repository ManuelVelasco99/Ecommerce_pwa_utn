import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogcat',
  templateUrl: './dialogcat.component.html',
  styleUrls: ['./dialogcat.component.css']
})
export class DialogcatComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<DialogcatComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
  }

  closeYes(){
    this.dialogRef.close(true)
  }
}
