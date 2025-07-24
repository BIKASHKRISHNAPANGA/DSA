// Generate international names
function generateRandomNames(count) {
  const maleFirstNames = [
    // Indian
    "Aarav",
    "Vihaan",
    "Arjun",
    "Aditya",
    "Reyansh",
    "Mohammed",
    "Kabir",
    "Krishna",
    "Ishaan",
    "Atharv",
    // Western
    "James",
    "John",
    "Michael",
    "David",
    "William",
    "Robert",
    "Joseph",
    "Daniel",
    "Matthew",
    "Christopher",
    // African
    "Kwame",
    "Musa",
    "Jabari",
    "Tendai",
    "Oluwaseun",
    "Amare",
    "Chijioke",
    "Tafari",
    "Mandla",
    "Simba",
    // Italian
    "Luca",
    "Matteo",
    "Alessandro",
    "Leonardo",
    "Francesco",
    "Andrea",
    "Gabriele",
    "Marco",
    "Giovanni",
    "Antonio",
    // Spanish
    "José",
    "Juan",
    "Carlos",
    "Miguel",
    "Luis",
    "Javier",
    "Alejandro",
    "Diego",
    "Manuel",
    "Francisco",
    // Arabic
    "Mohammed",
    "Ahmed",
    "Ali",
    "Omar",
    "Youssef",
    "Ibrahim",
    "Mustafa",
    "Abdullah",
    "Khalid",
    "Hamza",
    // East Asian
    "Wei",
    "Jun",
    "Hao",
    "Yong",
    "Jie",
    "Min",
    "Chen",
    "Li",
    "Zhang",
    "Yang",
  ];

  const femaleFirstNames = [
    // Indian
    "Aanya",
    "Ananya",
    "Diya",
    "Aadhya",
    "Ishita",
    "Myra",
    "Saanvi",
    "Avni",
    "Kiara",
    "Anika",
    // Western
    "Mary",
    "Jennifer",
    "Linda",
    "Patricia",
    "Elizabeth",
    "Susan",
    "Jessica",
    "Sarah",
    "Karen",
    "Nancy",
    // African
    "Amina",
    "Nala",
    "Zahara",
    "Ifeoma",
    "Adanna",
    "Tendai",
    "Nia",
    "Amara",
    "Lesedi",
    "Makena",
    // Italian
    "Sofia",
    "Giulia",
    "Aurora",
    "Alice",
    "Ginevra",
    "Emma",
    "Giorgia",
    "Martina",
    "Beatrice",
    "Chiara",
    // Spanish
    "María",
    "Carmen",
    "Ana",
    "Isabel",
    "Dolores",
    "Laura",
    "Sara",
    "Paula",
    "Elena",
    "Lucía",
    // Arabic
    "Fatima",
    "Aisha",
    "Mariam",
    "Noor",
    "Layla",
    "Zahra",
    "Yasmin",
    "Leila",
    "Huda",
    "Rania",
    // East Asian
    "Mei",
    "Ling",
    "Xia",
    "Yan",
    "Li",
    "Jing",
    "Hui",
    "Fang",
    "Lan",
    "Ying",
  ];

  const cities = [
    // Indian
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Jaipur",
    "Ahmedabad",
    "Lucknow",
    // International
    "New York",
    "London",
    "Tokyo",
    "Paris",
    "Dubai",
    "Singapore",
    "Sydney",
    "Toronto",
    "Berlin",
    "Rome",
    "Cairo",
    "Nairobi",
    "Lagos",
    "Johannesburg",
    "Casablanca",
    "Bangkok",
    "Seoul",
    "Beijing",
    "Shanghai",
    "Moscow",
    "Istanbul",
    "Mexico City",
    "São Paulo",
    "Buenos Aires",
    "Los Angeles",
    "Chicago",
    "Madrid",
    "Barcelona",
    "Amsterdam",
    "Vienna",
  ];

  const names = [];

  for (let i = 0; i < count; i++) {
    const isMale = Math.random() > 0.5;
    const firstName = isMale
      ? maleFirstNames[Math.floor(Math.random() * maleFirstNames.length)]
      : femaleFirstNames[Math.floor(Math.random() * femaleFirstNames.length)];
    const city = cities[Math.floor(Math.random() * cities.length)];
    names.push(`${firstName} from ${city}`);
  }

  return names;
}

