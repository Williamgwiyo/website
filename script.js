
//for the top navigation bar
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
  
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
    });
  });




  //for services 
  document.addEventListener("DOMContentLoaded", function () {
    const serviceCards = document.querySelectorAll(".service-card");
    const modal = document.getElementById("modal");
    const modalContent = document.getElementById("modal-content");
    const closeModalBtn = document.getElementById("close-modal");
  
    // Function to show modal and display service details
    function showServiceDetails(serviceName, description) {
      modalContent.innerHTML = `
        <h2>${serviceName}</h2>
        <p>${description}</p>
      `;
      modal.style.display = "block";
    }
  
    // Event listeners for service cards
    serviceCards.forEach(card => {
      card.addEventListener("click", function () {
        const serviceName = card.querySelector("h3").textContent;
        const description = card.querySelector("p").textContent;
        showServiceDetails(serviceName, description);
      });
    });
  
    // Event listener to close modal
    closeModalBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    // Close modal if user clicks outside the modal content
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });


  

  //for the footer
  
  // Get the current year
  const currentYear = new Date().getFullYear();

  // Update the footer content with the current year
  document.getElementById('footerContent').innerHTML += `<p>Last updated: ${currentYear}</p>`;


  //for what the customer says
  const testimonials = document.querySelectorAll('.testimonial');
        let currentTestimonial = 0;

        function displayTestimonial() {
            testimonials.forEach(testimonial => {
                testimonial.style.display = 'none';
            });

            currentTestimonial++;
            if (currentTestimonial > testimonials.length) {
                currentTestimonial = 1;
            }

            testimonials[currentTestimonial - 1].style.display = 'block';
            setTimeout(displayTestimonial, 3000); // Change testimonial every 3 seconds
        }

        displayTestimonial(); 


        const testimonialContainer = document.querySelector('.testimonial-container');
        let scrollAmount = 0;
        const scrollIncrement = 1; // Change this value for faster or slower scrolling

        function autoScrollTestimonials() {
            scrollAmount += scrollIncrement;
            if (scrollAmount >= testimonialContainer.scrollWidth - testimonialContainer.clientWidth) {
                scrollAmount = 0; // Reset back to the beginning when reaching the end
            }
            testimonialContainer.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }

        setInterval(autoScrollTestimonials, 50); // Auto-scroll every 50 milliseconds

        //for the contact form 7



        


        const contactForm = document.getElementById('contactForm');
        const responseMessage = document.getElementById('responseMessage');

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            if (!name || !email || !message) {
                responseMessage.innerHTML = 'Please fill in all fields.';
                return;
            }

            // Simulate form submission (replace this with actual form submission logic)
            setTimeout(() => {
                responseMessage.innerHTML = `Thank you, ${name}! Your message has been sent.`;
                contactForm.reset();
            }, 1000);
        });