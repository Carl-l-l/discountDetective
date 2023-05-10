<template>
  <div class="container mt-lg-5 mt-2">
    <div class="row">
      <div class="col-lg-8">
        <div class="action-prompt">
          <h2 class="display-6">ABOUT US</h2>
          <hr>
          <div class="description mt-4">
            <h4>Description:</h4>
            <p>
              Welcome to DiscountDetective, the price comparison app for all your grocery shopping needs. 
              Our app helps you save time and money by providing real-time information on prices and deals from multiple supermarkets. 
              With DiscountDetective, you can easily compare prices on thousands of products and find the best deals on your favorite items. 
              Download our app today and start saving!
            </p>
            <hr />
          </div>
          <div class="our-team mt-2">
            <h4>Our team:</h4>
            <p>
              DiscountDetective was created by a team of three passionate developers with expertise in app development, data analytics, and user experience design. Their hard work and dedication have resulted in a top-notch price comparison app that has revolutionized grocery shopping for millions of users worldwide. Despite their success, the developers remain committed to improving the app and providing the best possible experience for shoppers.
            </p>
            <hr />
          </div>
          <div class="feedback mt-2 mb-4">
            <h4>Feedback:</h4>
            <p>
              Thank you for using our app! We value your feedback and would love to
              hear about your experience. Please take a moment to rate your parking spot and
              leave a review. Your feedback will help us improve the app and provide a
              better service for all our users. Thank you for your support!
            </p>
            <a class="btn btn-primary btn-dark" href="mailto:carlleeladefoged@gmail.com">
              Send us some feedback!
            </a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 mt-lg-0 mt-4">
        <div class="action-prompt">
          <h2 class="display-6">CONTACT US</h2>
          <hr />
          <div class="row contact-us">
            <h4 class="">Phone:</h4>
            <div class="col-lg-12 contact-row">
              <img width="50" height="50" src="../assets/Phone.webp" alt="Phone" />
              <p>+45 12 34 56 78</p>
            </div>
            <hr class="mt-4" />
            <h4 class="">Mail:</h4>
            <div class="col-lg-12 contact-row">
              <img width="50" height="50" src="../assets/Mail.webp" alt="Mail" />
              <p>support@dd.dk</p>
            </div>
            <hr class="mt-4" />
            <h4 class="">Location:</h4>
            <div class="col-lg-12 contact-row">
              <img width="50" height="50" src="../assets/Location.webp" alt="Location" />
              <p>Vikærsvej 46, 2. th 8240 Risskov</p>
            </div>
            <hr class="mt-4" />
            <h4 class="">Livechat:</h4>
            <div class="col-lg-12 contact-row">
              <img width="50" height="50" src="../assets/Livechat.webp" alt="Livechat" />
              <p>Livechat funktion på vej!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.action-prompt {
  /* Override */
  height: 100%;
}

.contact-row p {
  margin-bottom: 0px;
}

.contact-us {
  flex-direction: column;
}

.contact-us .contact-row {
  margin-top: 15px;
  display: flex;
  align-items: center;
}

.contact-us .contact-row img {
  margin-right: 20px;
}

</style>
