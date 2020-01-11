<template>
  <div>
    <form>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="newPass">
          New Password
        </label>
        <input 
          @change="validatePasswordFields"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :class="passwordsMatch && passwordsNotEmpty ? '' : 'border-red-700 bg-red-200'"
          id="newPass" 
          type="password" 
          placeholder="******************" 
          v-model="newPass">
      </div>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="newPassVerification">
          Verify Password
        </label>
        <input
          @change="validatePasswordFields"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          :class="passwordsMatch && passwordsNotEmpty ? '' : 'border-red-700 bg-red-200'"
          id="newPassVerification" 
          type="password" 
          placeholder="******************" 
          v-model="newPassVerification">
      </div>

      <div class="flex justify-end">

        <button type="submit" @click.prevent="forgotPass" class="rounded text-white py-2 px-8" :class="(!passwordsMatch || !passwordsNotEmpty) ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-700'" :disabled="!passwordsMatch || !passwordsNotEmpty">
          Save
        </button>
      
      </div>

      <p v-if="errorMessage" class="text-red-500 text-center my-8">{{errorMessage}}</p>

    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passwordsMatch: true,
      passwordsNotEmpty: true,
      newPass: '',
      newPassVerification: '',
      errorMessage: '',
    }
  },
  methods: {
    validatePasswordFields() {
      this.passwordsMatch = true;
      this.passwordsNotEmpty = true;
      if(!(this.newPass.trim().length > 5 && this.newPassVerification.trim().length > 5)) {
        this.passwordsNotEmpty = false;
      }

      if(this.newPass.trim() !== this.newPassVerification.trim()) {
        this.passwordsMatch = false;
      }
    },
    forgotPass() {
      this.validatePasswordFields();
      if(this.passwordsMatch && this.passwordsNotEmpty) {
        this.$store.dispatch('updateForgotPassword', {newPass: this.newPass, token: this.$route.query.token}).then(res => {
          if(res === 200) {
              this.newPass = '';
              this.newPassVerification = '';
              this.errorMessage = 'New password saved.';
            } else {
              this.errorMessage = 'Could not update password. Please try again.'
            }
        });
      }
    }
  }
}
</script>

<style>

</style>