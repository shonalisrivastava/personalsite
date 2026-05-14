import { FormEvent, useMemo, useState } from "react";
import {
  BookOpen,
  Brush,
  CalendarDays,
  Camera,
  CheckCircle2,
  CircleDollarSign,
  Drum,
  Flower2,
  HandHeart,
  Languages,
  Mail,
  MapPin,
  Mic2,
  Music2,
  Palette,
  Phone,
  Quote,
  Send,
  Sparkles,
  UsersRound,
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

const classDetails = [
  {
    icon: Drum,
    title: "Tabla",
    who: "Children, teens, and adults who want a grounded rhythm practice.",
    level: "Beginner to advanced",
    format: "Private and small-group lessons, online or in person in Dublin, California.",
    ageRange: "Ages 7+",
    outcomes: "Build taal awareness, hand technique, listening skills, and confidence accompanying music.",
  },
  {
    icon: Mic2,
    title: "Vocal Music",
    who: "Students who want to sing with more sur, expression, and cultural understanding.",
    level: "Beginner to advanced",
    format: "Private coaching or small groups for Hindustani classical, geet, ghazal, bhajan, Bollywood, and karaoke.",
    ageRange: "Ages 6+ and adults",
    outcomes: "Develop pitch, breath, repertoire, pronunciation, and performance confidence.",
  },
  {
    icon: Flower2,
    title: "Dance",
    who: "Learners who enjoy movement, rhythm, storytelling, and graceful expression.",
    level: "Beginner to advanced",
    format: "Kathak and Bollywood-inspired classes, online or in-person based on availability.",
    ageRange: "Children, teens, adults, and seniors",
    outcomes: "Strengthen rhythm, posture, coordination, abhinaya, and stage presence.",
  },
  {
    icon: Palette,
    title: "Art",
    who: "Creative students who want a calm space to explore color, form, and self-expression.",
    level: "Beginner to advanced",
    format: "Guided painting, sketching, and mixed-media sessions for individuals or small groups.",
    ageRange: "Children, adults, and seniors",
    outcomes: "Learn basic techniques, complete personal projects, and enjoy creative confidence.",
  },
  {
    icon: Languages,
    title: "Hindi",
    who: "Families and adult learners who want Hindi to feel natural, useful, and connected to culture.",
    level: "Beginner to advanced",
    format: "Online or in-person language lessons with reading, speaking, songs, and cultural context.",
    ageRange: "Ages 6+ and adults",
    outcomes: "Improve vocabulary, pronunciation, reading familiarity, and everyday speaking comfort.",
  },
];

const testimonials = [
  {
    quote: "Shonali creates a patient, joyful space where students feel proud of their progress.",
    name: "Parent of tabla student",
  },
  {
    quote: "The classes connect technique with culture, so every lesson feels meaningful.",
    name: "Adult vocal student",
  },
  {
    quote: "Our child looks forward to class every week and has grown so much in confidence.",
    name: "ShAMA family",
  },
];

const galleryItems = [
  { icon: Music2, title: "Class Moments", description: "Lessons and group practice rooted in patience and joy." },
  { icon: Camera, title: "Performances", description: "Stage, community, TV, and radio memories across India and the USA." },
  { icon: Drum, title: "Instruments", description: "Tabla, harmonium, dholak, rhythm, and attentive practice." },
  { icon: Palette, title: "Artwork", description: "Student paintings, sketches, and workshop pieces." },
  { icon: UsersRound, title: "Workshops", description: "Cultural gatherings and foundation programs for the community." },
  { icon: Sparkles, title: "Student Joy", description: "Creative growth, confidence, and family connection." },
];

const seniorPrograms = [
  {
    icon: Mic2,
    title: "Hindi Singing",
    description: "Gentle vocal sessions for familiar songs, pronunciation, and joyful group singing.",
  },
  {
    icon: Drum,
    title: "Folk Music",
    description: "Regional melodies, rhythm, and shared musical memories from Indian traditions.",
  },
  {
    icon: Music2,
    title: "Light Music",
    description: "Relaxed, expressive music classes built around confidence, listening, and comfort.",
  },
  {
    icon: Sparkles,
    title: "Bollywood Music",
    description: "Beloved songs, melodies, and cultural connection in a warm community setting.",
  },
  {
    icon: Palette,
    title: "Painting",
    description: "Color, sketching, and creative expression with accessible, senior-friendly pacing.",
  },
  {
    icon: Flower2,
    title: "Dancing",
    description: "Light movement and dance-inspired expression designed for comfort and wellness.",
  },
];

const registrationFields = {
  fullName: "",
  age: "",
  phone: "",
  email: "",
  city: "",
  interestedClasses: [] as string[],
  preferredTimes: "",
  comments: "",
  website: "",
};

const inquiryFields = {
  name: "",
  studentAge: "",
  interestArea: "",
  preferredFormat: "",
  location: "",
  message: "",
  email: "",
  phone: "",
  website: "",
};

type RegistrationField = keyof typeof registrationFields;
type RegistrationForm = typeof registrationFields;
type RegistrationErrors = Partial<Record<RegistrationField, string>>;
type InquiryField = keyof typeof inquiryFields;
type InquiryForm = typeof inquiryFields;
type InquiryErrors = Partial<Record<InquiryField, string>>;
type SubmitStatus = "idle" | "submitting" | "success" | "error";

const submitLead = async (type: string, data: Record<string, unknown>, website: string) => {
  const response = await fetch("/api/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ type, data, website }),
  });

  if (!response.ok) {
    throw new Error("Submission failed");
  }
};

