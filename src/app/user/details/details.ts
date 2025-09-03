import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillionaireService, Billionaire } from '../../billionaire-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.html'
})
export class Details implements OnInit {
  billionaire!: Billionaire;

  constructor(
    private route: ActivatedRoute,
    private billionaireService: BillionaireService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.billionaire = this.billionaireService.getById(id);
  }
}
