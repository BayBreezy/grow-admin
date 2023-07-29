<template>
  <div class="w-full">
    <label
      :for="inputId"
      style="font-size: 15px"
      class="d-inline-block mb-1 cursor-pointer font-weight-medium"
      v-if="label"
      >{{ label }}</label
    >
    <VTextField
      @click:clear="handleReset"
      @input="handleChange"
      @blur="handleBlur"
      v-model="value"
      :id="inputId"
      :error-messages="errors"
      :type="type"
      :name="name"
    >
      <template v-for="(_, slot) in $slots" v-slot:[slot]="scope">
        <slot :name="slot" v-bind="scope" />
      </template>
    </VTextField>
  </div>
</template>

<script setup lang="ts">
  const props = withDefaults(
    defineProps<{
      type?: string;
      name?: string;
      modelValue?: string;
      label?: string;
      id?: any;
    }>(),
    {
      type: "text",
    }
  );

  defineOptions({ inheritAttrs: false });

  const inputId = computed(() => props.id || `input-${Math.random().toString(36).substring(2, 9)}`);

  const { errors, value, handleBlur, handleChange, handleReset } = useField(
    () => props.name || inputId.value,
    undefined,
    {
      initialValue: props.modelValue,
      syncVModel: true,
      label: props.label,
    }
  );
</script>
