import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialogprod',
  templateUrl: './dialogprod.component.html',
  styleUrls: ['./dialogprod.component.css']
})
export class DialogprodComponent implements OnInit {

  constructor(public dialogRef : MatDialogRef<DialogprodComponent>,
    @Inject(MAT_DIALOG_DATA) public data : any) { }

  ngOnInit(): void {
  }

  closeYes(){
    this.dialogRef.close(true)
  }
}
