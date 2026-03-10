<template>
  <div class="panel">
    <h2>Resultado</h2>

    <div v-if="!calculated" class="empty">
      Preencha os valores para calcular.
    </div>

    <div v-else>
      <div class="result">
        Total: R$ {{ total.toFixed(2) }}
      </div>

      <div class="result">
        Gorjeta: R$ {{ tipValue.toFixed(2) }}
      </div>

      <div class="result highlight">
        Por pessoa: R$ {{ perPerson.toFixed(2) }}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  calculated: Boolean,
  total: Number,
  tipValue: Number,
  perPerson: Number
})
</script>