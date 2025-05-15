import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm!: FormGroup;
  isSubmitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: [''],
      message: ['', Validators.required],
      newsletter: [true]
    });
  }

  onSubmit() {
    this.isSubmitted = true;
    
    if (this.contactForm.valid) {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', this.contactForm.value);
      
      // Reset form after submission
      this.contactForm.reset();
      this.isSubmitted = false;
      
      // Show success message (you would implement this)
      alert('Thank you for your message! We will get back to you soon.');
    }
  }

  // Helper method for easy access to form fields
  get f() { return this.contactForm.controls; }

}
