<template>
  <div class="app">
    <h1 class="title">Calculadora de Gorjeta</h1>

    <div class="layout">
      <TipForm
        :bill="bill"
        :tip="tip"
        :people="people"
        :error="error"
        @update:bill="bill = $event"
        @update:tip="tip = $event"
        @update:people="people = $event"
        @calculate="calculate"
      />

      <TipResult
        :calculated="calculated"
        :total="total"
        :tipValue="tipValue"
        :perPerson="perPerson"
      />
    </div>
  </div>
</template>

<script setup>
import TipForm from "./components/TipForm.vue"
import TipResult from "./components/TipResult.vue"
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
  calculate
} = useTipCalculator()
</script>