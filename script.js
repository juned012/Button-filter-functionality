let foodData = [
  {
    title: "Margherita Pizza",
    description: "Classic pizza with fresh mozzarella, tomatoes, and basil.",
    price: 12.99,
    category: "Pizza",
    image:
      "https://img.freepik.com/premium-photo/fresh-guacamole-with-diced-onions-lime_1243330-10099.jpg?ga=GA1.1.1241278629.1725940971&semt=ais_hybrid",
    inStock: true,
    rating: 4.5,
  },
  {
    title: "Caesar Salad",
    description:
      "Crisp romaine lettuce with Caesar dressing, croutons, and Parmesan.",
    price: 9.99,
    category: "Salad",
    image:
      "https://img.freepik.com/free-photo/side-view-caesar-salad-with-chicken-parmesan-cheese-white-bowl-wooden-board_140725-11875.jpg?ga=GA1.1.1241278629.1725940971&semt=ais_hybrid",
    inStock: true,
    rating: 4.2,
  },
  {
    title: "Spaghetti Carbonara",
    description: "Traditional pasta with eggs, cheese, pancetta, and pepper.",
    price: 14.99,
    category: "Pasta",
    image:
      "https://img.freepik.com/free-photo/bowl-spaghetti-with-green-leaf-top_1340-26760.jpg?ga=GA1.1.1241278629.1725940971&semt=ais_hybrid",
    inStock: false,
    rating: 4.7,
  },
  {
    title: "Vegetable Stir Fry",
    description:
      "Mixed vegetables stir-fried in a savory sauce, served with rice.",
    price: 11.49,
    category: "Vegetarian",
    image:
      "https://img.freepik.com/premium-photo/pan-colorful-peppers-peppers-with-pot-peppers_1194832-27921.jpg?ga=GA1.1.1241278629.1725940971&semt=ais_hybrid",
    inStock: true,
    rating: 4.3,
  },
  {
    title: "Chocolate Cake",
    description: "Rich and moist chocolate cake layered with creamy frosting.",
    price: 6.99,
    category: "Dessert",
    image:
      "https://img.freepik.com/free-photo/close-up-chocolate-cake_23-2148604534.jpg?ga=GA1.1.1241278629.1725940971&semt=ais_hybrid",
    inStock: true,
    rating: 4.8,
  },
  {
    title: "Sushi Platter",
    description: "Assorted sushi rolls including tuna, salmon, and avocado.",
    price: 19.99,
    category: "Sushi",
    image:
      "https://img.freepik.com/free-photo/assorted-sushi-platter_1147-453.jpg?ga=GA1.1.1241278629.1725940971&semt=ais_hybrid",
    inStock: false,
    rating: 4.9,
  },
];

const cardContainer = document.getElementById("card-container");

foodData.forEach((card) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add("card");
  cardElement.innerHTML = `
    <img src="${card.image}" alt="${card.title}">
    <h3>${card.title}</h3>
    <p>${card.description}</p>
    <p><strong>Price:</strong> $${card.price.toFixed(2)}</p>
    <p><strong>Rating:</strong> ${card.rating} ⭐</p>
    <p><strong>${card.inStock ? "In Stock" : "Out of Stock"}</strong></p>
  `;
  cardContainer.appendChild(cardElement);
});
