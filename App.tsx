import { SafeAreaView } from "react-native-safe-area-context";
import { Router } from "./src/router/Router";
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Router></Router>
    </SafeAreaView>
  );
}
