import { gsap } from 'gsap';

export const coreService = {
  setItem: (key: any, value: any) => {
    sessionStorage.setItem(key, value);
  },
  getItem: (key: any) => {
    return sessionStorage.getItem(key);
  },
  setObjectItem: (key: any, value: any) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  getObjectItem: (key: any) => {
    const val: any = sessionStorage.getItem(key)
    return JSON.parse(val);
  },
  removeItem: (key: any) => {
    sessionStorage.removeItem(key);
  },
  setBounceAnimation: (selector: any) => {
    const coin = document.querySelector(selector);
  
    const bounce = gsap.to(coin, {
      y: -30, // Bounce up by 30 pixels
      ease: 'power2.inOut',
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Bounce back and forth
      duration: 1, // Duration of each bounce
    });

    return bounce
  },
  setRotateAnimation: (selector: any) => {
    const rotate = gsap.to(selector, {
      rotation: 360,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    });

    return rotate
  },
  setFadeAnimation: (selector: any, callback: any) => {
    const fade = gsap.timeline();

    // Set the initial state of the text (e.g., fully transparent)
    fade.set(selector, { opacity: 0 });
      
    // Animate the text to fade in over a specified duration
    fade.to(selector, {
      opacity: 1,
      duration: 1, // Adjust the duration as needed
      onComplete: callback,
    });

    return fade
  }
};
