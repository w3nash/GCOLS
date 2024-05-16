import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-theories',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './theories.component.html',
  styleUrl: './theories.component.css',
})
export class TheoriesComponent {}
