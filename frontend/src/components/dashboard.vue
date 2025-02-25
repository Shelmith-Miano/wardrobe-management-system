<template>
  <div class="products-container">
    <h1>Dashboard</h1>

    <div class="overview">
      
      <div class="overview-item">
        <i class="fas fa-tshirt"></i> Total Items: {{ products.length }}
      </div>

     
      <div class="overview-item">
        <i class="fas fa-chart-pie"></i> Category Distribution:
        <div class="category-chart">
          <p></p>
        </div>
      </div>

    
      <div class="overview-item">
        <i class="fas fa-plus"></i> Recent Additions:
        <div class="recent-additions">
          <div v-for="product in recentProducts" :key="product.id" class="recent-item">
            <img :src="product.image" :alt="product.name" class="recent-image" />
          </div>
        </div>
      </div>
    </div>

    
    <div class="filters">
      <input type="text" v-model="search" placeholder="Search clothes..." />
      <select v-model="selectedCategory">
        <option value="">All Categories</option>
        <option v-for="category in uniqueCategories" :key="category" :value="category">{{ category }}</option>
      </select>
      <select v-model="selectedSize">
        <option value="">All Sizes</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>
    </div>

   
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
const selectedSize = ref('');

const products = ref([
  { id: 1, name: 'Casual T-Shirt', category: 'T-Shirts', price: 250, size: 'M', image: '/dress1.jpeg' },
  { id: 2, name: 'Old Money Outfit', category: 'Jeans', price: 1500, size: 'L', image: '/dress1.jpeg' },
  { id: 3, name: 'Floral Dress', category: 'Dresses', price: 2000, size: 'S', image: '/dress1.jpeg' },
  { id: 3, name: 'Floral Dress', category: 'Dresses', price: 2000, size: 'S', image: '/dress1.jpeg' },
  { id: 3, name: 'Floral Dress', category: 'Dresses', price: 2000, size: 'S', image: '/dress1.jpeg' },
  { id: 3, name: 'Floral Dress', category: 'Dresses', price: 2000, size: 'S', image: '/dress1.jpeg' },
  { id: 3, name: 'Floral Dress', category: 'Dresses', price: 2000, size: 'S', image: '/dress1.jpeg' },
  { id: 3, name: 'Floral Dress', category: 'Dresses', price: 2000, size: 'S', image: '/dress1.jpeg' }
]);

const recentProducts = computed(() => {
  return products.value.slice(0, 3); 
});

const uniqueCategories = computed(() => {
  return [...new Set(products.value.map(product => product.category))];
});

const filteredProducts = computed(() => {
  return products.value.filter(p =>
    (p.name.toLowerCase().includes(search.value.toLowerCase()) || search.value === '') &&
    (p.category === selectedCategory.value || selectedCategory.value === '') &&
    (p.size === selectedSize.value || selectedSize.value === '')
  );
});

const viewProduct = (product) => {
  alert(`Viewing: ${product.name}`);
};
</script>

<style scoped>
.products-container {
  padding: 20px;
  margin-left: 250px;
}

h1 {
  margin-bottom: 20px;
}

.overview {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
}

.overview-item {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  width: 30%;
  text-align: center;
}

.category-chart {
  padding: 10px;
  background: #e0e0e0;
  border-radius: 8px;
  margin-top: 10px;
}

.recent-additions {
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
}

.recent-item {
  width: 80px;
  height: 80px;
  overflow: hidden;
  border-radius: 8px;
}

.recent-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.filters {
  display: flex;
  gap: 10px;
  margin-bottom: 30px;
}

.filters input, .filters select {
  padding: 8px;
  font-size: 16px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
}

.product-card {
  padding: 15px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background: #fff;
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
  background: rgb(38, 105, 105);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
}
</style>
