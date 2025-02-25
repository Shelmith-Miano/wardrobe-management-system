<template>
    <div class="products-container">
      <h1>Clothing Collection</h1>
  
      <!-- Filters -->
      <div class="filters">
        <input type="text" v-model="search" placeholder="Search clothes..." />
        <select v-model="selectedCategory">
          <option value="">All Categories</option>
          <option value="T-Shirts">T-Shirts</option>
          <option value="Dresses">Dresses</option>
          <option value="Jeans">Jeans</option>
        </select>
      </div>
  
      <!-- Product Grid -->
      <div class="product-grid">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.category }}</p>
          <p class="price">Ksh{{ product.price }}</p>
          <button @click="viewProduct(product)">View</button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const search = ref('');
  const selectedCategory = ref('');
  
  const products = ref([
    { id: 1, name: 'Casual T-Shirt', category: 'T-Shirts', price: 250, image: '/shirt.jpeg' },
    { id: 2, name: 'Old Money Outfit', category: 'Jeans', price: 1500, image: '/oldmoney.jpeg' },
    { id: 3, name: 'Floral Dress', category: 'Dresses', price: 2000, image: 'dress1.jpeg' }
  ]);
  
  const filteredProducts = computed(() => {
    return products.value.filter(p =>
      (p.name.toLowerCase().includes(search.value.toLowerCase()) || search.value === '') &&
      (p.category === selectedCategory.value || selectedCategory.value === '')
    );
  });
  
  const viewProduct = (product) => {
    alert(`Viewing: ${product.name}`);
  };
  </script>
  
  <style scoped>
  .products-container {
    padding: 20px;
    margin-left: 250px; /* Offset for sidebar */
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  /* Filters */
  .filters {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .filters input, .filters select {
    padding: 8px;
    font-size: 16px;
  }
  
  /* Product Grid */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
  }
  
  .product-card {
    padding: 0px;
    border-radius: 8px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .product-card img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .price {
    font-weight: bold;
    color: #1e293b;
  }
  
  button {
    background:rgb(38, 105, 105);
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>
  