import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true
    }
  ]
})
export class DurationInputComponent implements ControlValueAccessor {
  @Input() min: number = 0;
  @Input() max: number = 10000;
  @Input() step: number = 1;
  @Input() placeholder: string = 'Продолжительность*';

  private _duration: number = 0;

  @Input()
  get duration(): number {
    return this._duration;
  }

  set duration(value: number) {
    if (value !== this._duration) {
      this._duration = value;
      this.durationChange.emit(this._duration);
      this.onChange(this._duration);
    }
  }

  @Output() durationChange = new EventEmitter<number>();

  disabled = false;
  onChange: (value: number) => void = () => {};
  onTouched: () => void = () => {};

  increment() {
    if (!this.disabled) {
      this.duration = Math.min(this.max, this.duration + this.step);
    }
  }

  decrement() {
    if (!this.disabled) {
      this.duration = Math.max(this.min, this.duration - this.step);
    }
  }

  onInputChange(event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    this.duration = Math.max(this.min, Math.min(this.max, value));
  }

  // ControlValueAccessor methods
  writeValue(value: number): void {
    this.duration = value;
  }

  registerOnChange(fn: (value: number) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
