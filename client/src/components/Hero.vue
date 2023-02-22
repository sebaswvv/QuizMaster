<template>
  <div class="col-xxl-12 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img
          src="./../assets/pubquiz.jpg"
          class="d-block mx-lg-auto img-fluid"
          alt="Pubquiz image"
          width="700"
          height="500"
          loading="lazy"
        />
      </div>
      <div class="col-md-5">
        <h1 class="display-5 fw-bold lh-1 mb-3">QuizMaster</h1>
        <p class="lead">Maak en speel je eigen pubquizes met QuizMaster!</p>
        <div class="justify-content-md-start">
          <router-link to="/create">
            <button type="button" class="btn btn-primary mb-3">
              Maak een quiz
            </button>
          </router-link>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="b.v.b. Formule 1"
              aria-label="Zoek een quiz"
              aria-describedby="button-addon2"
            />
            <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              Zoek een quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>