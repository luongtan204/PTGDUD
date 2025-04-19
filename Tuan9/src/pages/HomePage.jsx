import { Link } from "react-router-dom"

export default function HomePage() {
  const examples = [
    { id: 1, title: "Counter App", description: "Simple counter with increment and decrement", path: "/counter" },
    { id: 2, title: "Todo List", description: "Manage tasks with add, toggle, and remove actions", path: "/todo" },
    { id: 3, title: "Theme Toggle", description: "Switch between light and dark mode", path: "/theme" },
    { id: 4, title: "Shopping Cart", description: "Add items, update quantities, and calculate totals", path: "/cart" },
    { id: 5, title: "User Authentication", description: "Login, logout, and user profile management", path: "/auth" },
    {
      id: 6,
      title: "Async Data Fetching",
      description: "Fetch users from an API using createAsyncThunk",
      path: "/async",
    },
    {
      id: 7,
      title: "Advanced Counter",
      description: "Counter with reset and custom increment",
      path: "/advanced-counter",
    },
    {
      id: 8,
      title: "Calculator Form",
      description: "Simple BMI or tax calculator with form state",
      path: "/calculator",
    },
    { id: 9, title: "Event Management", description: "Create, edit, and delete events", path: "/events" },
    { id: 10, title: "Multiple Slices", description: "Combined slices in a single application", path: "/combined" },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Redux Toolkit Examples</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map((example) => (
          <Link to={example.path} key={example.id}>
            <div className="border rounded-lg p-6 h-full hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-xl font-semibold mb-2">{example.title}</h2>
              <p className="text-muted-foreground mb-4">{example.description}</p>
              <div className="text-sm text-muted-foreground">Example {example.id}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
