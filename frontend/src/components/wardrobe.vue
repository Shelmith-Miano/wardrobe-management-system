<template>
    <div class="wardrobe-container">
      <h1>
        <i class="fas fa-tshirt"></i> My Wardrobe / Clothing Items
      </h1>
  
      <!-- Add New Item Section -->
      <div class="add-item">
        <input v-model="newItem.name" placeholder="Enter clothing item name" />
        <input v-model="newItem.category" placeholder="Enter category (Tops, Shoes, etc.)" />
        <input v-model="newItem.price" type="number" placeholder="Price (Ksh)" />
        <button @click="addItem">Add Item</button>
      </div>
  
      <!-- Wardrobe Navigation -->
      <div class="wardrobe-nav">
        <button @click="filterCategory('')" :class="{ active: selectedCategory === '' }">
          <i class="fas fa-th-large"></i> All Items
        </button>
        <button @click="filterCategory('Tops')" :class="{ active: selectedCategory === 'Tops' }">
          <i class="fas fa-tshirt"></i> Tops
        </button>
        <button @click="filterCategory('Bottoms')" :class="{ active: selectedCategory === 'Bottoms' }">
          <i class="fas fa-user"></i> Bottoms
        </button>
        <button @click="filterCategory('Dresses')" :class="{ active: selectedCategory === 'Dresses' }">
          <i class="fas fa-female"></i> Dresses
        </button>
        <button @click="filterCategory('Shoes')" :class="{ active: selectedCategory === 'Shoes' }">
          <i class="fas fa-shoe-prints"></i> Shoes
        </button>
        <button @click="filterCategory('Accessories')" :class="{ active: selectedCategory === 'Accessories' }">
          <i class="fas fa-gem"></i> Accessories
        </button>
      </div>
  
      <!-- Product Grid -->
      <div class="product-grid">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card">
          <img :src="product.image" :alt="product.name" />
          <h3>{{ product.name }}</h3>
          <p>{{ product.category }}</p>
          <p class="price">Ksh{{ product.price }}</p>
          <div class="actions">
            <button @click="editProduct(product)"><i class="fas fa-edit"></i> Edit</button>
            <button @click="deleteProduct(product.id)"><i class="fas fa-trash"></i> Delete</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  
  const selectedCategory = ref('');
  const products = ref([
    { id: 1, name: 'Casual T-Shirt', category: 'Tops', price: 250, image: '/dress1.jpeg' },
    { id: 2, name: 'Old Money Outfit', category: 'Bottoms', price: 1500, image: '/dress1.jpeg' },
    { id: 3, name: 'Floral Dress', category: 'Dresses', price: 2000, image: '/heels.jpeg' },
    { id: 4, name: 'Sneakers', category: 'Shoes', price: 5000, image: '/shoes.jpeg' },
    { id: 5, name: 'Gold Necklace', category: 'Accessories', price: 800, image: '/heels.jpeg' },
    { id: 5, name: 'Jeans', category: 'Bottom', price: 800, image: '/jeans.jpeg' }
    
  ]);
  
  const newItem = ref({ name: '', category: '', price: '' });
  
  const filteredProducts = computed(() => {
    return selectedCategory.value
      ? products.value.filter(p => p.category === selectedCategory.value)
      : products.value;
  });
  
  const filterCategory = (category) => {
    selectedCategory.value = category;
  };
  
  const addItem = () => {
    if (!newItem.value.name || !newItem.value.category || !newItem.value.price) {
      alert('Please fill in all fields');
      return;
    }
  
    const newProduct = {
      id: products.value.length + 1,
      name: newItem.value.name,
      category: newItem.value.category,
      price: newItem.value.price,
      image: '/default.jpg'
    };
  
    products.value.push(newProduct);
    newItem.value = { name: '', category: '', price: '' }; // Reset input fields
  };
  
  const editProduct = (product) => {
    const updatedName = prompt('Edit item name:', product.name);
    const updatedCategory = prompt('Edit category:', product.category);
    const updatedPrice = prompt('Edit price (Ksh):', product.price);
  
    if (updatedName && updatedCategory && updatedPrice) {
      product.name = updatedName;
      product.category = updatedCategory;
      product.price = updatedPrice;
    }
  };
  
  const deleteProduct = (id) => {
    products.value = products.value.filter(p => p.id !== id);
    alert('Item deleted!');
  };
  </script>
  
  <style scoped>
  .wardrobe-container {
    padding: 20px;
  }
  
  h1 {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  /* Add New Item Section */
  .add-item {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;
  }
  
  .add-item input {
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .add-item button {
    padding: 8px 12px;
    background-color: #28a745;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  /* Wardrobe Navigation */
  .wardrobe-nav {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .wardrobe-nav button {
    background: #f4f4f4;
    border: none;
    padding: 10px 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .wardrobe-nav .active {
    background: rgb(38, 105, 105);
    color: white;
  }
  
  /* Product Grid */
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
  }
  
  .product-card {
    padding: 10px;
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
  
  .actions button {
    background: #d9534f;
    color: white;
    border: none;
    padding: 8px;
    margin: 5px;
    cursor: pointer;
  }
  
  .actions button:first-child {
    background: #5bc0de;
  }
  </style>
  