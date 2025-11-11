import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Pre-wedding photos (placeholder - replace with actual photos)
  const photos = [
    require('./photos/pre_wedding/CN_M_1.jpg'),
    require('./photos/pre_wedding/CN_M_2.jpg'),
    require('./photos/pre_wedding/CN_M_3.jpg'),
    require('./photos/pre_wedding/CN_M_4.jpg'),
    require('./photos/pre_wedding/CN_M_5.jpg'),
    require('./photos/pre_wedding/CN_M_6.jpg'),
    require('./photos/pre_wedding/CN_M_7.jpg'),
    require('./photos/pre_wedding/CN_M_8.jpg'),
    require('./photos/pre_wedding/CN_M_9.jpg'),
    require('./photos/pre_wedding/CN_M_10.jpg')
  ];

  // Slideshow effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % photos.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [photos.length]);

  // Countdown timer
  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date('2025-11-25T12:30:00').getTime();
      const now = new Date().getTime();
      const difference = eventDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="mandala-pattern"></div>
        <div className="hero-content">
          <div className="om-symbol">ॐ</div>
          <h1 className="wedding-title">Wedding Invitation</h1>
          <div className="divider">
            <span className="lotus">❀</span>
          </div>
          <h2 className="couple-names">Chetan & Neha</h2>
          <p className="save-date">Save the Date</p>
          <p className="wedding-date">26th November, 2025</p>
        </div>
      </section>

      {/* Welcome Message Section */}
      <section className="welcome-section">
        <div className="container">
          <div className="section-header">
            <h2>Join Us in Celebration</h2>
            <div className="decorative-line"></div>
          </div>
          <p className="welcome-message">
            With the divine blessings of the Almighty and the love of our families,
            we joyfully invite you to share in the celebration of our union.
            As two hearts become one, we would be honored to have you witness
            and bless this sacred beginning of our lifelong journey together.
            Your presence would add joy to our special day and create memories
            that we will cherish forever.
          </p>
          <div className="sanskrit-shloka">
            "धन्यो ग्रहस्थाश्रमः"
            <br />
            <span className="shloka-meaning">Blessed is the married life</span>
          </div>
        </div>
      </section>

      {/* Couple Section */}
      <section className="couple-section">
        <div className="container">
          <div className="couple-container">
            <div className="person groom">
              <div className="person-card-wrapper">
                <div className="person-card">
                  <div className="card-front">
                    <div className="person-photo-container">
                      <img src={require('./photos/groom.jpeg')} alt="Chetan" className="person-photo" />
                    </div>
                    <h3 className="person-name">Chetan</h3>
                    <div className="person-details">
                      <p className="education">BE in Computer Science</p>
                      <p className="profession">Software Developer</p>
                    </div>
                    <p className="flip-hint">Hover to know more</p>
                  </div>
                  <div className="card-back">
                    <h3 className="person-name">About Chetan</h3>
                    <div className="person-bio">
                      <p className="bio-item">🎓 Passionate about technology and innovation</p>
                      <p className="bio-item">💻 Loves coding and problem-solving</p>
                      <p className="bio-item">🏠 Wants to be at home and coding all the time</p>
                      <p className="bio-item">🍵 Chai lover</p>
                      <p className="bio-item">🎮 Gaming enthusiast in free time</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hearts-divider">
              <span className="heart">💕</span>
            </div>
            <div className="person bride">
              <div className="person-card-wrapper">
                <div className="person-card">
                  <div className="card-front">
                    <div className="person-photo-container">
                      <img src={require('./photos/bride.jpeg')} alt="Neha" className="person-photo" />
                    </div>
                    <h3 className="person-name">Neha</h3>
                    <div className="person-details">
                      <p className="education">BE in Electrical & Electronics</p>
                      <p className="profession">Software Developer</p>
                    </div>
                    <p className="flip-hint">Hover to know more</p>
                  </div>
                  <div className="card-back">
                    <h3 className="person-name">About Neha</h3>
                    <div className="person-bio">
                      <p className="bio-item">🌸 Creative and artistic soul</p>
                      <p className="bio-item">🛍️ Loves shopping</p>
                      <p className="bio-item">☕ Coffee lover and foodie</p>
                      <p className="bio-item">✈️ Dreams of traveling the world</p>
                      <p className="bio-item">🎵 Music and dance enthusiast</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Slideshow Section */}
      <section className="slideshow-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey Together</h2>
            <div className="decorative-line"></div>
          </div>
          <div className="slideshow-container">
            {photos.map((photo, index) => (
              <div
                key={index}
                className={`slide ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="slide-bg" style={{ backgroundImage: `url(${photo})` }}></div>
                <div className="slide-glass-overlay"></div>
                <div className="slide-content">
                  <img src={photo} alt={`Pre-Wedding ${index + 1}`} className="slide-image" />
                </div>
              </div>
            ))}
            <div className="slide-indicators">
              {photos.map((_, index) => (
                <span
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Timer Section */}
      <section className="countdown-section">
        <div className="container">
          <div className="section-header">
            <h2>Counting Down to Our Big Day</h2>
            <div className="decorative-line"></div>
          </div>
          <div className="countdown-timer">
            <div className="time-box">
              <span className="time-value">{timeLeft.days}</span>
              <span className="time-label">Days</span>
            </div>
            <div className="time-box">
              <span className="time-value">{timeLeft.hours}</span>
              <span className="time-label">Hours</span>
            </div>
            <div className="time-box">
              <span className="time-value">{timeLeft.minutes}</span>
              <span className="time-label">Minutes</span>
            </div>
            <div className="time-box">
              <span className="time-value">{timeLeft.seconds}</span>
              <span className="time-label">Seconds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Events Schedule Section */}
      <section className="events-section">
        <div className="container">
          <div className="section-header">
            <h2>Wedding Events</h2>
            <div className="decorative-line"></div>
          </div>
          <div className="events-timeline">
            <div className="event-card">
              <div className="event-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="28" fill="#D4AF37" opacity="0.2" />
                  <path d="M10 35C10 35 12 30 15 28C18 26 22 26 22 26L24 32L20 34C20 34 18 36 16 38C14 40 12 42 10 42C8 42 8 40 8 38C8 36 9 36 10 35Z" fill="#FFB6A3" />
                  <path d="M54 35C54 35 52 30 49 28C46 26 42 26 42 26L40 32L44 34C44 34 46 36 48 38C50 40 52 42 54 42C56 42 56 40 56 38C56 36 55 36 54 35Z" fill="#FFB6A3" />
                  <ellipse cx="22" cy="28" rx="3" ry="2.5" fill="#D4AF37" />
                  <circle cx="22" cy="27" r="1.5" fill="#FFD700" />
                  <circle cx="22" cy="26.5" r="0.8" fill="#FF6B9D" />
                  <ellipse cx="42" cy="28" rx="3" ry="2.5" fill="#D4AF37" />
                  <circle cx="42" cy="27" r="1.5" fill="#FFD700" />
                  <circle cx="42" cy="26.5" r="0.8" fill="#FF6B9D" />
                  <path d="M25 28L30 26L35 28" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="2,2" opacity="0.6" />
                  <path d="M39 28L34 26L29 28" stroke="#D4AF37" stroke-width="1.5" stroke-dasharray="2,2" opacity="0.6" />
                  <path d="M32 20C32 20 30 18 28 18C26 18 25 19 25 20.5C25 22 26 23 28 24L32 27L36 24C38 23 39 22 39 20.5C39 19 38 18 36 18C34 18 32 20 32 20Z" fill="#FF6B9D" opacity="0.8" />
                </svg>
              </div>
              <h3 className="event-name">Engagement Ceremony</h3>
              <p className="event-date">25th November, 2025</p>
              <p className="event-time">07:30 PM</p>
              <div className="event-decoration">❀</div>
            </div>
            <div className="event-card">
              <div className="event-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="28" fill="#FFD700" opacity="0.2" />
                  <ellipse cx="32" cy="26" rx="14" ry="3" fill="#D4AF37" />
                  <path d="M18 26C18 26 18 30 18 32C18 38 24 42 32 42C40 42 46 38 46 32C46 30 46 26 46 26" fill="#8B6914" />
                  <path d="M18 26C18 26 18 28 18 30C18 36 24 40 32 40C40 40 46 36 46 30C46 28 46 26 46 26" fill="#A0812A" />
                  <ellipse cx="32" cy="30" rx="12" ry="8" fill="#FFD700" />
                  <ellipse cx="32" cy="28" rx="11" ry="6" fill="#FFEB3B" />
                  <ellipse cx="32" cy="27" rx="9" ry="4" fill="#FFF176" />
                  <circle cx="28" cy="25" r="1.5" fill="#FFD700" opacity="0.7" />
                  <circle cx="36" cy="24" r="1.5" fill="#FFD700" opacity="0.7" />
                  <circle cx="32" cy="23" r="1" fill="#FFA500" opacity="0.6" />
                  <ellipse cx="30" cy="28" rx="2" ry="1.5" fill="#FFA500" opacity="0.4" />
                  <ellipse cx="35" cy="29" rx="1.5" ry="1" fill="#FFA500" opacity="0.4" />
                  <circle cx="20" cy="38" r="2" fill="#FFD700" opacity="0.5" />
                  <circle cx="44" cy="38" r="2" fill="#FFD700" opacity="0.5" />
                  <circle cx="24" cy="42" r="1.5" fill="#FFA500" opacity="0.4" />
                  <circle cx="40" cy="42" r="1.5" fill="#FFA500" opacity="0.4" />
                  <circle cx="16" cy="28" r="2" fill="#FF6B9D" opacity="0.6" />
                  <circle cx="48" cy="28" r="2" fill="#FF6B9D" opacity="0.6" />
                  <circle cx="18" cy="34" r="1.5" fill="#FF8B9D" opacity="0.5" />
                  <circle cx="46" cy="34" r="1.5" fill="#FF8B9D" opacity="0.5" />
                </svg>
              </div>
              <h3 className="event-name">Haldi Ceremony</h3>
              <p className="event-date">25th November, 2025</p>
              <p className="event-time">08:30 PM</p>
              <div className="event-decoration">❀</div>
            </div>
            <div className="event-card featured">
              <div className="event-icon">
                <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="32" cy="32" r="28" fill="#FF6B6B" opacity="0.2" />
                  <path d="M12 28L16 12L20 28H12Z" fill="#D4AF37" />
                  <path d="M44 28L48 12L52 28H44Z" fill="#D4AF37" />
                  <rect x="10" y="28" width="12" height="4" fill="#D4AF37" />
                  <rect x="42" y="28" width="12" height="4" fill="#D4AF37" />
                  <path d="M22 28L24 20L26 28H22Z" fill="#FF6B6B" />
                  <path d="M38 28L40 20L42 28H38Z" fill="#FF6B6B" />
                  <ellipse cx="32" cy="40" rx="18" ry="12" fill="#FF6B6B" opacity="0.3" />
                  <path d="M20 32L32 48L44 32H20Z" fill="#D4AF37" />
                  <path d="M28 36L32 44L36 36H28Z" fill="#FF6B6B" />
                  <circle cx="32" cy="28" r="3" fill="#FFD700" />
                </svg>
              </div>
              <h3 className="event-name">Wedding Ceremony</h3>
              <p className="event-date">26th November, 2025</p>
              <p className="event-time">12:30 PM</p>
              <div className="event-decoration">❀</div>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Section */}
      <section className="venue-section">
        <div className="container">
          <div className="section-header">
            <h2>Venue Location</h2>
            <div className="decorative-line"></div>
          </div>
          <div className="venue-details">
            <div className="venue-icon">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" fill="#D4AF37" opacity="0.2" />
                <rect x="28" y="38" width="8" height="16" fill="#8B4513" />
                <path d="M12 24L16 10L20 24H12Z" fill="#D4AF37" />
                <path d="M44 24L48 10L52 24H44Z" fill="#D4AF37" />
                <rect x="10" y="24" width="12" height="3" fill="#D4AF37" />
                <rect x="42" y="24" width="12" height="3" fill="#D4AF37" />
                <path d="M8 38L56 38L52 27H12L8 38Z" fill="#FF6B6B" />
                <rect x="6" y="38" width="52" height="4" rx="1" fill="#D4AF37" />
                <circle cx="32" cy="20" r="4" fill="#FFD700" />
                <path d="M22 30L24 27H28L24 30H22Z" fill="#FFD700" />
                <path d="M36 30L40 27H44L40 30H36Z" fill="#FFD700" />
                <rect x="14" y="30" width="2" height="8" fill="#8B4513" />
                <rect x="20" y="30" width="2" height="8" fill="#8B4513" />
                <rect x="42" y="30" width="2" height="8" fill="#8B4513" />
                <rect x="48" y="30" width="2" height="8" fill="#8B4513" />
              </svg>
            </div>
            <h3 className="venue-name">Basaveshwar bhavan</h3>
            <p className="venue-address">
              Shubamastu Colony Siddharuda Matha Road, Subhavastu Colony,
              <br />
              Sector 76B, Adarsh Nagar,
              <br />
              Vijayapura, Karnataka 586104, India
            </p>
          </div>
          <div className="map-container">
            <iframe
              title="Wedding Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5806.145948356658!2d75.71981815880488!3d16.858321714537485!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc6556cd136fa03%3A0x5b26b61b1f9765f5!2sBasaveshwar%20bhavan!5e0!3m2!1sen!2smy!4v1762611971878!5m2!1sen!2smy"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="footer-section">
        <div className="container">
          <div className="footer-content">
            <p className="footer-message">
              We look forward to celebrating with you!
            </p>
            <div className="footer-names">Chetan & Neha</div>
            <div className="footer-decoration">
              <span className="lotus">❀</span>
              <span className="om">ॐ</span>
              <span className="lotus">❀</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
