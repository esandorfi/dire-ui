<template>
  <div class="mx-auto mt-8 p-6 bg-white rounded-lg shadow-md">
    <UForm
      :validate="validate"
      :state="state"
      class="space-y-4 w-full"
      @submit="onSubmit"
      @error="onError"
    >
      <UPageGrid class="lg:grid-cols-2">
        <div class="py-5">
          <UFormField label="Nom" name="name" required class="mb-3">
            <UInput
              v-model="state.name"
              placeholder="Entrez votre nom"
              icon="i-lucide-user"
              class="w-md"
            />
          </UFormField>
          <UFormField label="Email" name="email" required class="mb-3">
            <UInput
              v-model="state.email"
              type="email"
              placeholder="Entrez votre email"
              icon="i-lucide-mail"
              class="w-md"
            />
          </UFormField>

          <UFormField label="Téléphone" name="phone" required class="mb-3">
            <UInput
              v-model="state.phone"
              type="tel"
              placeholder="Entrez votre téléphone"
              icon="i-lucide-phone"
              class="w-md"
            />
          </UFormField>

          <UFormField label="Entreprise" name="company" class="mb-3">
            <UInput
              v-model="state.company"
              placeholder="Entrez le nom de votre entreprise"
              icon="i-lucide-building"
              class="w-md"
            />
          </UFormField>

          <UFormField label="Adresse" name="address" class="mb-3">
            <UTextarea
              v-model="state.address"
              placeholder="Entrez votre adresse"
              :rows="1"
              class="w-md"
            />
          </UFormField>
        </div>
        <div class="py-5">
          <div class="space-y-3">
            <UFormField name="appointmentRequested">
              <UCheckbox
                v-model="state.appointmentRequested"
                label="RDV souhaité"
                help="Cochez si vous souhaitez prendre un rendez-vous"
              />
            </UFormField>

            <UFormField name="quoteRequested">
              <UCheckbox
                v-model="state.quoteRequested"
                label="Demande de devis"
                help="Cochez si vous souhaitez recevoir un devis"
              />
            </UFormField>
          </div>

          <UFormField label="Message" name="message" class="mt-5">
            <UTextarea
              v-model="state.message"
              placeholder="Entrez votre message"
              :rows="12"
              class="w-md"
            />
          </UFormField>
        </div>
      </UPageGrid>

      <UButton
        type="submit"
        :loading="isSubmitting"
        :disabled="isSubmitting"
        block
        size="lg"
        icon="i-lucide-send"
      >
        {{ isSubmitting ? "Envoi en cours..." : "Envoyer le message" }}
      </UButton>
    </UForm>

    <UAlert
      v-if="message"
      :color="alertColor"
      :variant="alertVariant"
      :title="alertTitle"
      :description="message"
      class="mt-4"
      :icon="alertIcon"
    />
  </div>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent, FormErrorEvent } from "@nuxt/ui";

// Get runtime config for Formspree endpoint
const config = useRuntimeConfig();
const FORMSPREE_ENDPOINT = config.public.formspreeEndpoint;

// Form state
const state = reactive({
  name: "",
  email: "",
  phone: "",
  company: "",
  address: "",
  appointmentRequested: false,
  quoteRequested: false,
  message: "",
});

// Form status
const isSubmitting = ref(false);
const message = ref("");
const alertColor = ref("info");
const alertVariant = ref("solid");
const alertTitle = ref("");
const alertIcon = ref("i-lucide-check-circle");

// Form validation
type DemandeRdvFormState = {
  name: string;
  email: string;
  phone: string;
  company?: string;
  address?: string;
  appointmentRequested?: boolean;
  quoteRequested?: boolean;
  message?: string;
};

const validate = (state: DemandeRdvFormState): FormError[] => {
  const errors = [];

  if (!state.name || state.name.trim().length < 2) {
    errors.push({
      name: "name",
      message: "Le nom doit contenir au moins 2 caractères",
    });
  }

  if (!state.email) {
    errors.push({
      name: "email",
      message: "L'email est requis",
    });
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
    errors.push({
      name: "email",
      message: "Veuillez entrer une adresse email valide",
    });
  }

  if (!state.phone || state.phone.trim().length < 10) {
    errors.push({
      name: "phone",
      message: "Le téléphone doit contenir au moins 10 caractères",
    });
  }

  if (!state.message || state.message.trim().length < 10) {
    // Message is optional, only validate if provided
    if (
      state.message &&
      state.message.trim().length > 0 &&
      state.message.trim().length < 10
    ) {
      errors.push({
        name: "message",
        message: "Le message doit contenir au moins 10 caractères",
      });
    }
  }

  return errors;
};

// Form submission
const onSubmit = async (event: FormSubmitEvent<typeof state>) => {
  isSubmitting.value = true;
  message.value = "";

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(event.data),
    });

    if (response.ok) {
      message.value = "Merci ! Votre message a été envoyé avec succès.";
      alertColor.value = "info";
      alertVariant.value = "solid";
      alertTitle.value = "Succès";
      alertIcon.value = "i-lucide-check-circle";

      // Reset form
      Object.assign(state, {
        name: "",
        email: "",
        phone: "",
        company: "",
        address: "",
        appointmentRequested: false,
        quoteRequested: false,
        message: "",
      });
    } else {
      throw new Error("Failed to send message");
    }
  } catch (error) {
    console.error("Form submission error:", error);
    message.value =
      "Désolé, une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.";
    alertColor.value = "error";
    alertVariant.value = "solid";
    alertTitle.value = "Erreur";
    alertIcon.value = "i-lucide-alert-circle";
  } finally {
    isSubmitting.value = false;
  }
};

// Error handling - focus first field with error
const onError = async (event: FormErrorEvent) => {
  if (event?.errors?.[0]?.id) {
    const element = document.getElementById(event.errors[0].id);
    element?.focus();
    element?.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};
</script>
