<script setup>
import NavMenu from "@/components/NavMenu.vue";
import {onMounted, ref} from "vue";
import {supabase} from "@/lib/supabaseClient";

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
  <NavMenu />
  <div class="chat">
    <div class="post rounded-2" v-for="country in countries" :key="country.id">{{ country.name }}</div>
  </div>
</template>

<style>
.chat {
  margin: 1rem;
}

.post {
  width: 100%;
  padding: 1rem;
  margin-bottom: 0.3rem;
  background-color: #466617;
  color: #FFFFFF;
}
</style>