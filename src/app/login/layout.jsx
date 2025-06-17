export const metadata = {
  title: "Login - Course Marketplace",
  description:
    "Access your account to manage your dashboard, settings, and learning tools.",
  robots: "index, follow",
  keywords: [
    "Login",
    "Login Dashboard",
  ],
};

export default function LoginLayout({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}
