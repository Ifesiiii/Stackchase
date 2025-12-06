<script setup>
import { ref } from 'vue';

const activeSection = ref('introduction');

const tableOfContents = [
  { id: 'introduction', label: 'Introductions' },
  { id: 'information-collect', label: 'Information We Collect' },
  { id: 'how-we-use', label: 'How We Use Your Information' },
  { id: 'sharing', label: 'Sharing Your Information' },
  { id: 'choices', label: 'Your choices and Rights' },
  { id: 'security', label: 'Security Measures' },
  { id: 'changes', label: 'Changes to This Privacy Policy' },
  { id: 'contact', label: 'Contact Us' },
  { id: 'last-updated', label: 'Last Updated' }
];

const scrollToSection = (sectionId) => {
  activeSection.value = sectionId;
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};
</script>

<template>
  <div class="font-heading py-4 px-8 mb-[100px]">
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <!-- Table of Contents Sidebar -->
        <aside class="lg:col-span-5">
          <div class="lg:sticky lg:top-8">
            <h2 class="text-[40px] font-bold text-[#101010] mb-6 leading-[56px]">Table of Content</h2>
            <nav>
              <ul class="space-y-3">
                <li v-for="item in tableOfContents" :key="item.id">
                  <button
                    @click="scrollToSection(item.id)"
                    :class="[
                      'text-left text-xl hover:text-[#101010] transition-colors leading-7',
                      activeSection === item.id ? 'text-[#131313] font-medium' : 'text-[#666] leading-7'
                    ]"
                  >
                    • {{ item.label }}
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        <!-- Main Content -->
        <main class="lg:col-span-7 text-[#101010]">
          <!-- Introduction -->
          <section id="introduction" class="mb-12">
            <h2 class="text-[40px] font-bold mb-[10px] leading-[56px]">Introduction</h2>
            <p class="text-xl leading-7 mb-2">
              At Stackchase, we are committed to protecting your privacy and safeguarding the information you share with us. This Privacy Policy explains how we collect, use, disclose, and protect your data when you access our platform, products, and services, including Ration (Collaboration Suite, Singular API), and related solutions.
            </p>
            <p class="text-xl leading-7">
              By using Stackchase, you agree to the practices described in this policy.
            </p>
          </section>

          <!-- Information We Collect -->
          <section id="information-collect" class="mb-12">
            <h2 class="text-[40px] font-bold mb-[10px] leading-[56px]">Information We Collect</h2>
            <p class="text-xl leading-7 mb-4">
              We collect information to deliver a seamless experience and improve our services. This includes:
            </p>

            <div class="space-y-6">
              <div>
                <h3 class="text-xl leading-7 font-bold mb-3">a. Personal Information</h3>
                <ul class="list-disc list-inside space-y-2 text-xl ml-4">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Account login details</li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl leading-7 font-bold mb-3">b. Usage Data</h3>
                <ul class="list-disc list-inside space-y-2 text-xl ml-4">
                  <li>Interactions with our applications</li>
                  <li>Analytics on feature usage</li>
                  <li>Log data such as IP address, browser type, operating system</li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-bold leading-7 mb-3">c. Communication Data</h3>
                <ul class="list-disc list-inside space-y-2 text-xl ml-4">
                  <li>Messages, requests, and feedback sent through our support channels</li>
                  <li>Emails exchanged with our team</li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-bold leading-7 mb-3">d. Technical Information</h3>
                <ul class="list-disc list-inside space-y-2 text-xl ml-4">
                  <li>Device information</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>API usage logs (for developers)</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- How We Use Your Information -->
          <section id="how-we-use" class="mb-12">
            <h2 class="text-[40px] font-bold mb-[10px] leading-[56px]">How We Use Your Information</h2>
            <p class="text-xl leading-7 mb-4">
              We use the information collected to:
            </p>
            <ul class="list-disc list-inside space-y-2 text-xl ml-4 mb-4">
              <li>Provide, maintain, and improve Stackchase services</li>
              <li>Personalise your experience across our platforms</li>
              <li>Ensure system performance, reliability, and security</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send service updates, product announcements, and service-related communications</li>
              <li>Analyze usage trends for product development</li>
              <li>Enforce our terms, prevent abuse, and maintain system integrity</li>
            </ul>
            <p class="text-xl leading-7">
              We do not sell your personal information to third parties.
            </p>
          </section>

          <!-- Sharing Your Information -->
          <section id="sharing" class="mb-12">
            <h2 class="text-[40px] font-bold mb-[10px] leading-[56px]">Sharing Your Information</h2>
            <p class="text-xl leading-7 mb-4">
              We may share your information under specific circumstances:
            </p>

            <div class="space-y-6">
              <div>
                <h3 class="text-xl leading-7 font-bold mb-3">a. Service Providers</h3>
                <p class="text-xl leading-7 mb-3">
                  Trusted third-party vendors who assist with:
                </p>
                <ul class="list-disc list-inside space-y-2 text-xl ml-4 mb-3">
                  <li>Hosting</li>
                  <li>Payment processing</li>
                  <li>Email delivery</li>
                  <li>Analytics</li>
                </ul>
                <p class="text-xl leading-7">
                  These providers access information only to perform tasks on our behalf and must comply with strict confidentiality obligations.
                </p>
              </div>

              <div>
                <h3 class="text-xl font-bold leading-7 mb-3">b. Legal and Safety Requirements</h3>
                <p class="text-xl leading-7 mb-3">
                  We may disclose information if:
                </p>
                <ul class="list-disc list-inside space-y-2 text-xl ml-4">
                  <li>Required by law or court order</li>
                  <li>Necessary to protect the rights, safety, or security of Stackchase, our users, or the public</li>
                </ul>
              </div>

              <div>
                <h3 class="text-xl font-bold leading-7 mb-3">c. Business Transfers</h3>
                <p class="text-xl leading-7">
                  If Stackchase undergoes a merger, acquisition, or restructuring, your information may be transferred as part of the business assets. You will be notified in such cases.
                </p>
              </div>
            </div>
          </section>

          <!-- Your Choices and Rights -->
          <section id="choices" class="mb-12">
            <h2 class="text-[40px] font-bold mb-[10px] leading-[56px]">Your Choices and Rights</h2>
            <p class="text-xl leading-7 mb-4">
              Depending on your location, you may have the right to:
            </p>
            <ul class="list-disc list-inside space-y-2 text-xl ml-4 mb-4">
              <li>Access the personal information we hold about you</li>
              <li>Request corrections or updates</li>
              <li>Request deletion of your data</li>
              <li>Opt out of marketing communications</li>
              <li>Limit certain data processing activities</li>
              <li>Request a copy of your data (data portability)</li>
            </ul>
            <p class="text-xl leading-7">
              You can exercise these rights by contacting us at the email provided below.
            </p>
          </section>

          <!-- Security Measures -->
          <section id="security" class="mb-12">
            <h2 class="text-[40px] font-bold mb-[10px] leading-[56px]">Security Measures</h2>
            <p class="text-xl leading-7 mb-4">
              We implement industry-standard security practices to protect your information, including:
            </p>
            <ul class="list-disc list-inside space-y-2 text-xl ml-4 mb-4">
              <li>Data encryption</li>
              <li>Access controls</li>
              <li>Secure servers</li>
              <li>Continuous monitoring</li>
              <li>Regular security audits</li>
            </ul>
            <p class="text-xl leading-7">
              While we take every precaution, no system is 100% secure. We encourage users to maintain strong passwords and protect their account credentials.
            </p>
          </section>

          <!-- Changes to This Privacy Policy -->
          <section id="changes" class="mb-12">
            <h2 class="text-[40px] font-bold mb-[10px] leading-[56px]">Changes to This Privacy Policy</h2>
            <p class="text-xl leading-7">
              We may revise this Privacy Policy from time to time. Updates will be posted on this page, and we will notify you of significant changes. Continued use of Stackchase after updates means you accept the revised policy.
            </p>
          </section>

          <!-- Contact Us -->
          <section id="contact" class="mb-12">
            <h2 class="text-[40px] font-bold mb-[10px] leading-[56px]">Contact Us</h2>
            <p class="text-xl leading-7 mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy, please reach out to us:
            </p>
            <p class="text-xl leading-7">
              <strong>Email:</strong> support@stackchase.com<br>
              <strong>Website:</strong> www.stackchase.com
            </p>
          </section>

          <!-- Last Updated -->
          <section id="last-updated">
            <h2 class="text-[40px] font-bold mb-[10px] leading-[56px]">Last Updated</h2>
            <p class="text-xl leading-7">
              This Privacy Policy was last updated on <strong>02/12/2025.</strong>
            </p>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>