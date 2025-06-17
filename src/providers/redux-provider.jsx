"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "@/store";
import NoSSR from "@/components/ui/no-ssr";

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={store}>
      <NoSSR fallback={children}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </NoSSR>
    </Provider>
  );
};

export default ReduxProvider;
