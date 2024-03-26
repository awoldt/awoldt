import Nav from "./components/Nav";

export default function PrivacyPage() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Privacy</title>
        <meta name="description" content="Read our privacy policy" />
        <link rel="canonical" href="https://awoldt.dev/privacy" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="/styles/global.css" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </head>
      <body>
        <header>
          <Nav />
        </header>
        <main>
          <div class="container mt-5">
            <h1>Privacy Policy</h1>
            <p>Last updated on March 24th, 2024</p>

            <p>
              Thank you for visiting. We respect your privacy and are committed
              to protecting your personal information. This Privacy Policy
              outlines the types of information we collect when you use the Site
              and how we use and safeguard that information.
            </p>
            <p>
              <strong>
                We do not collect any personally identifiable information.
              </strong>
            </p>

            <p>
              We use Google AdSense on our site to serve advertisements. Google
              may use cookies to personalize ads based on your interests and
              other information collected through your use of the Site and other
              websites. You can learn more about how Google uses your data by
              visiting the{" "}
              <a
                href="https://policies.google.com/privacy?hl=en-US"
                title="View Google's privacy policy"
              >
                Google Privacy & Terms page.
              </a>
            </p>
            <p>
              If you prefer more control over how your data is used for
              personalized advertising, you have the opportunity to opt out of
              the use of cookies for personalized advertising by some of our
              third-party vendors. To do this, please visit{" "}
              <a href="https://optout.aboutads.info/?c=2&lang=EN">
                aboutads.info
              </a>{" "}
              where you can manage your preferences. This platform offers a
              straightforward way to decline personalized advertising from
              participating companies, should they offer this capability.
            </p>
            <p>
              We reserve the right to update or modify this Privacy Policy at
              any time. Any changes will be effective immediately upon posting
              the revised Privacy Policy on the Site. We encourage you to review
              this Privacy Policy periodically for any changes.
            </p>
            <p>
              By using the Site, you consent to the collection and use of your
              information as outlined in this Privacy Policy.
            </p>

            <div class="mt-5 mb-5">
              <a href="/">Return home</a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
