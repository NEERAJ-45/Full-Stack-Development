import tkinter as tk
from tkinter import messagebox

# Define available pizzas, toppings, and their prices
available_pizzas = ["Margherita", "Pepperoni", "Vegetarian", "Hawaiian", "BBQ Chicken"]
available_toppings = ["Mushrooms", "Peppers", "Onions", "Olives", "Bacon", "Sausage"]
pizza_prices = {
    "Margherita": 8.99,
    "Pepperoni": 10.99,
    "Vegetarian": 9.99,
    "Hawaiian": 11.99,
    "BBQ Chicken": 12.99,
}
topping_prices = {
    "Mushrooms": 1.5,
    "Peppers": 1.0,
    "Onions": 0.75,
    "Olives": 1.25,
    "Bacon": 2.0,
    "Sausage": 1.75,
}


class PizzaOrderApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Pizza Delivery App")
        self.root.geometry("400x300")

        # Create widgets
        self.label = tk.Label(
            root, text="Welcome to Pizza Delivery!", font=("Helvetica", 16)
        )
        self.label.pack()

        self.pizza_var = tk.StringVar()
        self.pizza_var.set("Select Pizza")
        self.pizza_menu = tk.OptionMenu(root, self.pizza_var, *available_pizzas)
        self.pizza_menu.config(
            font=("Helvetica", 12), bg="white", width=20, bd=2, relief=tk.GROOVE
        )
        self.pizza_menu.pack(pady=5)

        self.topping_var = tk.StringVar()
        self.topping_var.set("Select Topping")
        self.topping_menu = tk.OptionMenu(root, self.topping_var, *available_toppings)
        self.topping_menu.config(
            font=("Helvetica", 12), bg="white", width=20, bd=2, relief=tk.GROOVE
        )
        self.topping_menu.pack(pady=5)

        self.order_button = tk.Button(
            root,
            text="Place Order",
            command=self.place_order,
            bg="#4CAF50",
            fg="white",
            font=("Helvetica", 14),
            bd=2,
            relief=tk.GROOVE,
        )
        self.order_button.pack(pady=10)

    def place_order(self):
        pizza = self.pizza_var.get()
        topping = self.topping_var.get()

        if pizza == "Select Pizza" or topping == "Select Topping":
            messagebox.showerror("Error", "Please select a pizza and topping.")
        else:
            # Calculate total price
            total_price = pizza_prices[pizza] + topping_prices[topping]
            messagebox.showinfo(
                "Order Placed",
                f"Your {pizza} pizza with {topping} is on its way!\nTotal: ${total_price:.2f}",
            )


if __name__ == "__main__":
    root = tk.Tk()
    app = PizzaOrderApp(root)
    root.mainloop()
