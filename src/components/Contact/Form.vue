<script setup>
import { reactive, ref } from 'vue';

const formData = reactive({
  fullName: 'John Doe',
  companyName: 'ABC Limited',
  email: 'johndoe@stackchase.com',
  message: ''
});

const errors = ref({});
const isSubmitting = ref(false);
const submitSuccess = ref(false);

const validateForm = () => {
  const newErrors = {};
  
  if (!formData.fullName.trim()) {
    newErrors.fullName = 'Full name is required';
  }
  
  if (!formData.companyName.trim()) {
    newErrors.companyName = 'Company name is required';
  }
  
  if (!formData.email.trim()) {
    newErrors.email = 'Email address is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = 'Please enter a valid email address';
  }
  
  if (!formData.message.trim()) {
    newErrors.message = 'Message is required';
  }
  
  return newErrors;
};

const handleSubmit = () => {
  const newErrors = validateForm();
  errors.value = newErrors;
  
  if (Object.keys(newErrors).length === 0) {
    isSubmitting.value = true;
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      isSubmitting.value = false;
      submitSuccess.value = true;
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        submitSuccess.value = false;
      }, 3000);
    }, 1000);
  }
};

const clearError = (field) => {
  if (errors.value[field]) {
    errors.value = { ...errors.value, [field]: '' };
  }
};
</script>




