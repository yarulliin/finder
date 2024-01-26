import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardComponent } from '../../shared/card/card.component';
import { InputComponent } from '../../shared/input/input.component';
import { slideAnimation } from '../../utils/consts/animations.consts';

@Component({
  selector: 'fa-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, CardComponent, InputComponent],
  host: { '[@slide]': 'true' },
  animations: [slideAnimation],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit {
  public authForm: FormGroup;

  constructor(
    private readonly fb: FormBuilder,
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.authForm = this.fb.group({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, [Validators.required, Validators.minLength(8)]),
    })
  }
}
