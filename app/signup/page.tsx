import React from "react";
import { ColorModeProvider } from "../../components/ui/color-mode";

const SignUpPage = () => {
  return (
    <ColorModeProvider forcedTheme="dark">
      <div>SignUpPage</div>
    </ColorModeProvider>
  );
};

export default SignUpPage;