// Generate Ninebug testimonials (updated version)
function generateNinebugTestimonials(count) {
  const bases = [
    "Active learners $finish$ $num$ roadmaps in $time$",
    "Engineers like $name$ use Ninebug to $action$",
    "Top users $achieve$ $num$ problems in $time$",
    "$role$ from $city$ $action$ $num$ problems $timeframe$",
    "Many users report $achievement$ with consistent practice",
    "Ninebug helps $roles$ $action$ for $goal$",
    "$city$-based $role$ recently $achievement$ using Ninebug",
    "Consistent practice leads to $achievement$ for many",
    "Our data shows $role$ often $action$ when $condition$",
    "Focused learners typically $achievement$ in $time$",
  ];

  const placeholders = {
    finish: ["complete", "finish", "work through", "master"],
    num: ["3+", "5+", "2-3", "several", "multiple", "10+", "15+", "20+"],
    time: ["a month", "weeks", "30 days", "a quarter", "fortnights"],
    action: [
      "stay interview-ready",
      "improve skills",
      "prepare for interviews",
      "practice daily",
      "hone their craft",
    ],
    achieve: ["master", "solve", "tackle", "complete", "attempt"],
    role: [
      "Developer",
      "Engineer",
      "Student",
      "Learner",
      "Coder",
      "Tech professional",
    ],
    timeframe: [
      "last month",
      "recently",
      "in 30 days",
      "in weeks",
      "in a sprint",
    ],
    achievement: [
      "improved speed",
      "better patterns",
      "higher success",
      "more confidence",
    ],
    roles: ["developers", "engineers", "students", "candidates", "learners"],
    goal: ["interviews", "technical rounds", "coding tests", "career growth"],
    condition: [
      "using daily",
      "following roadmaps",
      "taking mocks",
      "practicing consistently",
    ],
  };

  const testimonials = [];

  for (let i = 0; i < count; i++) {
    let sentence = bases[Math.floor(Math.random() * bases.length)];

    // Replace placeholders
    sentence = sentence.replace(/\$(\w+)\$/g, (_, key) => {
      if (key === "name") {
        return generateRandomNames(1)[0];
      } else if (key === "city") {
        const cities = [
          "Mumbai",
          "Delhi",
          "Bangalore",
          "New York",
          "London",
          "Tokyo",
          "Dubai",
          "Nairobi",
          "Rome",
          "Barcelona",
        ];
        return cities[Math.floor(Math.random() * cities.length)];
      } else {
        const options = placeholders[key];
        return options[Math.floor(Math.random() * options.length)];
      }
    });

    // Clean up grammar
    sentence = sentence.replace(
      /\ba\s+[aeiou]/gi,
      (match) => match[0] + "n " + match[2]
    );
    sentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);

    testimonials.push(sentence);
  }

  return testimonials;
}

// Notification system
class NinebugNotifier {
  constructor() {
    this.names = generateRandomNames(100);
    this.testimonials = generateNinebugTestimonials(100);
    this.promotionalMessages = [
      "1-Day AI Access - Unlock advanced features today!",
      "Monthly Pro subscription - Get full access to all roadmaps!",
      "Limited offer: Upgrade to Pro for exclusive content!",
      "Special discount: Get 1-Day AI Access now!",
      "Go Pro: Unlock all Ninebug features today!",
    ];
    this.timer = null;
    this.start();
  }

  getRandomMessage() {
    // Weighted random selection (7:2:1 ratio)
    const rand = Math.random();

    if (rand < 0.7) {
      // 70% chance - testimonials
      return this.testimonials[
        Math.floor(Math.random() * this.testimonials.length)
      ];
    } else if (rand < 0.9) {
      // 20% chance - names with achievements
      const name = this.names[Math.floor(Math.random() * this.names.length)];
      const achievements = [
        `${name} solved 100+ problems last week`,
        `${name} just completed the Advanced DSA roadmap`,
        `${name} aced 5 interviews using Ninebug`,
        `${name} mastered 3 key patterns in a week`,
        `${name} is on a 10-day problem-solving streak`,
      ];
      return achievements[Math.floor(Math.random() * achievements.length)];
    } else {
      // 10% chance - promotional
      return this.promotionalMessages[
        Math.floor(Math.random() * this.promotionalMessages.length)
      ];
    }
  }

  showNotification() {
    const message = this.getRandomMessage();
    console.log(`[Notification] ${message}`);
    // In a real app, you would show a browser/system notification here
    // For example: new Notification('Ninebug Update', { body: message });

    // Schedule next notification
    this.scheduleNext();
  }

  scheduleNext() {
    const minutes = 1 + Math.random() * 5; // 1-6 minutes
    const ms = minutes * 60 * 1000;
    this.timer = setTimeout(() => this.showNotification(), ms);
    console.log(`Next notification in ${minutes.toFixed(1)} minutes`);
  }

  start() {
    console.log("Starting Ninebug notifications...");
    this.scheduleNext();
  }

  stop() {
    if (this.timer) {
      clearTimeout(this.timer);
      console.log("Notifications stopped");
    }
  }
}

// Start the notification system
const notifier = new NinebugNotifier();

// To stop notifications later: notifier.stop();
