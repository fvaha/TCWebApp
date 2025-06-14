// src/pages/tos.tsx

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 transition-colors">
      {/* Header */}
      <header className="bg-neutral-900 dark:bg-neutral-950 border-b-2 border-gold py-8 text-center shadow-sm">
        <h1 className="text-3xl md:text-4xl font-bold text-gold tracking-tight">
          TerraCrypt – Terms of Service
        </h1>
      </header>

      {/* Content */}
      <div className="container max-w-3xl mx-auto py-12 px-6 md:px-10">
        <p className="text-sm text-neutral-400 mb-8">
          <strong>Effective date:</strong> April 9, 2025
        </p>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gold mt-8 mb-3">
            1. Simple and Secure
          </h2>
          <p>
            TerraCrypt was built for people who care about privacy. All messages
            you send and receive through TerraCrypt are end-to-end encrypted
            using our TerraCrypt encryption engine.
          </p>
          <p>
            We do not — and will never — store your messages on our servers.
            Your data lives only on your device. Not ours.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gold mt-8 mb-3">
            2. What We Collect
          </h2>
          <p>
            The only thing we collect is your email. That's it. We use it to
            create your account and let you sign in. We don’t store names,
            message content, contacts, or metadata.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gold mt-8 mb-3">
            3. What Stays With You
          </h2>
          <p>
            All your encrypted messages stay on your device. Even if we wanted
            to, we couldn’t read them. We don’t have access.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gold mt-8 mb-3">
            4. What We’re Not Responsible For
          </h2>
          <p>
            Once something is on your screen, it’s your responsibility. If you
            take a screenshot, forward a message, or copy and paste a
            conversation — that’s on you.
          </p>
          <p>
            We cannot be held responsible for how you use TerraCrypt, or who you
            share your content with. We guarantee nothing leaks from our side,
            but we can’t protect what you manually share.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gold mt-8 mb-3">
            5. Availability & Changes
          </h2>
          <p>
            We might update the app from time to time, improve security, fix
            bugs, or add new features. If something breaks or goes offline
            temporarily, we’re not liable for any inconvenience or damage.
          </p>
          <p>
            We reserve the right to update these Terms of Service. If we do,
            we’ll post the new version on this page. It’s your responsibility to
            review them occasionally.
          </p>
        </section>

        <section>
          <h2 className="text-xl md:text-2xl font-bold text-gold mt-8 mb-3">
            6. Contact
          </h2>
          <p>
            If you have any questions, you can reach us at{" "}
            <a
              href="mailto:support@terracrypt.cc"
              className="text-gold underline hover:text-yellow-400 transition"
            >
              support@terracrypt.cc
            </a>
            .
          </p>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-gold bg-neutral-900 dark:bg-neutral-950 text-neutral-500 text-sm">
        &copy; 2025 TerraCrypt. Private. Encrypted. Yours.
      </footer>
    </main>
  );
}
