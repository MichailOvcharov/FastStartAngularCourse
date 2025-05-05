import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {DurationPipe} from "../../pipes/duration.pipe";

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DurationPipe]
})
export class DurationInputComponent {
  @Input() duration: number = 0;
  @Output() durationChange = new EventEmitter<number>();

  @Input() min: number = 0;
  @Input() max: number = 10000;
  @Input() step: number = 1;
  @Input() value: number = 0;

  @Output() valueChange = new EventEmitter<number>();

  disabled = false;
  onChange: any = () => {};
  onTouched: any = () => {};

  increment() {
    if (!this.disabled) {
      this.duration = Math.min(this.max, this.duration + this.step);
      this.emitChanges();
    }
  }

  decrement() {
    if (!this.disabled) {
      this.duration = Math.max(this.min, this.duration - this.step);
      this.emitChanges();
    }
  }

  onInputChange(event: Event) {
    const value = +(event.target as HTMLInputElement).value;
    this.duration = Math.max(this.min, Math.min(this.max, value));
    this.emitChanges();
  }

  private emitChanges() {
    this.onChange(this.duration);
    this.onTouched();
    this.valueChange.emit(this.duration);
  }

  writeValue(duration: number): void {
    this.duration = duration;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }
}
