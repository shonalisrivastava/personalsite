import {
  Brush,
  Drum,
  Flower2,
  Languages,
  Mail,
  MapPin,
  Mic2,
  Music2,
  Phone,
  Sparkles,
} from "lucide-react";

const offerings = [
  {
    icon: Drum,
    title: "Instruments",
    description: "Tabla, dholak, and harmonium lessons rooted in rhythm, listening, and patient practice.",
  },
  {
    icon: Mic2,
    title: "Vocal",
    description: "Hindustani classical, geet, ghazal, bhajan, Bollywood, and karaoke for confident singing.",
  },
  {
    icon: Flower2,
    title: "Dance",
    description: "Kathak, Bollywood, and movement classes that connect grace, storytelling, and expression.",
  },
  {
    icon: Brush,
    title: "Art & Hindi",
    description: "Painting, sketching, and Hindi language learning for children and adults.",
  },
];

const highlights = [
  "Tabla training under Ustad Zakir Hussain and Pandit Swapan Chaudhary",
  "Kathak studies with Pandit Birju Maharaj and Prayag Sangeet Samiti",
  "Bhatkhande Music University foundation in tabla and vocal music",
  "Stage, TV, radio, and community performances across India and the USA",
];

export function App() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="ShAMA home">
          <img src="/assets/shama-logo.png" alt="" />
          <span>ShAMA</span>
        </a>
        <div className="navLinks">
          <a href="#about">About</a>
          <a href="#classes">Classes</a>
          <a href="#foundation">Foundation</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <h1>ShAMA</h1>
          <p className="subtitle">Shonali&apos;s Academy of Music and Arts</p>
          <p className="heroText">
            A warm home for Indian classical arts in the Bay Area, where tabla,
            Hindustani vocal music, Kathak, painting, and Hindi are taught with
            depth, patience, and joy.
          </p>
          <div className="heroActions" aria-label="Primary actions">
            <a className="primaryButton" href="#contact">Start a class</a>
            <a className="secondaryButton" href="#classes">Explore offerings</a>
          </div>
        </div>
        <div className="heroArt" aria-label="Shonali at tabla">
          <div className="rhythmLines" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <img src="/assets/shonali-tabla.jpg" alt="Shonali seated with tabla" />
          <div className="locationNote">
            <MapPin size={18} />
            <span>Online and in Dublin, California</span>
          </div>
        </div>
      </section>

      <section className="introBand" aria-label="Academy introduction">
        <div>
          <Music2 size={24} />
          <p>
            Lessons are shaped for curious beginners, returning artists, and
            families who want culture to feel alive at home.
          </p>
        </div>
        <div>
          <Languages size={24} />
          <p>
            Students can learn online or in person, with a pace that respects
            school schedules, family life, and individual confidence.
          </p>
        </div>
      </section>

      <section className="section classes" id="classes">
        <div className="sectionHeader">
          <h2>Learn through rhythm, voice, movement, and language.</h2>
          <p>
            ShAMA brings together practical lessons and cultural grounding, so
            every class feels both disciplined and welcoming.
          </p>
        </div>
        <div className="offeringGrid">
          {offerings.map(({ icon: Icon, title, description }) => (
            <article className="offering" key={title}>
              <Icon size={28} />
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section about" id="about">
        <div className="portraitStack">
          <img
            className="mentorPhoto"
            src="/assets/shonali-swapan.jpg"
            alt="Shonali with Pandit Swapan Chaudhary"
          />
          <div className="photoCaption">
            <Sparkles size={18} />
            <span>A lineage of music, dance, and devoted teaching.</span>
          </div>
        </div>
        <div className="aboutCopy">
          <h2>About Shonali Srivastava</h2>
          <p>
            Shonali Srivastava is a Bay Area artist and teacher with a rich
            foundation in tabla, Hindustani classical singing, Kathak, painting,
            and ceramics. Born into a musical family, she is the daughter of
            renowned flautist Shri Girja Shankar Srivastava.
          </p>
          <p>
            Her training spans Bhatkhande Music University, Prayag Sangeet
            Samiti, and mentorship from celebrated masters. She has performed
            across India and the United States, bringing technical precision,
            emotional expression, and cultural memory into every classroom.
          </p>
          <ul>
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="foundation" id="foundation">
        <div className="foundationInner">
          <h2>Girjasha Global Foundation</h2>
          <p>
            Girjasha is a global, donation-based educational platform created by
            four siblings in honor of their parents, Sri Girja Shankar Ji and
            Srimati Asha Srivastava. It offers free learning opportunities in
            music, yoga, languages, arts, and more.
          </p>
          <a className="textLink" href="#contact">Ask about the summer workshop</a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <h2>Start with one conversation.</h2>
          <p>
            Whether you are choosing a first music class for your child or
            returning to an art form yourself, Shonali can help you find the
            right starting point.
          </p>
        </div>
        <div className="contactMethods">
          <a href="mailto:shonalisclasses@live.com">
            <Mail size={20} />
            <span>shonalisclasses@live.com</span>
          </a>
          <a href="tel:+16506197600">
            <Phone size={20} />
            <span>(650) 619-7600</span>
          </a>
        </div>
      </section>
    </main>
  );
}
