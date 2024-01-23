document.addEventListener('DOMContentLoaded', function () {

  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  var Header = document.getElementById('Header');
  var BlackCoffee = document.getElementById('BlackCoffee');
  var CtaWebp = document.getElementById('CtaWebp');
  var OpenSign = document.getElementById('OpenSign');
  var ProcessImage1 = document.getElementById('ProcessImage1');
  var ProcessImage2 = document.getElementById('ProcessImage2');
  var ProcessImage3 = document.getElementById('ProcessImage3');
  var Landscape1 = document.getElementById('Landscape1');
  var Landscape2 = document.getElementById('Landscape2');
  var PotraitQuote = document.getElementById('PotraitQuote');


  if (screenWidth >= 1200) {
      Header.style.backgroundImage = 'url(./assets/coffee-circle.webp)';
      CtaWebp.style.backgroundImage = 'url(./assets/coffee-cta.webp)';
      ProcessImage1.style.backgroundImage = 'url(./assets/coffee-seed.webp)';
      ProcessImage2.style.backgroundImage = 'url(./assets/coffee-make.webp)';
      ProcessImage3.style.backgroundImage = 'url(./assets/coffee-done.webp)';
      Landscape1.src ='./assets/coffee-single.webp';
      Landscape2.src ='./assets/coffee-four.webp';
      PotraitQuote.src ='./assets/coffee-potrait.webp';
      BlackCoffee.src ='./assets/coffee-black.webp';
      OpenSign.src ='./assets/open-sign.webp';
  }else if (screenWidth >= 991) {
      Header.style.backgroundImage = 'url(./assets/coffee-circle-lg.webp)';
      CtaWebp.style.backgroundImage = 'url(./assets/coffee-cta-lg.webp)';
      ProcessImage1.style.backgroundImage = 'url(./assets/coffee-seed.webp)';
      ProcessImage2.style.backgroundImage = 'url(./assets/coffee-make.webp)';
      ProcessImage3.style.backgroundImage = 'url(./assets/coffee-done.webp)';
      Landscape1.src ='./assets/coffee-single.webp';
      Landscape2.src ='./assets/coffee-four.webp';
      PotraitQuote.src ='./assets/coffee-potrait.webp';
      BlackCoffee.src ='./assets/coffee-black.webp';
      OpenSign.src ='./assets/open-sign.webp';
  }else if (screenWidth >= 768) {
      Header.style.backgroundImage = 'url(./assets/coffee-circle-md.webp)';
      CtaWebp.style.backgroundImage = 'url(./assets/coffee-cta-md.webp)';
      ProcessImage1.style.backgroundImage = 'url(./assets/coffee-seed.webp)';
      ProcessImage2.style.backgroundImage = 'url(./assets/coffee-make.webp)';
      ProcessImage3.style.backgroundImage = 'url(./assets/coffee-done.webp)';
      Landscape1.src ='./assets/coffee-single.webp';
      Landscape2.src ='./assets/coffee-four.webp';
      PotraitQuote.src ='./assets/coffee-potrait.webp';
      BlackCoffee.src ='./assets/coffee-black-md.webp';
      OpenSign.src ='./assets/open-sign.webp';
  }else if (screenWidth >=  567) {
      Header.style.backgroundImage = 'url(./assets/coffee-circle-sm.webp)';
      CtaWebp.style.backgroundImage = 'url(./assets/coffee-cta-sm.webp)';
      ProcessImage1.style.backgroundImage = 'url(./assets/coffee-seed-sm.webp)';
      ProcessImage2.style.backgroundImage = 'url(./assets/coffee-make-sm.webp)';
      ProcessImage3.style.backgroundImage = 'url(./assets/coffee-done-sm.webp)';
      Landscape1.src ='./assets/coffee-single-sm.webp';
      Landscape2.src ='./assets/coffee-four-sm.webp';
      PotraitQuote.src ='./assets/coffee-potrait-sm.webp';
      BlackCoffee.src ='./assets/coffee-black-sm.webp';
      OpenSign.src ='./assets/open-sign-md.webp';
  }else{
      Header.style.backgroundImage = 'url(./assets/coffee-circle-xsm.webp)';
      CtaWebp.style.backgroundImage = 'url(./assets/coffee-cta-xsm.webp)';
      ProcessImage1.style.backgroundImage = 'url(./assets/coffee-seed-sm.webp)';
      ProcessImage2.style.backgroundImage = 'url(./assets/coffee-make-sm.webp)';
      ProcessImage3.style.backgroundImage = 'url(./assets/coffee-done-sm.webp)';
      Landscape1.src ='./assets/coffee-single-sm.webp';
      Landscape2.src ='./assets/coffee-four-sm.webp';
      PotraitQuote.src ='./assets/coffee-potrait-sm.webp';
      BlackCoffee.src ='./assets/coffee-black-sm.webp';
      OpenSign.src ='./assets/open-sign-sm.webp';
  }

  const observerLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-left-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenterSlow = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation-slow');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenter = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerCenterFast = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-center-animation-fast');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerFadeUp = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('fade-up-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideUpFast = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-up-animation-fast');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideUp = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-up-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideUpSlow = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-up-animation-slow');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideLeft = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-left-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideLeftSlow = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-left-animation-slow');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  const observerSlideRight = new IntersectionObserver(entries => {
    entries.forEach(entry => {

      const animate = entry.target.querySelectorAll('.animate');
      animate.forEach(animate => {

      if (entry.isIntersecting) {
        animate.classList.add('slide-right-animation');
        return; // if we added the class, exit the function
        }
      });
    });
  });

  observerCenterSlow.observe(document.querySelector('.sosmed-slow'));
  observerCenterSlow.observe(document.querySelector('.cta-text'));
  observerCenter.observe(document.querySelector('.header'));
  observerCenter.observe(document.querySelector('.cta-btn'));
  observerCenter.observe(document.querySelector('.sosmed-neutral'));
  observerCenterFast.observe(document.querySelector('.sosmed-fast'));
  observerCenterFast.observe(document.querySelector('.potrait-quote-img-container'));
  observerSlideUpSlow.observe(document.querySelector('.pi-3-animate'));
  observerSlideUpSlow.observe(document.querySelector('.footer'));
  observerSlideUp.observe(document.querySelector('.pi-2-animate'));
  observerSlideUpFast.observe(document.querySelector('.pi-1-animate'));
  observerSlideLeftSlow.observe(document.querySelector('.landscape-quote-img-container'));
  observerSlideLeftSlow.observe(document.querySelector('.about'));

})
