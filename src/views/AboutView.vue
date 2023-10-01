<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../lib/supabaseClient'
import NavMenu from "@/components/NavMenu.vue";

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <NavMenu title="소개" />
  <ul>
    <li v-for="country in countries" :key="country.id">{{ country.name }}</li>
  </ul>
</template>