
const state = () => ({
  state: {
    // Misc Pricing:
    extraMeatPrice: "1.00",

    // Toppings & Dressings:
    allToppings: "Lettuce, Tomatoes, Onions, Banana Peppers, Jalapeño Peppers, Pickles, Hard Boiled Eggs, Ketchup, Mustard, Mayo, Honey Mustard, Horse Radish Sauce",
    allDressings: "Ranch, Italian, Homemade BBQ, Homemade Poppy Seed, Homemade Sweet & Sour, French",
    saladDressings: "Ranch, Italian, French, Honey Mustard",
    homemadeDressings: "BBQ, Poppy Seed, Sweet & Sour",
  },
})

export default {
    namespaced: true,
    state,
  };