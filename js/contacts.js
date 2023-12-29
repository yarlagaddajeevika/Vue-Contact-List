<!-- src/components/ContactList.vue -->
<template>
  <div>
    <h2>Contact List</h2>
    <ul>
      <li v-for="contact in contacts" :key="contact.id">
        {{ contact.name }} - {{ contact.phone }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        { id: 1, name: "John Doe", phone: "123-456-7890" },
        { id: 2, name: "Jane Doe", phone: "987-654-3210" },
        // Add more contacts as needed
      ],
    };
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
