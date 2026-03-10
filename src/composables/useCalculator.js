import { ref } from "vue"

export function useTipCalculator(){

  const bill = ref("")
  const tip = ref("")
  const people = ref("")

  const total = ref(0)
  const tipValue = ref(0)
  const perPerson = ref(0)

  const error = ref("")
  const calculated = ref(false)

  function calculate(){

    const billValue = Number(bill.value)
    const tipPercent = Number(tip.value)
    const peopleCount = Number(people.value)

    if(!billValue || !tipPercent || !peopleCount){
      error.value = "Preencha todos os campos."
      calculated.value = false
      return
    }

    error.value = ""

    tipValue.value = (billValue * tipPercent) / 100
    total.value = billValue + tipValue.value
    perPerson.value = total.value / peopleCount

    calculated.value = true
  }

  return {
    bill,
    tip,
    people,
    total,
    tipValue,
    perPerson,
    error,
    calculated,
    calculate
  }
}