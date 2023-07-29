<template>
  <VContainer fluid class="fill-height ma-md-0 pa-md-0">
    <VRow align="center" justify="center">
      <VSpacer />
      <VCol class="px-5 px-lg-0" cols="12" sm="6" lg="4" xl="3">
        <div class="text-center">
          <h1 class="font-weight-bold">Sign In</h1>
          <p class="text-medium-emphasis mt-1 text-subtitle-1">
            Enter your email & password to get started
          </p>
        </div>

        <form @submit="submit" class="mt-10 px-lg-15">
          <FormInput name="email" label="Email" type="email" placeholder="johndoe@example.com" />
          <FormInput class="mt-3" name="password" label="Password" type="password" />

          <div class="mt-5">
            <PrimaryBtn :loading="isSubmitting" type="submit" block>Sign In</PrimaryBtn>
            <p class="mt-5">
              <NuxtLink class="text-body-2 font-weight-medium" to="#">Forgot password?</NuxtLink>
            </p>
          </div>
        </form>
      </VCol>
      <VSpacer />
      <VCol sm="4" lg="8" xl="8" class="pa-5 h-screen" v-if="$vuetify.display.mdAndUp">
        <VImg
          cover
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
          alt="Sign In"
          class="h-screen w-full rounded-lg"
        />
      </VCol>
    </VRow>
  </VContainer>
</template>

<script setup lang="ts">
  import { object, string } from "yup";
  useSeoMeta({
    title: "Sign In",
    description: "Sign In to your account",
  });

  definePageMeta({
    layout: "blank",
  });

  const { handleSubmit, isSubmitting } = useForm({
    validationSchema: toTypedSchema(
      object({
        email: string().email("Invalid email").required("Email is required"),
        password: string()
          .required("Password is required")
          .min(8, "Password must be at least 8 characters"),
      })
    ),
  });

  const submit = handleSubmit(async (values) => {
    await new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
    await navigateTo("/admin/dashboard");
  });
</script>
