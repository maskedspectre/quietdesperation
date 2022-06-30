const targets = document.querySelectorAll('img');
const paragraphs = document.querySelectorAll('p');

let options = {
  threshold: 0.5,
};

const lazyLoadImg = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
        img.classList.add('fade');

        observer.disconnect();
      }
    });
  }, options);

  io.observe(target);
};

const lazyLoadTxt = target => {
  const io = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fadeUp');
        console.log(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, options);
  io.observe(target);
};

paragraphs.forEach(lazyLoadTxt);
targets.forEach(lazyLoadImg);
console.log(targets);
