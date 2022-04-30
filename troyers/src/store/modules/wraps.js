
const state = () => ({
    // Wraps

    wrapPrice: "6.49",

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

    // Out of Stock Messages
    outofWrapsMessage: "Sorry, we're currently out of wraps.",
})

export default {
    namespaced: true,
    state,
  };
