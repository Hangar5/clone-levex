import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section with Featured Post */}
      <section
        className="relative py-16 md:py-24"
        style={{
          backgroundImage: "url('https://ext.same-assets.com/2429830115/1129011260.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex items-center">
              <div className="max-w-lg">
                <div className="bg-[#5ea6c1] text-white text-xs px-2 py-1 inline-block rounded mb-2">NEWS</div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Evony Community Demands Changes: Coin Strike Support Rallies</h1>
                <p className="text-zinc-300 mb-4">August 28, 2024</p>
                <Link href="/evony-community-demands-changes" className="theria-button inline-block">
                  Read More
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-zinc-900 p-6 rounded-lg">
                <Link href="/evony-community-demands-changes" className="block">
                  <div className="relative h-56 w-full mb-4 rounded-md overflow-hidden">
                    <Image
                      src="https://ext.same-assets.com/2651798395/1718134957.webp"
                      alt="Evony Community Demands Changes"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold mb-2">Evony Community Demands Changes: Coin Strike Support Rallies</h2>
                </Link>
                <Link href="/save-your-battery-save-the-planet" className="block mt-6">
                  <div className="relative h-56 w-full mb-4 rounded-md overflow-hidden">
                    <Image
                      src="https://ext.same-assets.com/3383487972/1558878808.webp"
                      alt="Save your Battery, Save the Planet"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-bold mb-2">Save your Battery, Save the Planet</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Wiki's Section */}
      <section className="py-12 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Popular Wiki's</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Evony */}
            <div className="card-game">
              <Link href="/evony-wiki">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://ext.same-assets.com/1153484638/679329478.webp"
                    alt="Evony Icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">Evony</h3>
                </div>
              </Link>
              <div className="px-4 pb-4">
                <Button className="theria-button w-full">EXPLORE WIKI</Button>
              </div>
            </div>

            {/* Last War Survival */}
            <div className="card-game">
              <Link href="/last-war-survival-wiki">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://ext.same-assets.com/2296069704/526909342.webp"
                    alt="Last War Survival Icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">Last War Survival</h3>
                </div>
              </Link>
              <div className="px-4 pb-4">
                <Button className="theria-button w-full">EXPLORE WIKI</Button>
              </div>
            </div>

            {/* Age of Empires Mobile */}
            <div className="card-game">
              <Link href="/age-of-empires-mobile-wiki">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://ext.same-assets.com/554395028/1610913059.webp"
                    alt="Age of Empires Mobile Icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">Age of Empires Mobile</h3>
                </div>
              </Link>
              <div className="px-4 pb-4">
                <Button className="theria-button w-full">EXPLORE WIKI</Button>
              </div>
            </div>

            {/* Legend of Mushroom */}
            <div className="card-game">
              <Link href="/legend-of-mushroom-wiki">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://ext.same-assets.com/3903794018/4061302381.webp"
                    alt="Legend of Mushroom Icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">Legend of Mushroom</h3>
                </div>
              </Link>
              <div className="px-4 pb-4">
                <Button className="theria-button w-full">EXPLORE WIKI</Button>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/all-game-wikis">
              <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">SEE ALL WIKI'S</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Guides Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Recent Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Guide 1 */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <Link href="/guide/monopoly-go-vine-dash">
                <div className="relative h-40 w-full">
                  <Image
                    src="https://ext.same-assets.com/4110745635/768518396.webp"
                    alt="Monopoly Go Vine Dash"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">Monopoly Go Vine Dash</h3>
                  <p className="text-zinc-400 text-sm mb-3">March 14, 2025</p>
                  <Button variant="link" className="text-[#5ea6c1] p-0 h-auto font-medium">
                    Read More
                  </Button>
                </div>
              </Link>
            </div>

            {/* Guide 2 */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <Link href="/guide/monopoly-go-golden-city">
                <div className="relative h-40 w-full">
                  <Image
                    src="https://ext.same-assets.com/3804478268/3901368800.webp"
                    alt="Monopoly Go Golden City"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">Monopoly Go Golden City</h3>
                  <p className="text-zinc-400 text-sm mb-3">March 14, 2025</p>
                  <Button variant="link" className="text-[#5ea6c1] p-0 h-auto font-medium">
                    Read More
                  </Button>
                </div>
              </Link>
            </div>

            {/* Guide 3 */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <Link href="/guide/wuthering-waves-comet-flare">
                <div className="relative h-40 w-full">
                  <Image
                    src="https://ext.same-assets.com/3173898965/2148648060.webp"
                    alt="Wuthering Waves Comet Flare Guide"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">Wuthering Waves Comet Flare Guide</h3>
                  <p className="text-zinc-400 text-sm mb-3">March 14, 2025</p>
                  <Button variant="link" className="text-[#5ea6c1] p-0 h-auto font-medium">
                    Read More
                  </Button>
                </div>
              </Link>
            </div>

            {/* Guide 4 */}
            <div className="bg-zinc-900 rounded-lg overflow-hidden">
              <Link href="/guide/clash-royale-4-card-showdown-event">
                <div className="relative h-40 w-full">
                  <Image
                    src="https://ext.same-assets.com/785424341/1170678050.webp"
                    alt="Clash Royale 4 Card Showdown Event"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg mb-2">Clash Royale 4 Card Showdown Event</h3>
                  <p className="text-zinc-400 text-sm mb-3">March 14, 2025</p>
                  <Button variant="link" className="text-[#5ea6c1] p-0 h-auto font-medium">
                    Read More
                  </Button>
                </div>
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">LOAD MORE</Button>
          </div>
        </div>
      </section>

      {/* Follow Us Section */}
      <section className="py-8 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Follow us</h2>
          <div className="flex space-x-4 mb-4">
            <Link href="https://discord.gg/theriagames" className="text-zinc-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </Link>
            <Link href="https://www.youtube.com/@officialtheriagames" className="text-zinc-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              Youtube
            </Link>
            <Link href="https://www.reddit.com/user/OfficialTheriaGames/" className="text-zinc-400 hover:text-white" target="_blank" rel="noopener noreferrer">
              Reddit
            </Link>
          </div>
        </div>
      </section>

      {/* Updates Section */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">UPDATES</h2>
          <div className="space-y-4">
            {/* Update 1 */}
            <div className="flex items-start">
              <div className="bg-[#5ea6c1] text-white w-8 h-8 flex items-center justify-center rounded-full mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <Link href="/capybara-go-version-1-5-6-announcement" className="text-lg font-medium hover:text-[#5ea6c1]">
                  Capybara Go Version 1.5.6 Announcement
                </Link>
                <p className="text-zinc-400 text-sm">March 10, 2025</p>
              </div>
            </div>

            {/* Update 2 */}
            <div className="flex items-start">
              <div className="bg-[#5ea6c1] text-white w-8 h-8 flex items-center justify-center rounded-full mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <Link href="/clash-royale-march-balance-changes" className="text-lg font-medium hover:text-[#5ea6c1]">
                  Clash Royale March Balance Changes
                </Link>
                <p className="text-zinc-400 text-sm">March 4, 2025</p>
              </div>
            </div>

            {/* Update 3 */}
            <div className="flex items-start">
              <div className="bg-[#5ea6c1] text-white w-8 h-8 flex items-center justify-center rounded-full mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <Link href="/version-3-1-update-and-maintenance-notice" className="text-lg font-medium hover:text-[#5ea6c1]">
                  Honkai Star Rail Version 3.1 Update and Maintenance Notice
                </Link>
                <p className="text-zinc-400 text-sm">February 26, 2025</p>
              </div>
            </div>

            {/* Update 4 */}
            <div className="flex items-start">
              <div className="bg-[#5ea6c1] text-white w-8 h-8 flex items-center justify-center rounded-full mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <Link href="/capybara-go-version-1-5-5-announcement" className="text-lg font-medium hover:text-[#5ea6c1]">
                  Capybara Go Version 1.5.5 Announcement
                </Link>
                <p className="text-zinc-400 text-sm">February 24, 2025</p>
              </div>
            </div>

            {/* Update 5 */}
            <div className="flex items-start">
              <div className="bg-[#5ea6c1] text-white w-8 h-8 flex items-center justify-center rounded-full mr-4 flex-shrink-0">
                5
              </div>
              <div>
                <Link href="/evony-4-93-patch-notes" className="text-lg font-medium hover:text-[#5ea6c1]">
                  Evony 4.93 Patch Notes
                </Link>
                <p className="text-zinc-400 text-sm">February 21, 2025</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Theria Plus Section */}
      <section className="py-8 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">THERIA PLUS</h2>
          <p className="text-zinc-300 mb-4">
            Join Theria Plus for an ad-free experience, exclusive Discord role, and early access to new tools & calculators!
          </p>
          <Link href="/register">
            <Button className="theria-button">SIGN UP</Button>
          </Link>
        </div>
      </section>

      {/* About Theria Section */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">ABOUT THERIA</h2>
          <p className="text-zinc-300 mb-6">
            Established in 2023, Theria is a centralized platform for mobile gamers. We focus on creating high quality and in-depth guides, as well as a collection of tools and calculators for mobile games to enhance your gaming experience.
          </p>
          <div className="text-center mb-2">
            <h3 className="text-xl font-bold mb-2">Guides & Calculators Available</h3>
            <p className="text-4xl font-bold mb-1">0 <span className="text-2xl">+</span></p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-8 bg-zinc-950">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">Newsletter</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Email Address:"
              className="bg-zinc-900 border border-zinc-700 rounded px-4 py-2 text-white w-full md:w-64"
            />
            <Button className="theria-button">SUBSCRIBE</Button>
          </div>
        </div>
      </section>

      {/* New Wiki's Section */}
      <section className="py-8 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="section-heading">New Wiki's</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* Lords Mobile */}
            <div className="card-game">
              <Link href="/lords-mobile-wiki">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://ext.same-assets.com/613180694/1659974276.png"
                    alt="Lords Mobile Icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">Lords Mobile</h3>
                </div>
              </Link>
              <div className="px-4 pb-4">
                <Button className="theria-button w-full">EXPLORE WIKI</Button>
              </div>
            </div>

            {/* Clash of Clans */}
            <div className="card-game">
              <Link href="/clash-of-clans-wiki">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://ext.same-assets.com/2922795617/3943112883.png"
                    alt="Clash of Clans Icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">Clash of Clans</h3>
                </div>
              </Link>
              <div className="px-4 pb-4">
                <Button className="theria-button w-full">EXPLORE WIKI</Button>
              </div>
            </div>

            {/* Vikings: War of Clans */}
            <div className="card-game">
              <Link href="/vikings-war-of-clans-wiki">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://ext.same-assets.com/1712918851/1867667123.png"
                    alt="Vikings: War of Clans Icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">Vikings: War of Clans</h3>
                </div>
              </Link>
              <div className="px-4 pb-4">
                <Button className="theria-button w-full">EXPLORE WIKI</Button>
              </div>
            </div>

            {/* Marvel Strike Force */}
            <div className="card-game">
              <Link href="/marvel-strike-force-wiki">
                <div className="relative h-48 w-full">
                  <Image
                    src="https://ext.same-assets.com/394409933/3550949521.png"
                    alt="Marvel Strike Force Icon"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg">Marvel Strike Force</h3>
                </div>
              </Link>
              <div className="px-4 pb-4">
                <Button className="theria-button w-full">EXPLORE WIKI</Button>
              </div>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link href="/all-game-wikis">
              <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">SEE ALL WIKI'S</Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
