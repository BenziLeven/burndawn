type StringRoute = `/${string}`

export type MenuItem = {
  label: string,
  to?: StringRoute,
  children?: MenuItem[],
  iconName: string
}