export function App() {
  const [formData, setFormData] = useState<RegistrationForm>(registrationFields);
  const [errors, setErrors] = useState<RegistrationErrors>({});
  const [registrationStatus, setRegistrationStatus] = useState<SubmitStatus>("idle");
  const [inquiryData, setInquiryData] = useState<InquiryForm>(inquiryFields);
  const [inquiryErrors, setInquiryErrors] = useState<InquiryErrors>({});
  const [inquiryStatus, setInquiryStatus] = useState<SubmitStatus>("idle");

  const selectedClasses = useMemo(
    () => new Set(formData.interestedClasses),
    [formData.interestedClasses],
  );

  const updateField = (field: RegistrationField, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  };

  const toggleClassInterest = (program: string) => {
    setFormData((current) => {
      const hasProgram = current.interestedClasses.includes(program);
      return {
        ...current,
        interestedClasses: hasProgram
          ? current.interestedClasses.filter((item) => item !== program)
          : [...current.interestedClasses, program],
      };
    });
    setErrors((current) => ({ ...current, interestedClasses: undefined }));
  };

  const validateRegistration = () => {
    const nextErrors: RegistrationErrors = {};
    const numericAge = Number(formData.age);

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!formData.age || Number.isNaN(numericAge) || numericAge < 65) {
      nextErrors.age = "Please enter an age of 65 or older.";
    }

    if (!/^[+()\-\s\d]{7,}$/.test(formData.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formData.city.trim()) {
      nextErrors.city = "Please enter your city.";
    }

    if (formData.interestedClasses.length === 0) {
      nextErrors.interestedClasses = "Please choose at least one class.";
    }

    if (!formData.preferredTimes.trim()) {
      nextErrors.preferredTimes = "Please share preferred days or times.";
    }

    return nextErrors;
  };

  const handleRegistrationSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.website) {
      return;
    }

    const nextErrors = validateRegistration();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setRegistrationStatus("idle");
      return;
    }

    setRegistrationStatus("submitting");

    try {
      await submitLead("senior-registration", formData, formData.website);
      setRegistrationStatus("success");
      setFormData(registrationFields);
    } catch {
      setRegistrationStatus("error");
    }
  };

  const updateInquiryField = (field: InquiryField, value: string) => {
    setInquiryData((current) => ({ ...current, [field]: value }));
    setInquiryErrors((current) => ({ ...current, [field]: undefined }));
  };

  const validateInquiry = () => {
    const nextErrors: InquiryErrors = {};

    if (!inquiryData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }

    if (!inquiryData.studentAge.trim()) {
      nextErrors.studentAge = "Please enter the student's age.";
    }

    if (!inquiryData.interestArea) {
      nextErrors.interestArea = "Please choose an interest area.";
    }

    if (!inquiryData.preferredFormat) {
      nextErrors.preferredFormat = "Please choose a preferred format.";
    }

    if (!inquiryData.location.trim()) {
      nextErrors.location = "Please enter your city or location.";
    }

    if (!/^\S+@\S+\.\S+$/.test(inquiryData.email.trim())) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!/^[+()\-\s\d]{7,}$/.test(inquiryData.phone.trim())) {
      nextErrors.phone = "Please enter a valid phone number.";
    }

    return nextErrors;
  };

  const handleInquirySubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inquiryData.website) {
      return;
    }

    const nextErrors = validateInquiry();
    setInquiryErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setInquiryStatus("idle");
      return;
    }

    setInquiryStatus("submitting");

    try {
      await submitLead("class-inquiry", inquiryData, inquiryData.website);
      setInquiryStatus("success");
      setInquiryData(inquiryFields);
    } catch {
      setInquiryStatus("error");
    }
  };

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
          <a href="#class-details">Details</a>
          <a href="#foundation">Foundation</a>
          <a href="#senior-classes">Seniors 65+</a>
          <a href="#gallery">Gallery</a>
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
            <a className="secondaryButton" href="#class-details">Explore offerings</a>
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

      <section className="section classDetails" id="class-details" aria-labelledby="class-details-title">
        <div className="sectionHeader">
          <h2 id="class-details-title">Find the right class path.</h2>
          <p>
            Each offering can be shaped for age, experience, schedule, and
            learning style, with online and in-person options available.
          </p>
        </div>
        <div className="detailGrid">
          {classDetails.map(({ icon: Icon, title, who, level, format, ageRange, outcomes }) => (
            <article className="detailCard" key={title}>
              <div className="detailIcon">
                <Icon size={28} />
              </div>
              <h3>{title}</h3>
              <dl>
                <div>
                  <dt>Who it is for</dt>
                  <dd>{who}</dd>
                </div>
                <div>
                  <dt>Level</dt>
                  <dd>{level}</dd>
                </div>
                <div>
                  <dt>Format</dt>
                  <dd>{format}</dd>
                </div>
                <div>
                  <dt>Age range</dt>
                  <dd>{ageRange}</dd>
                </div>
                <div>
                  <dt>Expected outcomes</dt>
                  <dd>{outcomes}</dd>
                </div>
              </dl>
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
          <h2>Sri GirjAsha Global Foundation</h2>
          <p>
            Sri GirjAsha is a global, donation-based educational platform created by
            four siblings in honor of their parents, Sri Girja Shankar Ji and
            Srimati Asha Srivastava. It offers free learning opportunities in
            music, yoga, languages, arts, and more.
          </p>
          <a className="textLink" href="#senior-classes">Explore senior classes</a>
        </div>
      </section>

      <section className="seniorClasses" id="senior-classes" aria-labelledby="senior-title">
        <div className="seniorHero">
          <div className="seniorHeroCopy">
            <p className="eyebrow">Sri GirjAsha Global Foundation</p>
            <h2 id="senior-title">Free Creative Classes for Seniors (65+)</h2>
            <h3>Celebrate Creativity, Music & Community</h3>
            <p>
              Free classes designed especially for seniors to enjoy music, art,
              dance, and cultural connection.
            </p>
            <a className="primaryButton" href="#senior-registration">
              Register Now
            </a>
          </div>
          <div className="seniorImageGrid" aria-label="Creative classes for seniors">
            <div className="imagePlaceholder musicPlaceholder">
              <Music2 size={34} />
              <span>Seniors enjoying music</span>
            </div>
            <div className="imagePlaceholder artPlaceholder">
              <Palette size={34} />
              <span>Painting together</span>
            </div>
            <div className="imagePlaceholder dancePlaceholder">
              <Flower2 size={34} />
              <span>Dance and movement</span>
            </div>
          </div>
        </div>

        <div className="seniorAbout">
          <HandHeart size={30} />
          <p>
            Sri GirjAsha Global Foundation promotes creativity, culture,
            wellness, and lifelong learning through community-centered programs
            for seniors.
          </p>
        </div>

        <div className="seniorPrograms">
          <div className="sectionHeader">
            <h2>Programs offered</h2>
            <p>
              Classes are welcoming, accessible, and designed to help seniors
              reconnect with creativity at a gentle community pace.
            </p>
          </div>
          <div className="seniorProgramGrid">
            {seniorPrograms.map(({ icon: Icon, title, description }) => (
              <article className="seniorProgramCard" key={title}>
                <Icon size={30} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="seniorRegistrationWrap">
          <section className="registrationPanel" id="senior-registration" aria-labelledby="registration-title">
            <div>
              <p className="eyebrow">Registration</p>
              <h2 id="registration-title">Join the creative classes</h2>
              <p>
                Share a few details and we will contact you soon with class
                options, timing, and next steps.
              </p>
            </div>

            {registrationStatus === "success" && (
              <div className="successMessage" role="status">
                <CheckCircle2 size={22} />
                <span>Thank you for registering! We will contact you soon.</span>
              </div>
            )}
            {registrationStatus === "error" && (
              <div className="errorMessage" role="alert">
                <span>
                  We could not send the registration just now. Please email or
                  call Shonali, or try again soon.
                </span>
              </div>
            )}

            <form className="registrationForm" onSubmit={handleRegistrationSubmit} noValidate>
              <div className="hiddenField" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.website}
                  onChange={(event) => updateField("website", event.target.value)}
                />
              </div>

              <div className="formGrid">
                <label>
                  <span>Full Name</span>
                  <input
                    name="fullName"
                    type="text"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={(event) => updateField("fullName", event.target.value)}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                    required
                  />
                  {errors.fullName && <small id="fullName-error">{errors.fullName}</small>}
                </label>

                <label>
                  <span>Age</span>
                  <input
                    name="age"
                    type="number"
                    min="65"
                    inputMode="numeric"
                    value={formData.age}
                    onChange={(event) => updateField("age", event.target.value)}
                    aria-invalid={Boolean(errors.age)}
                    aria-describedby={errors.age ? "age-error" : undefined}
                    required
                  />
                  {errors.age && <small id="age-error">{errors.age}</small>}
                </label>

                <label>
                  <span>Phone Number</span>
                  <input
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={(event) => updateField("phone", event.target.value)}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    required
                  />
                  {errors.phone && <small id="phone-error">{errors.phone}</small>}
                </label>

                <label>
                  <span>Email Address</span>
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={(event) => updateField("email", event.target.value)}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    required
                  />
                  {errors.email && <small id="email-error">{errors.email}</small>}
                </label>

                <label>
                  <span>City</span>
                  <input
                    name="city"
                    type="text"
                    autoComplete="address-level2"
                    value={formData.city}
                    onChange={(event) => updateField("city", event.target.value)}
                    aria-invalid={Boolean(errors.city)}
                    aria-describedby={errors.city ? "city-error" : undefined}
                    required
                  />
                  {errors.city && <small id="city-error">{errors.city}</small>}
                </label>

                <label>
                  <span>Preferred Days/Times</span>
                  <input
                    name="preferredTimes"
                    type="text"
                    placeholder="Weekday mornings, weekends, etc."
                    value={formData.preferredTimes}
                    onChange={(event) => updateField("preferredTimes", event.target.value)}
                    aria-invalid={Boolean(errors.preferredTimes)}
                    aria-describedby={errors.preferredTimes ? "preferredTimes-error" : undefined}
                    required
                  />
                  {errors.preferredTimes && (
                    <small id="preferredTimes-error">{errors.preferredTimes}</small>
                  )}
                </label>
              </div>

              <fieldset aria-describedby={errors.interestedClasses ? "classes-error" : undefined}>
                <legend>Interested Classes</legend>
                <div className="checkboxGrid">
                  {seniorPrograms.map(({ title }) => (
                    <label className="checkboxOption" key={title}>
                      <input
                        type="checkbox"
                        name="interestedClasses"
                        value={title}
                        checked={selectedClasses.has(title)}
                        onChange={() => toggleClassInterest(title)}
                      />
                      <span>{title}</span>
                    </label>
                  ))}
                </div>
                {errors.interestedClasses && (
                  <small id="classes-error">{errors.interestedClasses}</small>
                )}
              </fieldset>

              <label>
                <span>Comments or Questions</span>
                <textarea
                  name="comments"
                  rows={5}
                  value={formData.comments}
                  onChange={(event) => updateField("comments", event.target.value)}
                />
              </label>

              <button
                className="submitButton"
                type="submit"
                disabled={registrationStatus === "submitting"}
              >
                <Send size={20} />
                <span>
                  {registrationStatus === "submitting" ? "Sending..." : "Join the Classes"}
                </span>
              </button>
            </form>
          </section>

          <aside className="donationPanel" aria-labelledby="donation-title">
            <CircleDollarSign size={32} />
            <h2 id="donation-title">Support the program</h2>
            <p>
              All classes are free. Donations are appreciated to support
              community programs and senior wellness through Sri GirjAsha Global
              Foundation.
            </p>
            <div className="donationLinks">
              <a href="mailto:shonalisclasses@live.com?subject=PayPal%20Donation%20Link">
                Request PayPal donation link
              </a>
              <a href="mailto:shonalisclasses@live.com?subject=Zelle%20Donation%20Information">
                Request Zelle information
              </a>
            </div>
            <div className="seniorNote">
              <UsersRound size={20} />
              <span>Open to seniors aged 65 and older.</span>
            </div>
            <div className="seniorNote">
              <CalendarDays size={20} />
              <span>Class times will be coordinated after registration.</span>
            </div>
          </aside>
        </div>
      </section>

      <section className="section testimonials" aria-labelledby="testimonials-title">
        <div className="sectionHeader">
          <h2 id="testimonials-title">Student and family voices.</h2>
          <p>
            Families and students often describe ShAMA classes as patient,
            encouraging, culturally grounded, and confidence-building.
          </p>
        </div>
        <div className="testimonialGrid">
          {testimonials.map(({ quote, name }) => (
            <figure className="testimonialCard" key={name}>
              <Quote size={28} />
              <blockquote>{quote}</blockquote>
              <figcaption>{name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="gallerySection" id="gallery" aria-labelledby="gallery-title">
        <div className="galleryInner">
          <div className="sectionHeader">
            <h2 id="gallery-title">Moments from ShAMA.</h2>
            <p>
              A visual look at classes, performances, student moments,
              instruments, artwork, and community workshops.
            </p>
          </div>
          <div className="galleryGrid">
            {galleryItems.map(({ icon: Icon, title, description }) => (
              <article className="galleryPlaceholder" key={title}>
                <Icon size={30} />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div>
          <h2>Start with one conversation.</h2>
          <p>
            Whether you are choosing a first music class for your child or
            returning to an art form yourself, we can help you find the
            right starting point.
          </p>
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
        </div>
        <form className="inquiryForm" onSubmit={handleInquirySubmit} noValidate>
          <div className="hiddenField" aria-hidden="true">
            <label htmlFor="inquiry-website">Website</label>
            <input
              id="inquiry-website"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={inquiryData.website}
              onChange={(event) => updateInquiryField("website", event.target.value)}
            />
          </div>

          {inquiryStatus === "success" && (
            <div className="successMessage" role="status">
              <CheckCircle2 size={22} />
              <span>Thank you for reaching out! We will contact you soon.</span>
            </div>
          )}
          {inquiryStatus === "error" && (
            <div className="errorMessage" role="alert">
              <span>
                We could not send the inquiry just now. Please email or call
                Shonali, or try again soon.
              </span>
            </div>
          )}

          <label>
            <span>Name</span>
            <input
              name="name"
              type="text"
              autoComplete="name"
              value={inquiryData.name}
              onChange={(event) => updateInquiryField("name", event.target.value)}
              aria-invalid={Boolean(inquiryErrors.name)}
              aria-describedby={inquiryErrors.name ? "inquiry-name-error" : undefined}
              required
            />
            {inquiryErrors.name && <small id="inquiry-name-error">{inquiryErrors.name}</small>}
          </label>

          <div className="formGrid">
            <label>
              <span>Student Age</span>
              <input
                name="studentAge"
                type="text"
                inputMode="numeric"
                value={inquiryData.studentAge}
                onChange={(event) => updateInquiryField("studentAge", event.target.value)}
                aria-invalid={Boolean(inquiryErrors.studentAge)}
                aria-describedby={inquiryErrors.studentAge ? "student-age-error" : undefined}
                required
              />
              {inquiryErrors.studentAge && (
                <small id="student-age-error">{inquiryErrors.studentAge}</small>
              )}
            </label>

            <label>
              <span>Interest Area</span>
              <select
                name="interestArea"
                value={inquiryData.interestArea}
                onChange={(event) => updateInquiryField("interestArea", event.target.value)}
                aria-invalid={Boolean(inquiryErrors.interestArea)}
                aria-describedby={inquiryErrors.interestArea ? "interest-area-error" : undefined}
                required
              >
                <option value="">Choose one</option>
                {classDetails.map(({ title }) => (
                  <option value={title} key={title}>{title}</option>
                ))}
              </select>
              {inquiryErrors.interestArea && (
                <small id="interest-area-error">{inquiryErrors.interestArea}</small>
              )}
            </label>

            <label>
              <span>Preferred Format</span>
              <select
                name="preferredFormat"
                value={inquiryData.preferredFormat}
                onChange={(event) => updateInquiryField("preferredFormat", event.target.value)}
                aria-invalid={Boolean(inquiryErrors.preferredFormat)}
                aria-describedby={inquiryErrors.preferredFormat ? "preferred-format-error" : undefined}
                required
              >
                <option value="">Choose one</option>
                <option value="Online">Online</option>
                <option value="In person">In person</option>
                <option value="Either">Either</option>
              </select>
              {inquiryErrors.preferredFormat && (
                <small id="preferred-format-error">{inquiryErrors.preferredFormat}</small>
              )}
            </label>

            <label>
              <span>Location</span>
              <input
                name="location"
                type="text"
                autoComplete="address-level2"
                value={inquiryData.location}
                onChange={(event) => updateInquiryField("location", event.target.value)}
                aria-invalid={Boolean(inquiryErrors.location)}
                aria-describedby={inquiryErrors.location ? "location-error" : undefined}
                required
              />
              {inquiryErrors.location && (
                <small id="location-error">{inquiryErrors.location}</small>
              )}
            </label>

            <label>
              <span>Email</span>
              <input
                name="email"
                type="email"
                autoComplete="email"
                value={inquiryData.email}
                onChange={(event) => updateInquiryField("email", event.target.value)}
                aria-invalid={Boolean(inquiryErrors.email)}
                aria-describedby={inquiryErrors.email ? "inquiry-email-error" : undefined}
                required
              />
              {inquiryErrors.email && (
                <small id="inquiry-email-error">{inquiryErrors.email}</small>
              )}
            </label>

            <label>
              <span>Phone</span>
              <input
                name="phone"
                type="tel"
                autoComplete="tel"
                value={inquiryData.phone}
                onChange={(event) => updateInquiryField("phone", event.target.value)}
                aria-invalid={Boolean(inquiryErrors.phone)}
                aria-describedby={inquiryErrors.phone ? "inquiry-phone-error" : undefined}
                required
              />
              {inquiryErrors.phone && (
                <small id="inquiry-phone-error">{inquiryErrors.phone}</small>
              )}
            </label>
          </div>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              rows={5}
              value={inquiryData.message}
              onChange={(event) => updateInquiryField("message", event.target.value)}
              placeholder="Share goals, schedule notes, or questions."
            />
          </label>

          <button
            className="submitButton"
            type="submit"
            disabled={inquiryStatus === "submitting"}
          >
            <BookOpen size={20} />
            <span>{inquiryStatus === "submitting" ? "Sending..." : "Start a Class"}</span>
          </button>
        </form>
      </section>
    </main>
  );
}
