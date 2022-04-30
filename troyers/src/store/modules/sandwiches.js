
const state = () => ({
    // Sandwiches

    subPrice: "5.49",

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

    // Out of Stock Messages
    outofSubsMessage: "Sorry, we're currently out of sandwiches.",
})

export default {
    namespaced: true,
    state,
  };