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
  <NavMenu title="채팅" />
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
  margin-bottom: 0.7rem;
  background-color: antiquewhite;
}
</style>