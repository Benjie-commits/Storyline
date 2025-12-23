declare module "react-google-recaptcha" {
  import * as React from "react";

  interface ReCAPTCHAProps {
    sitekey: string;
    onChange?: (token: string | null) => void;
    onExpired?: () => void;
    theme?: "light" | "dark";
    size?: "compact" | "normal" | "invisible";
    tabindex?: number;
  }

  const ReCAPTCHA: React.FC<ReCAPTCHAProps>;
  export default ReCAPTCHA;
}
