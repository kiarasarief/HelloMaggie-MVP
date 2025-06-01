import React, { useState } from "react";

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError("");

    // Basic validation
    if (!email || !password) {
      setFormError("Email dan password harus diisi");
      return;
    }

    // Demo form submit - would connect to actual auth system in production
    alert(
      `Form ${isLogin ? "login" : "register"} submitted with email: ${email}`
    );
  };

  return (
    <section
      id="auth"
      className="section bg-neutral-light/20 dark:bg-secondary"
    >
      <div className="container-custom">
        <div className="max-w-md mx-auto">
          <div className="bg-white dark:bg-secondary-light rounded-xl shadow-lg overflow-hidden">
            <div className="flex">
              <button
                className={`w-1/2 py-4 text-center font-semibold ${
                  isLogin
                    ? "bg-primary text-white"
                    : "bg-neutral-light/50 text-secondary dark:bg-secondary dark:text-white"
                }`}
                onClick={() => setIsLogin(true)}
              >
                Masuk
              </button>
              <button
                className={`w-1/2 py-4 text-center font-semibold ${
                  !isLogin
                    ? "bg-primary text-white"
                    : "bg-neutral-light/50 text-secondary dark:bg-secondary dark:text-white"
                }`}
                onClick={() => setIsLogin(false)}
              >
                Daftar
              </button>
            </div>

            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-center text-secondary dark:text-white">
                {isLogin ? "Masuk ke Akun Anda" : "Daftar Akun Baru"}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary-light dark:text-neutral-light mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                    placeholder="nama@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-secondary-light dark:text-neutral-light mb-1"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                    placeholder={
                      isLogin ? "Masukkan password" : "Buat password"
                    }
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label className="flex items-center">
                      <input
                        type="checkbox"
                        className="mr-2 h-4 w-4 accent-primary"
                      />
                      <span className="text-sm text-secondary-light dark:text-neutral-light">
                        Saya setuju dengan syarat dan ketentuan
                      </span>
                    </label>
                  </div>
                )}

                {formError && (
                  <p className="text-red-500 text-sm">{formError}</p>
                )}

                <button type="submit" className="w-full btn-primary py-3">
                  {isLogin ? "Masuk" : "Daftar"}
                </button>
              </form>

              {isLogin && (
                <p className="mt-4 text-sm text-center text-secondary-light dark:text-neutral-light">
                  <a href="#" className="text-primary hover:underline">
                    Lupa password?
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthForm;
