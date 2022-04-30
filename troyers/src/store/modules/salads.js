
const state = () => ({
    // Salads

    saladPrice: "5.49",

    salads: [
        {
          title: "BBQ Chicken",
          toppings: "Buffalo BBQ Chicken, Bacon Bits, Lettuce, Onions, Tomatoes, Shredded Cheddar Cheese, Homemade BBQ Dressing."
        },
        {
          title: "Chef",
          toppings: "Lettuce, Tomatoes, Onions, Croutons, Shredded Cheddar Cheese, Choice of Ham or Turkey & Dressing."
        },
        {
          title: "Strawberry Pecan (Seasonal)",
          toppings: "Lettuce, Onions, Roasted Pecans, Seseame Sticks, Strawberries, Shredded Mozzarella Cheese, Homemade Poppy Seed Dressing."
        },
        {
          title: "Cranberry Pecan",
          toppings: "Lettuce, Onions, Roasted Pecans, Seseame Sticks, Cranberries, Shredded Mozzarella Cheese, Homemade Poppy Seed Dressing."
        },
      ],

    // Out of Stock Messages
    outofSaladMessage: "Sorry, we're currently out of salads.",
})

export default {
    namespaced: true,
    state,
  };