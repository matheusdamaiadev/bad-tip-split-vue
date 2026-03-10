<template>
  <div class="app">
    <h1 class="title">Calculadora de Gorjeta</h1>

    <div class="layout">

      <div class="panel">
        <h2>Entradas</h2>

        <label>Valor da conta (R$)</label>
        <input type="number" v-model="bill" class="input"/>

        <label>Gorjeta (%)</label>
        <input type="number" v-model="tip" class="input"/>

        <label>Número de pessoas</label>
        <input type="number" v-model="people" class="input"/>

        <button class="primary-btn" @click="calculate">
          Calcular divisão
        </button>

        <div v-if="error" class="error">
          {{ error }}
        </div>
      </div>

      <div class="panel">
        <h2>Resultado</h2>

        <div v-if="!calculated" class="empty">
          Preencha os valores para calcular.
        </div>

        <div v-else>
          <div class="result">Total: R$ {{ total.toFixed(2) }}</div>
          <div class="result">Gorjeta: R$ {{ tipValue.toFixed(2) }}</div>
          <div class="result highlight">
            Por pessoa: R$ {{ perPerson.toFixed(2) }}
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>

import { useTipCalculator } from "./composables/useCalculator"

const {
  bill,
  tip,
  people,
  total,
  tipValue,
  perPerson,
  error,
  calculated,
  calculate,
  
} = useTipCalculator()

</script>