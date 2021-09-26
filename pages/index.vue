<template>
  <div>
    <v-row justify="center" align="center" class="d-md-none">
      <v-col cols="12" sm="8" md="6">
          <v-stepper v-model="e1">
          <v-stepper-header>
            <v-stepper-step
              :complete="e1 > 1"
              step="1"
            >
              Name of step 1
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step
              :complete="e1 > 2"
              step="2"
            >
              Name of step 2
            </v-stepper-step>

            <v-divider></v-divider>

            <v-stepper-step step="3">
              Name of step 3
            </v-stepper-step>
          </v-stepper-header>

            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card
                  class="mb-12"
                  color="grey lighten-1"
                  height="200px"
                ></v-card>

                <v-btn
                  color="primary"
                  @click="e1 = 2"
                >
                  Continue
                </v-btn>

                <v-btn text>
                  Cancel
                </v-btn>
              </v-stepper-content>

              <v-stepper-content step="2">
                <v-card
                  class="mb-12"
                  color="grey lighten-1"
                  height="200px"
                ></v-card>

                <v-btn
                  color="primary"
                  @click="e1 = 3"
                >
                  Continue
                </v-btn>

                <v-btn text>
                  Cancel
                </v-btn>
              </v-stepper-content>

              <v-stepper-content step="3">
                <v-card
                  class="mb-12"
                  color="grey lighten-1"
                  height="200px"
                ></v-card>

                <v-btn
                  color="primary"
                  @click="e1 = 1"
                >
                  Continue
                </v-btn>

                <v-btn text>
                  Cancel
                </v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>

          <v-card class="logo py-4 d-flex justify-center">
            <NuxtLogo />
            <VuetifyLogo />
          </v-card>

          <v-card>
            <v-card-title class="headline">
              Welcome to the Vuetify + Nuxt.js template
            </v-card-title>
            <v-card-text>
              <p>Vuetify is a progressive Material Design component framework for Vue.js. It was designed to empower developers to create amazing applications.</p>
              <p>
                For more information on Vuetify, check out the <a
                  href="https://vuetifyjs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  documentation
                </a>.
              </p>
              <p>
                If you have questions, please join the official <a
                  href="https://chat.vuetifyjs.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="chat"
                >
                  discord
                </a>.
              </p>
              <p>
                Find a bug? Report it on the github <a
                  href="https://github.com/vuetifyjs/vuetify/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="contribute"
                >
                  issue board
                </a>.
              </p>
              <p>Thank you for developing with Vuetify and I look forward to bringing more exciting features in the future.</p>
              <div class="text-xs-right">
                <em><small>&mdash; John Leider</small></em>
              </div>
              <hr class="my-3">
              <a
                href="https://nuxtjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nuxt Documentation
              </a>
              <br>
              <a
                href="https://github.com/nuxt/nuxt.js"
                target="_blank"
                rel="noopener noreferrer"
              >
                Nuxt GitHub
              </a>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
                color="primary"
                nuxt
                to="/inspire"
              >
                Continue
              </v-btn>
            </v-card-actions>
          </v-card>
      </v-col>
    </v-row>

    <v-row class="d-none d-md-block">
      <v-stepper
        v-model="e6"
        vertical
      >
        <v-stepper-step
          :complete="e6 > 1"
          step="1"
        >
          Select an app
          <small>Summarize if needed</small>
        </v-stepper-step>

        <v-stepper-content step="1">
          <v-card
            color="grey lighten-1"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 2"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-step
          :complete="e6 > 2"
          step="2"
        >
          Configure analytics for this app
        </v-stepper-step>

        <v-stepper-content step="2">
          <v-card
            color="grey lighten-1"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 3"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-step
          :complete="e6 > 3"
          step="3"
        >
          Select an ad format and name ad unit
        </v-stepper-step>

        <v-stepper-content step="3">
          <v-card
            color="grey lighten-1"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 4"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>

        <v-stepper-step step="4">
          View setup instructions
        </v-stepper-step>
        <v-stepper-content step="4">
          <v-card
            color="grey lighten-1"
            class="mb-12"
            height="200px"
          ></v-card>
          <v-btn
            color="primary"
            @click="e6 = 1"
          >
            Continue
          </v-btn>
          <v-btn text>
            Cancel
          </v-btn>
        </v-stepper-content>
      </v-stepper>
    </v-row>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        e1: 1, 
        e6: 1,

      }
    },
  }
</script>
