import { Component, OnInit } from '@angular/core';
import { BillionaireService, Billionaire } from '../../billionaire-service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './list.html'
})
export class List implements OnInit {
  billionaires: Billionaire[] = [];

  constructor(private billionaireService: BillionaireService) {}

  ngOnInit() {
    this.billionaires = this.billionaireService.billionaires;
  }
}
