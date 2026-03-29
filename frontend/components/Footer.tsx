export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      label: "WhatsApp",
      href: "https://wa.me/2348XXXXXXXXX", // replace with your number e.g. 2348012345678
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      color: "#25D366",
    },
    {
      label: "Email",
      href: "mailto:your@email.com", // replace with your email
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      color: "#EA4335",
    },
    {
      label: "Twitter / X",
      href: "https://twitter.com/yourhandle", // replace with your handle
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: "#1DA1F2",
    },
    {
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile", // replace with your profile URL
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: "#0A66C2",
    },
    {
      label: "TikTok",
      href: "https://tiktok.com/@yourhandle", // replace with your handle
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/>
        </svg>
      ),
      color: "#000000",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10">

        {/* Top section */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          {/* Brand */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2">📰 Newsstand</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Your digital newsstand. All the news that matters — from Nigeria, India, the UK, the US and beyond — updated every 30 minutes.
            </p>
          </div>

          {/* Categories */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-3">Categories</h3>
            <div className="grid grid-cols-2 gap-1">
              {["Nigeria", "India", "UK", "USA", "Finance", "Politics", "Sports", "Business", "Technology", "Entertainment", "Health", "World"].map((cat) => (
                
                  key={cat}
                  href={`/${cat.toLowerCase()}`}
                  className="text-sm text-gray-400 hover:text-white transition-colors py-0.5"
                >
                  {cat}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-widest mb-3">Get in Touch</h3>
            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group"
                >
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-opacity group-hover:opacity-100 opacity-80"
                    style={{ backgroundColor: social.color + "22", color: social.color }}
                  >
                    {social.icon}
                  </span>
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            © {currentYear} Newsstand. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Updated every 30 minutes · Powered by RSS
          </p>
        </div>

      </div>
    </footer>
  );
}