<template>
  <div class="font-heading mx-auto mb-[100px] sm:px-8">
    <div class="max-w-7xl max-w-screen-[1366px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[88px]">
      <!-- Left side - Form -->
      <div>
        <div class="mb-6">
          <label class="block text-[#131313] text-lg font-medium mb-2 leading-6">
            Full Name
          </label>
          <input
            type="text"
            v-model="formData.fullName"
            @input="clearError('fullName')"
            :class="['w-full px-4 py-3 border rounded bg-white text-base leading-6 text-[#616161] focus:outline-none focus:border-blue-500', errors.fullName ? 'border-red-500' : 'border-[#E7E7E7]']"
          />
          <p v-if="errors.fullName" class="text-red-500 text-sm mt-1">{{ errors.fullName }}</p>
        </div>

        <div class="mb-6">
          <label class="block text-[#131313] text-lg font-medium mb-2 leading-6">
            Company Name
          </label>
          <input
            type="text"
            v-model="formData.companyName"
            @input="clearError('companyName')"
            :class="['w-full px-4 py-3 border rounded bg-white text-base leading-6 text-[#616161] focus:outline-none focus:border-blue-500', errors.companyName ? 'border-red-500' : 'border-[#E7E7E7]']"
          />
          <p v-if="errors.companyName" class="text-red-500 text-sm mt-1">{{ errors.companyName }}</p>
        </div>

        <div class="mb-6">
          <label class="block text-[#131313] text-lg font-medium mb-2 leading-6">
            Email address
          </label>
          <input
            type="email"
            v-model="formData.email"
            @input="clearError('email')"
            :class="['w-full px-4 py-3 border rounded bg-white text-base leading-6 text-[#616161] focus:outline-none focus:border-blue-500', errors.email ? 'border-red-500' : 'border-[#E7E7E7]']"
          />
          <p v-if="errors.email" class="text-red-500 text-sm mt-1">{{ errors.email }}</p>
        </div>

        <div class="mb-6">
          <label class="block text-[#131313] text-lg font-medium mb-2 leading-6">
            Messages
          </label>
          <textarea
            v-model="formData.message"
            @input="clearError('message')"
            placeholder="Write something..."
            rows="6"
            :class="['w-full px-4 py-3 border rounded bg-white text-base leading-6 text-[#616161] placeholder-[#616161] focus:outline-none focus:border-blue-500 resize-none', errors.message ? 'border-red-500' : 'border-[#E7E7E7]']"
          ></textarea>
          <p v-if="errors.message" class="text-red-500 text-sm mt-1">{{ errors.message }}</p>
        </div>

        <button
          @click="handleSubmit"
          :disabled="isSubmitting"
          class="bg-[#069] hover:bg-blue-400 disabled:bg-blue-400 text-white text-base leading-6 font-medium px-8 py-3 rounded transition-colors"
        >
          {{ isSubmitting ? 'Submitting...' : 'Submit' }}
        </button>
        
        <p v-if="submitSuccess" class="text-green-600 mt-4 font-medium">Form submitted successfully!</p>
      </div>

      <!-- Right side - Contact Info -->
      <div class="bg-[#F8FBFC] p-12">
        <div class="mb-8">
          <h3 class="text-[#666] text-xl mb-2 leading-6">Email:</h3>
          <a href="mailto:support@stackchase.com" class="text-[#131313] text-2xl leading-[30px]">
            support@stackchase.com
          </a>
        </div>

        <div class="mb-8">
          <h3 class="text-[#666] text-xl mb-2 leading-6">Phone:</h3>
          <a href="tel:+2341234567890" class="text-[#131313] text-2xl leading-[30px]">
            +234 123 456 7890
          </a>
        </div>

        <div class="mb-8">
          <h3 class="text-[#666] text-xl mb-2 leading-6">Office:</h3>
          <address class="text-[#131313] text-2xl leading-[30px] not-italic">
            3 Olaletan Street, Off Onigefon<br />
            Road, Oniru, VI, Lagos, Nigeria
          </address>
        </div>

        <div>
          <h3 class="text-[#666] text-xl mb-4 leading-6">Follow Us:</h3>
          <div class="flex gap-4">
            <a href="#" class="w-12 h-12 bg-[#13212F] rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="Facebook">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M15.75 8.25002H14.25C13.9542 8.24878 13.6611 8.30613 13.3875 8.41876C13.114 8.5314 12.8654 8.69708 12.6563 8.90626C12.4471 9.11544 12.2814 9.36397 12.1688 9.63752C12.0561 9.91106 11.9988 10.2042 12 10.5V21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M9 13.5H15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </a>
            
            <a href="#" class="w-12 h-12 bg-[#13212F] rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="Twitter/X">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M8.74023 12.2092L12.7083 17.5H18.5416L11.9931 8.76858L17.4423 2.5H15.234L10.9702 7.40482L7.29165 2.5H1.45831L7.71736 10.8454L1.9326 17.5H4.14095L8.74023 12.2092ZM13.5416 15.8333L4.79165 4.16667H6.45831L15.2083 15.8333H13.5416Z" fill="white"/>
            </svg>
            </a>
            
            <a href="#" class="w-12 h-12 bg-[#13212F] rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M19.875 3.375H4.125C3.71079 3.375 3.375 3.71079 3.375 4.125V19.875C3.375 20.2892 3.71079 20.625 4.125 20.625H19.875C20.2892 20.625 20.625 20.2892 20.625 19.875V4.125C20.625 3.71079 20.2892 3.375 19.875 3.375Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.25 10.5V16.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.25 10.5V16.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M11.25 13.125C11.25 12.4288 11.5266 11.7611 12.0188 11.2688C12.5111 10.7766 13.1788 10.5 13.875 10.5C14.5712 10.5 15.2389 10.7766 15.7312 11.2688C16.2234 11.7611 16.5 12.4288 16.5 13.125V16.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M8.25 8.625C8.87132 8.625 9.375 8.12132 9.375 7.5C9.375 6.87868 8.87132 6.375 8.25 6.375C7.62868 6.375 7.125 6.87868 7.125 7.5C7.125 8.12132 7.62868 8.625 8.25 8.625Z" fill="white"/>
               </svg>
            </a>
            
            <a href="#" class="w-12 h-12 bg-[#13212F] rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                <path d="M16.125 3.375H7.875C5.38972 3.375 3.375 5.38972 3.375 7.875V16.125C3.375 18.6103 5.38972 20.625 7.875 20.625H16.125C18.6103 20.625 20.625 18.6103 20.625 16.125V7.875C20.625 5.38972 18.6103 3.375 16.125 3.375Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M16.875 8.25C17.4963 8.25 18 7.74632 18 7.125C18 6.50368 17.4963 6 16.875 6C16.2537 6 15.75 6.50368 15.75 7.125C15.75 7.74632 16.2537 8.25 16.875 8.25Z" fill="white"/>
               </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

