import { StripeProvider } from "@stripe/stripe-react-native";
import Router from "./src/Router";

export default function App() {
  return (
    <StripeProvider publishableKey="pk_live_51Lfk0lBKh2rUDIsLimK0bxCc66vj6QLVOMoler5pwsE9dYUxCQyvwa9wzuZPliCc4q3jjFI6iEjKuKIBVHXzPzwD00Kw41TSIB">
      <Router />
    </StripeProvider>
  );
}
