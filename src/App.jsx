import React, { useState } from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Star, Play, Tv, Film, Trophy, Users, Clock, Shield, MessageCircle, Facebook, Phone } from 'lucide-react';
import ContactModal from './components/ContactModal';

// Import images
import heroBanner from './assets/hero_banner.png';
import tvShowsFeature from './assets/tv_shows_feature.png';
import moviesFeature from './assets/movies_feature.png';
import sportsFeature from './assets/sports_feature.png';

// Import logos
import beinSportsLogo from './assets/bein_sports_logo.png';
import sccLogo from './assets/scc_logo.png';
import netflixLogo from './assets/netflix_logo.jpg';
import hboMaxLogo from './assets/hbo_max_logo.png';
import amazonPrimeLogo from './assets/amazon_prime_logo.png';

// Import movie/series posters
import moviePoster1 from './assets/game_of_thrones_poster.jpg';
import moviePoster2 from './assets/cukur_poster.jpg';
import moviePoster3 from './assets/movie_poster_3.jpg';
import moviePoster4 from './assets/movie_poster_4.jpg';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen gradient-bg text-white">
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/30">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold glow-text">Jibreel IPTV</div>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-yellow-400 transition-colors">Home</a>
            <a href="#features" className="hover:text-yellow-400 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-yellow-400 transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>
          <Button onClick={handleContactClick} className="cta-button text-black font-semibold">
            Get Started
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={heroBanner} alt="Entertainment Content" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-4 text-center z-10 relative">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 glow-text">
            Jibreel IPTV
          </h1>
          <p className="text-xl md:text-2xl text-yellow-400 mb-6 font-semibold">
            أفضل خدمة بث تلفزيوني في الشرق الأوسط
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            استمتع بترفيه لا محدود مع جودة بث متميزة. احصل على آلاف القنوات والأفلام والمسلسلات من جميع أنحاء العالم.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold stats-number mb-2">7,000+</div>
              <div className="text-lg text-gray-300">Channels</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold stats-number mb-2">7,000+</div>
              <div className="text-lg text-gray-300">TV Series</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-6xl font-bold stats-number mb-2">18,000+</div>
              <div className="text-lg text-gray-300">Movies</div>
            </div>
          </div>

          <Button size="lg" onClick={handleContactClick} className="cta-button text-black font-semibold text-lg px-8 py-4">
            <Play className="mr-2 h-5 w-5" />
            Start Watching Now
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
            Premium Entertainment Experience
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* TV Shows */}
            <Card className="feature-card border-0 overflow-hidden">
              <div className="relative h-48">
                <img src={tvShowsFeature} alt="TV Shows" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                <Tv className="absolute top-4 right-4 h-8 w-8 text-yellow-400" />
              </div>
              <CardHeader>
                <CardTitle className="text-white text-xl">TV Shows</CardTitle>
                <CardDescription className="text-gray-300">
                  Binge-watch your favorite series from around the world
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Drama</Badge>
                  <Badge variant="secondary">Comedy</Badge>
                  <Badge variant="secondary">Action</Badge>
                  <Badge variant="secondary">Sci-Fi</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Movies */}
            <Card className="feature-card border-0 overflow-hidden">
              <div className="relative h-48">
                <img src={moviesFeature} alt="Movies" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                <Film className="absolute top-4 right-4 h-8 w-8 text-yellow-400" />
              </div>
              <CardHeader>
                <CardTitle className="text-white text-xl">Movies</CardTitle>
                <CardDescription className="text-gray-300">
                  Latest blockbusters and timeless classics in HD quality
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Blockbusters</Badge>
                  <Badge variant="secondary">Classics</Badge>
                  <Badge variant="secondary">International</Badge>
                  <Badge variant="secondary">4K</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Sports */}
            <Card className="feature-card border-0 overflow-hidden">
              <div className="relative h-48">
                <img src={sportsFeature} alt="Sports" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 to-transparent" />
                <Trophy className="absolute top-4 right-4 h-8 w-8 text-yellow-400" />
              </div>
              <CardHeader>
                <CardTitle className="text-white text-xl">Sports</CardTitle>
                <CardDescription className="text-gray-300">
                  Live sports coverage from major leagues worldwide
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Football</Badge>
                  <Badge variant="secondary">Basketball</Badge>
                  <Badge variant="secondary">Soccer</Badge>
                  <Badge variant="secondary">Live</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Additional Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center p-6">
              <Users className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Multi-Device</h3>
              <p className="text-gray-300 text-sm">Watch on any device, anywhere</p>
            </div>
            <div className="text-center p-6">
              <Clock className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-300 text-sm">Round-the-clock customer service</p>
            </div>
            <div className="text-center p-6">
              <Shield className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Secure</h3>
              <p className="text-gray-300 text-sm">Safe and encrypted streaming</p>
            </div>
            <div className="text-center p-6">
              <Star className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">HD Quality</h3>
              <p className="text-gray-300 text-sm">Crystal clear picture quality</p>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 px-4 bg-black/10">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 glow-text">
            Popular Channels
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
            <div className="logo-container">
              <img src={beinSportsLogo} alt="beIN Sports" className="h-16 md:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="logo-container">
              <img src={sccLogo} alt="SCC" className="h-16 md:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="logo-container">
              <img src={netflixLogo} alt="Netflix" className="h-16 md:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="logo-container">
              <img src={hboMaxLogo} alt="HBO Max" className="h-16 md:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300" />
            </div>
            <div className="logo-container">
              <img src={amazonPrimeLogo} alt="Amazon Prime Video" className="h-16 md:h-20 w-auto object-contain hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </section>

      {/* Movie/Series Posters Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
            Popular Movies & Series
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="poster-container group">
              <img 
                src={moviePoster1} 
                alt="Game of Thrones" 
                className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="poster-container group">
              <img 
                src={moviePoster2} 
                alt="Cukur" 
                className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="poster-container group">
              <img 
                src={moviePoster3} 
                alt="Movie Poster" 
                className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="poster-container group">
              <img 
                src={moviePoster4} 
                alt="Avatar" 
                className="w-full h-80 object-cover rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Arabic Explanation Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
            ما هو Jibreel IPTV؟
          </h2>
          
          <div className="text-right space-y-6 text-lg leading-relaxed">
            <p className="text-gray-300">
              <strong className="text-yellow-400">Jibreel IPTV</strong> هو خدمة بث تلفزيوني متطورة تتيح لك مشاهدة آلاف القنوات والأفلام والمسلسلات من جميع أنحاء العالم بجودة عالية الدقة.
            </p>
            
            <p className="text-gray-300">
              نحن نوفر لك تجربة ترفيهية شاملة تشمل أكثر من <strong className="text-yellow-400">7,000 قناة تلفزيونية</strong> متنوعة، بالإضافة إلى مكتبة ضخمة تحتوي على أكثر من <strong className="text-yellow-400">7,000 مسلسل</strong> و <strong className="text-yellow-400">18,000 فيلم</strong> من مختلف الأنواع والبلدان.
            </p>
            
            <p className="text-gray-300">
              سواء كنت تبحث عن القنوات الرياضية المباشرة، أو الأفلام الحديثة، أو المسلسلات الشهيرة، أو حتى البرامج الوثائقية والترفيهية، ستجد كل ما تحتاجه في مكان واحد.
            </p>
            
            <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-500/30">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">مميزات الخدمة:</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• جودة بث عالية الدقة (HD & 4K)</li>
                <li>• متوافق مع جميع الأجهزة (هاتف، تابلت، تلفزيون ذكي، كمبيوتر)</li>
                <li>• دعم فني متاح 24/7</li>
                <li>• تحديثات مستمرة للمحتوى</li>
                <li>• واجهة سهلة الاستخدام</li>
                <li>• أسعار تنافسية مع خطط مرنة</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
            الأسئلة الشائعة
          </h2>
          
          <div className="space-y-6">
            <Card className="feature-card border-0">
              <CardHeader>
                <CardTitle className="text-white text-xl text-right">كيف يمكنني الاشتراك في الخدمة؟</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-right">
                  يمكنك التواصل معنا عبر تيليجرام، واتساب، أو فيسبوك لاختيار الخطة المناسبة لك وإتمام عملية الاشتراك.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card border-0">
              <CardHeader>
                <CardTitle className="text-white text-xl text-right">هل الخدمة متوافقة مع جهازي؟</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-right">
                  نعم، خدمة Jibreel IPTV متوافقة مع جميع الأجهزة الذكية بما في ذلك الهواتف، التابلت، أجهزة التلفزيون الذكية، وأجهزة الكمبيوتر.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card border-0">
              <CardHeader>
                <CardTitle className="text-white text-xl text-right">ما هي جودة البث المتاحة؟</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-right">
                  نوفر جودة بث عالية تصل إلى 4K، مع إمكانية التحكم في جودة البث حسب سرعة الإنترنت لديك.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card border-0">
              <CardHeader>
                <CardTitle className="text-white text-xl text-right">هل يمكنني إلغاء الاشتراك في أي وقت؟</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-right">
                  نعم، يمكنك إلغاء الاشتراك في أي وقت. نحن نقدم خدمة عملاء ممتازة لمساعدتك في أي استفسار.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card border-0">
              <CardHeader>
                <CardTitle className="text-white text-xl text-right">كم عدد الأجهزة التي يمكنني استخدامها؟</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-right">
                  يمكنك استخدام الخدمة على عدة أجهزة في نفس الوقت، وسيتم توضيح التفاصيل عند التواصل معنا لاختيار الخطة المناسبة.
                </p>
              </CardContent>
            </Card>

            <Card className="feature-card border-0">
              <CardHeader>
                <CardTitle className="text-white text-xl text-right">هل تتوفر قنوات عربية؟</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-right">
                  نعم، نوفر مجموعة واسعة من القنوات العربية والدولية، بما في ذلك القنوات الرياضية والإخبارية والترفيهية.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-black/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 glow-text">
            Choose Your Plan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* 3 Months */}
            <Card className="pricing-card text-center">
              <CardHeader>
                <CardTitle className="text-white text-xl">3 Months</CardTitle>
                <div className="text-3xl font-bold text-yellow-400 mt-4">₪39</div>
                <CardDescription className="text-gray-300">Perfect for trying out</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleContactClick} className="w-full cta-button text-black font-semibold">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* 6 Months */}
            <Card className="pricing-card text-center">
              <CardHeader>
                <CardTitle className="text-white text-xl">6 Months</CardTitle>
                <div className="text-3xl font-bold text-yellow-400 mt-4">₪69</div>
                <CardDescription className="text-gray-300">Great value option</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleContactClick} className="w-full cta-button text-black font-semibold">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* 1 Year */}
            <Card className="pricing-card text-center">
              <CardHeader>
                <CardTitle className="text-white text-xl">1 Year</CardTitle>
                <div className="text-3xl font-bold text-yellow-400 mt-4">₪129</div>
                <CardDescription className="text-gray-300">Most popular choice</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleContactClick} className="w-full cta-button text-black font-semibold">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* 1 Year + 3 Months Bonus */}
            <Card className="pricing-card featured text-center pulse-glow">
              <CardHeader>
                <Badge className="bg-yellow-400 text-black mb-2">BEST VALUE</Badge>
                <CardTitle className="text-white text-xl">1 Year + 3 Months</CardTitle>
                <div className="text-3xl font-bold text-yellow-400 mt-4">₪149</div>
                <CardDescription className="text-gray-300">3 months bonus included!</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={handleContactClick} className="w-full cta-button text-black font-semibold">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-300 mb-4">All plans include:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-purple-600/30 px-3 py-1 rounded-full">7,000+ Channels</span>
              <span className="bg-purple-600/30 px-3 py-1 rounded-full">7,000+ TV Series</span>
              <span className="bg-purple-600/30 px-3 py-1 rounded-full">18,000+ Movies</span>
              <span className="bg-purple-600/30 px-3 py-1 rounded-full">HD Quality</span>
              <span className="bg-purple-600/30 px-3 py-1 rounded-full">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="text-3xl font-bold glow-text mb-4">Jibreel IPTV</div>
          <p className="text-gray-300 mb-6">Premium entertainment streaming service</p>
          
          {/* Social Media Links */}
          <div className="flex justify-center space-x-6 mb-6">
            <Button 
              onClick={() => window.open('https://t.me/notjibreel', '_blank')}
              variant="outline" 
              size="lg"
              className="bg-blue-500/20 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white"
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              Telegram
            </Button>
            <Button 
              onClick={() => window.open('https://www.facebook.com/share/1F78bYJd2D/?mibextid=wwXIfr', '_blank')}
              variant="outline" 
              size="lg"
              className="bg-blue-600/20 border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white"
            >
              <Facebook className="mr-2 h-6 w-6" />
              Facebook
            </Button>
            <Button 
              onClick={() => window.open('https://wa.me/972599765211', '_blank')}
              variant="outline" 
              size="lg"
              className="bg-green-500/20 border-green-500 text-green-400 hover:bg-green-500 hover:text-white"
            >
              <Phone className="mr-2 h-6 w-6" />
              WhatsApp
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-6">
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition-colors">Support</a>
            <a href="#contact" onClick={handleContactClick} className="text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer">Contact</a>
          </div>
          <p className="text-gray-500 text-sm">© 2024 Jibreel IPTV. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
