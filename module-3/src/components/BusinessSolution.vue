<script setup>
  const cards = [
    {
        icon:'#document-saved-1',
        title:'Online Marketing',
        description:'Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod tempor incididunt ut labore.',
    },
    {
        icon:'#map-marker-1',
        title:'Market analysis',
        description:'Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod tempor incididunt ut labore.',
    },
    {
        icon:'#arrow-target-1',
        title:'Track your move',
        description:'Lorem ipsum dolor amet consectetur adipisicing sed do eiusmod tempor incididunt ut labore.',
    },
 ]
</script>


<template>
    <section class="bg-center py-0" id="about" style="background: url(img/service-bg.svg) no-repeat; background-size: cover">
      <section class="about py-0">
        <div class="container">
          <p class="h6 text-uppercase text-primary">What is it all about?</p>
          <h2 class="mb-5">Track your time and expenses</h2>
          <div class="row pb-5 gy-4">
            <div v-for="card in cards" :key="index" class="col-lg-4 col-md-6">
              <!-- Services Item-->
              <div class="card border-0 shadow rounded-lg py-4 text-start">
                <div class="card-body p-5">
                  <svg class="svg-icon svg-icon-light" style="width:60px;height:60px;color:#ff904e">
                    <use :xlink:href="card.icon"> </use>
                  </svg>
                  <h3 class="h4 my-4">{{ card.title }}</h3>
                  <p class="text-sm text-muted mb-0">{{card.description}}</p>
                </div>
              </div>
            </div>

            
          </div>
        </div>
      </section>
      <section class="with-pattern-1 py-5" id="services">
        <div class="container py-5">
          <div class="row align-items-center mb-5 gy-5">
            <div class="col-lg-6"><img class="img-fluid w-100 px-lg-5" src="img/objects.svg" alt=""></div>
            <div class="col-lg-6">
              <h2>The Best Business Solutions Guide for You</h2>
              <p class="text-muted">Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation.</p>
              <button class="btn btn-primary js-modal-btn" data-video-id="B6uuIHpFkuo"><i class="fas fa-play-circle me-2"></i>Play video</button>
            </div>
          </div>
          <div class="row align-items-center gy-5">
            <div class="col-lg-6">
              <h2>Make your own success as simple you clap</h2>
              <p class="text-muted">Dolor sit amet consectetur elit sed do eiusmod tempor incididunt labore dolore magna aliqua enim ad minim veniam quis nostrud exercitation.</p>
              <ul class="list-check">
                <li class="text-muted mb-2">Various Analysis Options</li>
                <li class="text-muted mb-2">Page Load Details (time, size, number of requests)</li>
                <li class="text-muted mb-2">Waterfall, Video and Report History</li>
              </ul>
              <button class="btn btn-primary js-modal-btn" data-video-id="B6uuIHpFkuo"><i class="fas fa-play-circle me-2"></i>Play video</button>
            </div>
            <div class="col-lg-6">
              <div class="row gy-4">
                <div class="col-lg-6 col-sm-6">
                  <!-- Services Item-->
                  <div class="card border-0 shadow rounded-lg text-start px-2">
                    <div class="card-body px py-5">
                      <svg class="svg-icon" style="width:40px;height:40px;color:#ff904e">
                        <use xlink:href="#document-saved-1"> </use>
                      </svg>
                      <h3 class="h5 my-3">Online Marketing</h3>
                      <p class="text-sm mb-0 text-muted">Lorem ipsum dolor amet consectetur adipisicing.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                  <!-- Services Item-->
                  <div class="card border-0 shadow rounded-lg text-start px-2">
                    <div class="card-body px py-5">
                      <svg class="svg-icon" style="width:40px;height:40px;color:#39f8d2">
                        <use xlink:href="#map-marker-1"> </use>
                      </svg>
                      <h3 class="h5 my-3">Track your move </h3>
                      <p class="text-sm mb-0 text-muted">Lorem ipsum dolor amet consectetur adipisicing.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                  <!-- Services Item-->
                  <div class="card border-0 shadow rounded-lg text-start px-2">
                    <div class="card-body px py-5">
                      <svg class="svg-icon" style="width:40px;height:40px;color:#8190ff">
                        <use xlink:href="#arrow-target-1"> </use>
                      </svg>
                      <h3 class="h5 my-3">Market analysis</h3>
                      <p class="text-sm mb-0 text-muted">Lorem ipsum dolor amet consectetur adipisicing.</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-sm-6">
                  <!-- Services Item-->
                  <div class="card border-0 shadow rounded-lg text-start px-2">
                    <div class="card-body px py-5">
                      <svg class="svg-icon" style="width:40px;height:40px;color:#ff634b">
                        <use xlink:href="#sorting-1"> </use>
                      </svg>
                      <h3 class="h5 my-3">Full Settings</h3>
                      <p class="text-sm mb-0 text-muted">Lorem ipsum dolor amet consectetur adipisicing.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
</template>