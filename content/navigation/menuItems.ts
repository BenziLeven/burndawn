import { MenuItem } from "~/types/navigation"

export const MENU_ITEMS: MenuItem[] = [
  { label: "Test1", to: "/test1" },
  { label: "Test2", to: "/test2" },
  {
    label: "Test3",
    to: "/test3",
    children: [
      { label: "Test3.1", to: "/test1" },
      {
        label: "Test3.2",
        to: "/test2",
        children: [
          { label: "Test3.2.1", to: "/test1" },
          { label: "Test3.2.2", to: "/test1" }
        ]
      }
    ]
  }
]
