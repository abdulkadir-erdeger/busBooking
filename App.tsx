import { StripeProvider } from "@stripe/stripe-react-native";
import Router from "./src/Router";

export default function App() {
  return (
    <StripeProvider publishableKey="pk_test_51Lfk0lBKh2rUDIsL5kBZ36FfMLipojl2u22aOimJiprKd9ShzSKCeFefqsScKEnOL89zvl45nfABmew7Nl09c8ze00Fk1tZ7Rk">
      <Router />
    </StripeProvider>
  );
}
