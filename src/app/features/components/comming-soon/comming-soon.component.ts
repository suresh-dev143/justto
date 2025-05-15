import { Component } from '@angular/core';

@Component({
  selector: 'app-comming-soon',
  imports: [],
  templateUrl: './comming-soon.component.html',
  styleUrl: './comming-soon.component.css'
})
export class CommingSoonComponent {
  private countdownInterval: any;
  launchDate: Date = new Date('2023-12-31T00:00:00'); // Set your launch date here

  ngOnInit(): void {
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  startCountdown(): void {
    this.countdownInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = this.launchDate.getTime() - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result
      document.getElementById('days')!.innerHTML = this.formatTime(days);
      document.getElementById('hours')!.innerHTML = this.formatTime(hours);
      document.getElementById('minutes')!.innerHTML = this.formatTime(minutes);
      document.getElementById('seconds')!.innerHTML = this.formatTime(seconds);

      // If the countdown is finished
      if (distance < 0) {
        clearInterval(this.countdownInterval);
        document.getElementById('days')!.innerHTML = '00';
        document.getElementById('hours')!.innerHTML = '00';
        document.getElementById('minutes')!.innerHTML = '00';
        document.getElementById('seconds')!.innerHTML = '00';
      }
    }, 1000);
  }

  formatTime(time: number): string {
    return time < 10 ? `0${time}` : `${time}`;
  }

  submitEmail(event: Event): void {
    event.preventDefault();
    // Here you would typically send the email to your backend
    const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
    if (emailInput && emailInput.value) {
      alert(`Thank you! We'll notify you at ${emailInput.value} when we launch.`);
      emailInput.value = '';
    }
  }
}
