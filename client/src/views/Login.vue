<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <div class="container">
    <Navbar />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-7 col-lg-5">
          <div class="wrap">
            <div class="login-wrap p-4 p-md-5">
              <div class="d-flex">
                <div class="w-100">
                  <h3 class="mb-4">Log in</h3>
                </div>
              </div>
              <form action="#" class="signin-form">
                <div class="form-group mt-3">
                  <label class="form-control-placeholder" for="username"
                    >Username</label
                  >
                  <input type="text" class="form-control" />
                  <div
                    data-lastpass-icon-root="true"
                    style="
                      position: relative !important;
                      height: 0px !important;
                      width: 0px !important;
                      float: left !important;
                    "
                  ></div>
                </div>
                <div class="form-group">
                  <label class="form-control-placeholder" for="password"
                    >Password</label
                  >
                  <input
                    id="password-field"
                    type="password"
                    class="form-control"
                  />
                  <span
                    toggle="#password-field"
                    class="fa fa-fw fa-eye field-icon toggle-password"
                  ></span>
                  <div
                    data-lastpass-icon-root="true"
                    style="
                      position: relative !important;
                      height: 0px !important;
                      width: 0px !important;
                      float: left !important;
                    "
                  ></div>
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="form-control btn btn-primary rounded submit px-3"
                  >
                    Sign In
                  </button>
                </div>
                <div class="form-group d-md-flex">
                  <div class="w-50 text-md-right">
                    <a href="#">Forgot Password</a>
                  </div>
                </div>
              </form>
              <p class="text-center">
                Not a member? <a data-toggle="tab" href="#signup">Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>
</style>