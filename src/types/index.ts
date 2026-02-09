export interface ContactFormData {
  name: string;
  email: string;
  requestedDate: string;
  eventType: string;
  message?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export interface UseCase {
  title: string;
  description: string;
  image: string;
}