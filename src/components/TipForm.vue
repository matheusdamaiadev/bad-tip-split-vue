<template>
  <div class="panel">
    <h2>Entradas</h2>

    <label>Valor da conta (R$)</label>
    <input
      type="number"
      class="input"
      :value="bill"
      @input="$emit('update:bill', $event.target.value)"
    />

    <label>Gorjeta (%)</label>
    <input
      type="number"
      class="input"
      :value="tip"
      @input="$emit('update:tip', $event.target.value)"
    />

    <label>Número de pessoas</label>
    <input
      type="number"
      class="input"
      :value="people"
      @input="$emit('update:people', $event.target.value)"
    />

    <button class="primary-btn" @click="$emit('calculate')">
      Calcular divisão
    </button>

    <div v-if="error" class="error">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
defineProps({
  bill: String,
  tip: String,
  people: String,
  error: String
})

defineEmits([
  "update:bill",
  "update:tip",
  "update:people",
  "calculate"
])
</script>