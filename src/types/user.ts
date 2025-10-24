export interface User {
  id: string;
  role: "creator" | "brand" | "admin";
  email: string;
}
