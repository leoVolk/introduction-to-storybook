<template>
  <div>
    <b-container style="text-align: left;">
      <b-row>
        <b-col>
          <b-card class="shadows" header="Login To Your Account" header-bg-variant="dark" border-variant="dark" header-text-variant="white">
            <b-form>
              <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
              >
                <b-form-input
                  id="input-1"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Enter email"
                ></b-form-input>
              </b-form-group>

              <b-form-group id="input-group-2" label="Your Password:" label-for="input-2">
                <b-form-input
                  id="input-2"
                  v-model="form.password"
                  required
                  type="password"
                  placeholder="Enter passwrod"
                ></b-form-input>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
  }
</script>
