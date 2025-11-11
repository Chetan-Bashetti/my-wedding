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
    require('./photos/photo1.jpg'),
    require('./photos/photo2.jpg'),
    require('./photos/photo3.jpg'),
    require('./photos/photo4.jpg'),
    require('./photos/photo5.jpg')
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
                style={{ backgroundImage: `url(${photo})` }}
              >
                <div className="slide-placeholder">
                  <span className="photo-icon">📷</span>
                  <p>Pre-Wedding Photo {index + 1}</p>
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
              <div className="event-icon">💍</div>
              <h3 className="event-name">Engagement Ceremony</h3>
              <p className="event-date">25th November, 2025</p>
              <p className="event-time">07:30 PM</p>
              <div className="event-decoration">❀</div>
            </div>
            <div className="event-card">
              <div className="event-icon">✨</div>
              <h3 className="event-name">Haldi Ceremony</h3>
              <p className="event-date">25th November, 2025</p>
              <p className="event-time">08:30 PM</p>
              <div className="event-decoration">❀</div>
            </div>
            <div className="event-card featured">
              <div className="event-icon">💑</div>
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
            <div className="venue-icon">📍</div>
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
