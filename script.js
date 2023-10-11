const appear = document.querySelector('.appear');
const cb = function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('inview');
    } else {
      entry.target.classList.remove('inview');
    }
  });
};
const io = new IntersectionObserver(cb);
io.observe(appear);

//appear1
const appear1 = document.querySelector('.appear1');
const cb1 = function (entries1) {
  entries1.forEach(entry1 => {
    if (entry1.isIntersecting) {
      entry1.target.classList.add('inview1');
    } else {
      entry1.target.classList.remove('inview1');
    }
  });
};
const io1 = new IntersectionObserver(cb1);
io1.observe(appear1);

//appear2
const appear2 = document.querySelector('.appear2');
const cb2 = function (entries2) {
  entries2.forEach(entry2 => {
    if (entry2.isIntersecting) {
      entry2.target.classList.add('inview2');
    } else {
      entry2.target.classList.remove('inview2');
    }
  });
};
const io2 = new IntersectionObserver(cb2);
io2.observe(appear2);

//appear3
const appear3 = document.querySelector('.appear3');
const cb3 = function (entries3) {
  entries3.forEach(entry3 => {
    if (entry3.isIntersecting) {
      entry3.target.classList.add('inview3');
    } else {
      entry3.target.classList.remove('inview3');
    }
  });
};
const io3 = new IntersectionObserver(cb3);
io3.observe(appear3);

//appear4
const appear4 = document.querySelector('.appear4');
const cb4 = function (entries4) {
  entries4.forEach(entry4 => {
    if (entry4.isIntersecting) {
      entry4.target.classList.add('inview4');
    } else {
      entry4.target.classList.remove('inview4');
    }
  });
};
const io4 = new IntersectionObserver(cb4);
io4.observe(appear4);

//appear5
const appear5 = document.querySelector('.appear5');
const cb5 = function (entries5) {
  entries5.forEach(entry5 => {
    if (entry5.isIntersecting) {
      entry5.target.classList.add('inview5');
    } else {
      entry5.target.classList.remove('inview5');
    }
  });
};
const io5 = new IntersectionObserver(cb5);
io5.observe(appear5);

//appear6
const appear6 = document.querySelector('.appear6');
const cb6 = function (entries6) {
  entries6.forEach(entry6 => {
    if (entry6.isIntersecting) {
      entry6.target.classList.add('inview6');
    } else {
      entry6.target.classList.remove('inview6');
    }
  });
};
const io6 = new IntersectionObserver(cb6);
io6.observe(appear6);

//appear7
const appear7 = document.querySelector('.appear7');
const cb7 = function (entries7) {
  entries7.forEach(entry7 => {
    if (entry7.isIntersecting) {
      entry7.target.classList.add('inview7');
    } else {
      entry7.target.classList.remove('inview7');
    }
  });
};
const io7 = new IntersectionObserver(cb7);
io7.observe(appear7);

//appear8
const appear8 = document.querySelector('.appear8');
const cb8 = function (entries8) {
  entries8.forEach(entry8 => {
    if (entry8.isIntersecting) {
      entry8.target.classList.add('inview8');
    } else {
      entry8.target.classList.remove('inview8');
    }
  });
};
const io8 = new IntersectionObserver(cb8);
io8.observe(appear8);

// JavaScript function to navigate to the portfolio page
function navigateToPortfolio(url, serviceName) {
    window.location.href = url;
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("survey-form");
  const submitButton = document.getElementById("submit");

  submitButton.addEventListener("click", function () {
    const formData = new FormData(form);
    const jsonData = {};

    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    fetch("https://script.google.com/macros/s/AKfycbzFDEoJN0OoAQ47BBW5cmJLZsa0MC-8RfrqHVXM0Zbs_0t0nm7pDxd8tHkeyxTQ2CYl/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response data here
        console.log(data);
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch
        console.error(error);
      });
  });
});
