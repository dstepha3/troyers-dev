import { createStore } from "vuex";

export default createStore({
  state: {
    // Pricing:
    subPrice: "5.49",
    wrapPrice: "6.49",
    saladPrice: "5.49",
    extraMeatPrice: "1.00",

    // Toppings & Dressings:
    allToppings: "Lettuce, Tomatoes, Onions, Banana Peppers, Jalapeño Peppers, Pickles, Hard Boiled Eggs, Ketchup, Mustard, Mayo, Honey Mustard, Horse Radish Sauce",
    allDressings: "Ranch, Italian, Homemade BBQ, Homemade Poppy Seed, Homemade Sweet & Sour, French",
    saladDressings: "Ranch, Italian, French, Honey Mustard",
    homemadeDressings: "BBQ, Poppy Seed, Sweet & Sour",

    // Sandwiches
    subs: [
      {
        title: "Troyer's Special",
        toppings: "Turkey Breast, Ham, Lacy Baby Swiss Cheese. Choice of Dressing & toppings." 
      }, 
      {
        title: "Italian",
        toppings: "Hard Salami, Pepperoni, Ham, Provolone Cheese, Italian Dressing & Choice of toppings." 
      }, 
      {
        title: "Ham",
        toppings: "Ham, Swiss Cheese, Choice of Dressing & Toppings." 
      }, 
      {
        title: "Fried Chicken",
        toppings: "Fried Chicken Breast, Havarti Cheese, Homemade BBQ Dressing & Choice of toppings." 
      }, 
      {
        title: "Trail & Swiss",
        toppings: "Trail Bologna, Swiss Cheese, Choice of Dressing & toppings." 
      }, 
      {
        title: "Roast Beef",
        toppings: "Roast Beef, Swiss Cheese, Homemade BBQ Dressing & Choice of toppings." 
      }, 
      {
        title: "Turkey Bacon Ranch",
        toppings: "Turkey Breast, Bacon, Marble Cheese, Ranch Dressing & Choice of toppings." 
      }, 
      {
        title: "Ham Salad",
        toppings: "" 
      }, 
      {
        title: "Chicken Salad",
        toppings: "" 
      }, 
    ],

    // Wraps
    wraps: [
      {
        title: "Troyer's Special",
        toppings: "Turkey Breast, Ham, Lacy Baby Swiss Cheese. Choice of Dressing & toppings." 
      }, 
      {
        title: "Italian",
        toppings: "Hard Salami, Pepperoni, Ham, Provolone Cheese, Italian Dressing & Choice of toppings." 
      }, 
      {
        title: "Ham",
        toppings: "Ham, Swiss Cheese, Choice of Dressing & Toppings." 
      }, 
      {
        title: "Fried Chicken",
        toppings: "Fried Chicken Breast, Havarti Cheese, Homemade BBQ Dressing & Choice of toppings." 
      }, 
      {
        title: "Trail & Swiss Wrap",
        toppings: "Trail Bologna, Swiss Cheese, Choice of Dressing & toppings." 
      }, 
      {
        title: "Roast Beef",
        toppings: "Roast Beef, Swiss Cheese, Homemade BBQ Dressing & Choice of toppings." 
      }, 
      {
        title: "Turkey Bacon Ranch",
        toppings: "Turkey Breast, Bacon, Marble Cheese, Ranch Dressing & Choice of toppings." 
      }, 
    ],

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
    outofSubsMessage: "Sorry, we're currently out of sandwiches.",
    outofWrapsMessage: "Sorry, we're currently out of wraps.",
    outofSaladMessage: "Sorry, we're currently out of salads.",
  },
  // mutations: {
  //   togglePagePermission(state){
  //       state.pageProtectedPassed = !state.pageProtectedPassed;
  //       state.toastMode = 'success';
  //       state.toastMessage = 'Access Approved!';
  //   },
  //   toggleAdminPermission(state){
  //       state.adminAuthPassed = !state.adminAuthPassed;
  //       state.toastMode = 'fail';
  //       state.toastMessage = 'Access Denied.';
  //   },
  //   logout(state){
  //       state.adminAuthPassed = false;
  //       state.toastMode = 'primary';
  //       state.toastMessage = 'Goodbye.';
  //   },
  // }
});