<script setup>
  const cards = [
    {
        image:'src/assets/img/avatar-1.jpg',
        title:'Brown wooden dock between lavender flower field...',
        name:'Sarah Hudson',
        designation:'App Developer',
    },
    {
        image:'src/assets/img/avatar-2.png',
        title:'Brown wooden dock between lavender flower field...',
        name:'Sarah Hudson',
        designation:'App Developer',
    },
    {
        image:'src/assets/img/avatar-3.jpg',
        title:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....',
        name:'Sarah Hudson',
        designation:'App Developer',
    },
    {
        image:'src/assets/img/avatar-4.jpg',
        title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam....',
        name: 'Sarah Hudson',
        designation: 'App Developer',
    },
]
</script>

<template>
    <section class="p-0" id="testimonials" style="background: url(src/img/testimonials-bg.png) no-repeat; background-size: 40% 100%; background-position: left center">
      <div class="container text-center">
        <p class="h6 text-uppercase text-primary">Testimonials</p>
        <h2 class="mb-5">What Our Users Says?</h2>
        <div class="row">
          <div class="col-lg-8 mx-auto">
            <div class="swiper testimonials-slider">
              <div class="swiper-wrapper">

                <div v-for="card in cards" class="swiper-slide h-auto">
                  <div class="mx-3 mx-lg-5 my-5 pt-3">
                    <div class="card shadow rounded-lg px-4 py-5 px-lg-5 with-pattern bg-white border-0">
                      <div class="card-body index-forward pt-5 rounded-lg">
                        <div class="testimonial-img"><img class="rounded-circle" :src="card.image" alt="" width="100"/></div>
                        <p class="lead text-muted mb-5">{{ card.title }}</p>
                        <h5 class="mb-0">{{card.name}}</h5>
                        <p class="text-primary mb-0 text-sm">{{card.designation}}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>