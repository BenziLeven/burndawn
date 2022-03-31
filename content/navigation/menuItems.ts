import { MenuItem } from "~/types/navigation"

export const MENU_ITEMS: MenuItem[] = [
  { label: "Home", to: "/", iconName: "house" }
]

//
// export const MENU_ITEMS: MenuItem[] = [
//   { label: "Test1", to: "/test1", iconName: "house" },
//   { label: "Test2", to: "/test2", iconName: "house" },
//   {
//     label: "Test3",
//     iconName: "house",
//     children: [
//       { label: "Test3.1", to: "/test1", iconName: "house" },
//       {
//         label: "Test3.2",
//         iconName: "house",
//         children: [
//           { label: "Test3.2.1", to: "/test1", iconName: "house" },
//           { label: "Test3.2.2", to: "/test1", iconName: "house" }
//         ]
//       }
//     ]
//   }
// ]
