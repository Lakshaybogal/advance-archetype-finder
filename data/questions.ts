export const QUESTIONS: Record<
  "6-7" | "8-10" | "11-12" | "college" | "working",
  { question: string; options: { option: string; archetype: string[] }[] }[]
> = {
  "6-7": [
    {
      question: "What do you care about the most?",
      options: [
        {
          option: "Learning cool things",
          archetype: ["Sage", "Detective", "Seeker", "Strategist"],
        },
        {
          option: "Having good friends and love",
          archetype: ["Empath", "Caregiver", "Networker", "Host"],
        },
        {
          option: "Being the leader or in charge",
          archetype: ["Ruler", "Warrior", "Guardian", "Magician"],
        },
        {
          option: "Doing your own thing and being free",
          archetype: ["Rebel", "Outlaw", "Creator", "Explorer"],
        },
        {
          option: "Trying to improve and do your best",
          archetype: ["Visionary", "Prophet", "Hero", "Chosen One"],
        },
        {
          option: "Feeling safe and staying loyal to people",
          archetype: ["Guardian", "Survivor", "Architect", "Advocate"],
        },
      ],
    },
    {
      question: "When there’s a fight or problem, what do you usually do?",
      options: [
        {
          option: "Speak up and say what you think",
          archetype: ["Warrior", "Rebel", "Hero", "Advocate"],
        },
        {
          option: "Try to make peace between people",
          archetype: ["Empath", "Host", "Hybrid", "Caregiver"],
        },
        {
          option: "Stay quiet and think about it a lot",
          archetype: ["Sage", "Mystic", "Seeker", "Detective"],
        },
        {
          option: "Stand up strong and fight for it",
          archetype: ["Hunter", "Warrior", "Survivor", "Ruler"],
        },
        {
          option: "Try to change how things work around you",
          archetype: ["Visionary", "Outlaw", "Prophet", "Trickster"],
        },
        {
          option: "Walk away and keep your peace",
          archetype: ["Explorer", "Shadow", "Mystic", "Polymath"],
        },
      ],
    },
    {
      question: "What scares you the most?",
      options: [
        {
          option: "Feeling useless or not good enough",
          archetype: ["Visionary", "Hustler", "Chosen One", "Creator"],
        },
        {
          option: "Hurting someone’s feelings or being alone",
          archetype: ["Empath", "Caregiver", "Host", "Advocate"],
        },
        {
          option: "Not having control or losing your power",
          archetype: ["Ruler", "Strategist", "Magician", "Guardian"],
        },
        {
          option: "Looking like a loser or failing at something",
          archetype: ["Warrior", "Hero", "Survivor", "Hunter"],
        },
        {
          option: "People not understanding you or ignoring you",
          archetype: ["Shadow", "Prophet", "Hybrid", "Outlaw"],
        },
        {
          option: "Being stuck in boring rules or routines",
          archetype: ["Explorer", "Rebel", "Seeker", "Trickster"],
        },
      ],
    },
    {
      question: "What makes your life feel important?",
      options: [
        {
          option: "Helping others feel happy and safe",
          archetype: ["Caregiver", "Empath", "Guardian", "Host"],
        },
        {
          option: "Learning new things and understanding stuff",
          archetype: ["Sage", "Seeker", "Detective", "Mystic"],
        },
        {
          option: "Building something big that lasts",
          archetype: ["Ruler", "Architect", "Strategist", "Visionary"],
        },
        {
          option: "Changing unfair things or shaking things up",
          archetype: ["Rebel", "Trickster", "Outlaw", "Saboteur"],
        },
        {
          option: "Getting really good at many things",
          archetype: ["Polymath", "Magician", "Hustler", "Creator"],
        },
        {
          option: "Being a leader and showing the way to others",
          archetype: ["Hero", "Chosen One", "Prophet", "Advocate"],
        },
      ],
    },
    {
      question: "What kind of person are you most like?",
      options: [
        {
          option: "Strong and caring",
          archetype: ["Guardian", "Warrior", "Caregiver", "Host"],
        },
        {
          option: "Curious and smart",
          archetype: ["Sage", "Seeker", "Detective", "Explorer"],
        },
        {
          option: "Brave and full of energy",
          archetype: ["Saboteur", "Shadow", "Prophet", "Survivor"],
        },
        {
          option: "Kind and helpful",
          archetype: ["Empath", "Host", "Networker", "Hybrid"],
        },
        {
          option: "Creative and fun",
          archetype: ["Creator", "Trickster", "Polymath", "Magician"],
        },
        {
          option: "Focused and a good planner",
          archetype: ["Strategist", "Ruler", "Visionary", "Hustler"],
        },
      ],
    },
    {
      question: "What bothers you the most about people?",
      options: [
        {
          option: "Lying or being fake",
          archetype: ["Detective", "Sage", "Prophet", "Guardian"],
        },
        {
          option: "Not being brave or sure of themselves",
          archetype: ["Warrior", "Hunter", "Hustler", "Hero"],
        },
        {
          option: "Acting like they know everything and won’t listen",
          archetype: ["Trickster", "Empath", "Hybrid", "Seeker"],
        },
        {
          option: "Being unfair or treating others badly",
          archetype: ["Advocate", "Rebel", "Chosen One", "Outlaw"],
        },
        {
          option: "Always following the same path, no fun or ideas",
          archetype: ["Creator", "Visionary", "Polymath", "Mystic"],
        },
        {
          option: "Making things messy or causing drama",
          archetype: ["Architect", "Ruler", "Strategist", "Host"],
        },
      ],
    },
    {
      question: "What do people usually praise you for?",
      options: [
        {
          option: "Being loyal and reliable",
          archetype: ["Guardian", "Host", "Architect", "Caregiver"],
        },
        {
          option: "Being smart and good at thinking",
          archetype: ["Sage", "Strategist", "Polymath", "Detective"],
        },
        {
          option: "Being bold and courageous",
          archetype: ["Warrior", "Hero", "Survivor", "Hunter"],
        },
        {
          option: "Being funny and friendly",
          archetype: ["Trickster", "Networker", "Hustler", "Creator"],
        },
        {
          option: "Being caring and understanding",
          archetype: ["Empath", "Mystic", "Seeker", "Advocate"],
        },
        {
          option: "Being a leader who gets things done",
          archetype: ["Ruler", "Visionary", "Chosen One", "Magician"],
        },
      ],
    },
    {
      question: "Which of these excites you the most?",
      options: [
        {
          option: "Solving a mystery or figuring things out",
          archetype: ["Detective", "Strategist", "Sage", "Polymath"],
        },
        {
          option: "Leading a group or starting something new",
          archetype: ["Ruler", "Hustler", "Visionary", "Architect"],
        },
        {
          option: "Going to new places and seeing new things",
          archetype: ["Explorer", "Seeker", "Outlaw", "Rebel"],
        },
        {
          option: "Making something cool that no one else has done",
          archetype: ["Creator", "Magician", "Visionary", "Polymath"],
        },
        {
          option: "Helping people change their lives for the better",
          archetype: ["Hero", "Advocate", "Caregiver", "Prophet"],
        },
        {
          option: "Standing up for someone who needs help",
          archetype: ["Guardian", "Warrior", "Survivor", "Hunter"],
        },
      ],
    },
    {
      question: "What is your biggest challenge sometimes?",
      options: [
        {
          option: "Thinking too much and feeling cold or distant",
          archetype: ["Sage", "Strategist", "Architect", "Seeker"],
        },
        {
          option:
            "Always trying to make everyone happy and forgetting yourself",
          archetype: ["Empath", "Caregiver", "Host", "Hybrid"],
        },
        {
          option: "Wanting too much control over everything",
          archetype: ["Ruler", "Warrior", "Magician", "Hero"],
        },
        {
          option: "Doing things without thinking or causing trouble",
          archetype: ["Saboteur", "Trickster", "Outlaw", "Shadow"],
        },
        {
          option: "Being scared of success or keeping yourself alone",
          archetype: ["Shadow", "Chosen One", "Mystic", "Polymath"],
        },
        {
          option: "Not listening to new ideas or being too strict",
          archetype: ["Guardian", "Architect", "Advocate", "Detective"],
        },
      ],
    },
    {
      question: "Which sentence feels the most like you?",
      options: [
        {
          option: "I protect others.",
          archetype: ["Guardian", "Caregiver", "Warrior", "Survivor"],
        },
        {
          option: "I help people change.",
          archetype: ["Magician", "Prophet", "Seeker", "Mystic"],
        },
        {
          option: "I show the way.",
          archetype: ["Hero", "Chosen One", "Visionary", "Advocate"],
        },
        {
          option: "I stand against unfair things.",
          archetype: ["Rebel", "Outlaw", "Trickster", "Saboteur"],
        },
        {
          option: "I make cool things.",
          archetype: ["Creator", "Polymath", "Networker", "Magician"],
        },
        {
          option: "I bring people together.",
          archetype: ["Empath", "Host", "Networker", "Hybrid"],
        },
      ],
    },
  ],
  "8-10": [
    {
      question: "What do you care about the most?",
      options: [
        {
          option: "Learning new things and gaining knowledge",
          archetype: ["Sage", "Detective", "Seeker", "Strategist"],
        },
        {
          option: "Building strong friendships and relationships",
          archetype: ["Empath", "Caregiver", "Networker", "Host"],
        },
        {
          option: "Having power and being in control of situations",
          archetype: ["Ruler", "Warrior", "Guardian", "Magician"],
        },
        {
          option: "Having freedom to express yourself your own way",
          archetype: ["Rebel", "Outlaw", "Creator", "Explorer"],
        },
        {
          option: "Improving yourself and making a difference",
          archetype: ["Visionary", "Prophet", "Hero", "Chosen One"],
        },
        {
          option: "Staying safe and being loyal to the people around you",
          archetype: ["Guardian", "Survivor", "Architect", "Advocate"],
        },
      ],
    },
    {
      question: "When you face a conflict or argument, what do you usually do?",
      options: [
        {
          option: "Speak up and clearly say what you believe is right",
          archetype: ["Warrior", "Rebel", "Hero", "Advocate"],
        },
        {
          option: "Try to calm everyone down and find peace between people",
          archetype: ["Empath", "Host", "Hybrid", "Caregiver"],
        },
        {
          option: "Step back and quietly think about what’s happening",
          archetype: ["Sage", "Mystic", "Seeker", "Detective"],
        },
        {
          option: "Confront the issue head-on and stand your ground",
          archetype: ["Hunter", "Warrior", "Survivor", "Ruler"],
        },
        {
          option: "Try to change the rules or fix the system itself",
          archetype: ["Visionary", "Outlaw", "Prophet", "Trickster"],
        },
        {
          option: "Walk away because you prefer peace over fighting",
          archetype: ["Explorer", "Shadow", "Mystic", "Polymath"],
        },
      ],
    },
    {
      question: "What scares you the most?",
      options: [
        {
          option: "Feeling stuck, useless, or left behind",
          archetype: ["Visionary", "Hustler", "Chosen One", "Creator"],
        },
        {
          option: "Hurting people you care about or being alone",
          archetype: ["Empath", "Caregiver", "Host", "Advocate"],
        },
        {
          option: "Losing control or not being able to manage things",
          archetype: ["Ruler", "Strategist", "Magician", "Guardian"],
        },
        {
          option: "Failing or being seen as weak",
          archetype: ["Warrior", "Hero", "Survivor", "Hunter"],
        },
        {
          option: "Being misunderstood or ignored",
          archetype: ["Shadow", "Prophet", "Hybrid", "Outlaw"],
        },
        {
          option: "Being trapped in boring routines or strict rules",
          archetype: ["Explorer", "Rebel", "Seeker", "Trickster"],
        },
      ],
    },
    {
      question: "What gives your life the most meaning?",
      options: [
        {
          option: "Helping and supporting others to feel safe and happy",
          archetype: ["Caregiver", "Empath", "Guardian", "Host"],
        },
        {
          option: "Discovering the truth and understanding how things work",
          archetype: ["Sage", "Seeker", "Detective", "Mystic"],
        },
        {
          option: "Building something important that lasts for a long time",
          archetype: ["Ruler", "Architect", "Strategist", "Visionary"],
        },
        {
          option: "Standing up against unfair systems or rules",
          archetype: ["Rebel", "Trickster", "Outlaw", "Saboteur"],
        },
        {
          option: "Learning multiple skills and becoming better at many things",
          archetype: ["Polymath", "Magician", "Hustler", "Creator"],
        },
        {
          option: "Leading people and showing them the right path",
          archetype: ["Hero", "Chosen One", "Prophet", "Advocate"],
        },
      ],
    },
    {
      question: "Which best describes your personality?",
      options: [
        {
          option: "Strong, protective, and reliable",
          archetype: ["Guardian", "Warrior", "Caregiver", "Host"],
        },
        {
          option: "Curious, smart, and eager to learn",
          archetype: ["Sage", "Seeker", "Detective", "Explorer"],
        },
        {
          option: "Brave, intense, and full of energy",
          archetype: ["Saboteur", "Shadow", "Prophet", "Survivor"],
        },
        {
          option: "Kind, caring, and always there for others",
          archetype: ["Empath", "Host", "Networker", "Hybrid"],
        },
        {
          option: "Creative, playful, and full of new ideas",
          archetype: ["Creator", "Trickster", "Polymath", "Magician"],
        },
        {
          option: "Focused, disciplined, and a good planner",
          archetype: ["Strategist", "Ruler", "Visionary", "Hustler"],
        },
      ],
    },
    {
      question: "What annoys you the most about others?",
      options: [
        {
          option: "When people lie or hide the truth",
          archetype: ["Detective", "Sage", "Prophet", "Guardian"],
        },
        {
          option: "When people give up too easily or are too soft",
          archetype: ["Warrior", "Hunter", "Hustler", "Hero"],
        },
        {
          option:
            "When people act like they know everything and refuse to listen",
          archetype: ["Trickster", "Empath", "Hybrid", "Seeker"],
        },
        {
          option: "When things are unfair or people treat others badly",
          archetype: ["Advocate", "Rebel", "Chosen One", "Outlaw"],
        },
        {
          option: "When everyone just follows the crowd without thinking",
          archetype: ["Creator", "Visionary", "Polymath", "Mystic"],
        },
        {
          option: "When things get messy, chaotic, or unorganized",
          archetype: ["Architect", "Ruler", "Strategist", "Host"],
        },
      ],
    },
    {
      question: "What do people usually appreciate about you?",
      options: [
        {
          option: "You are loyal and always there for them",
          archetype: ["Guardian", "Host", "Architect", "Caregiver"],
        },
        {
          option: "You are smart and solve problems well",
          archetype: ["Sage", "Strategist", "Polymath", "Detective"],
        },
        {
          option: "You are bold and courageous",
          archetype: ["Warrior", "Hero", "Survivor", "Hunter"],
        },
        {
          option: "You are funny, creative, and make people feel good",
          archetype: ["Trickster", "Networker", "Hustler", "Creator"],
        },
        {
          option: "You are understanding and supportive",
          archetype: ["Empath", "Mystic", "Seeker", "Advocate"],
        },
        {
          option: "You are a great leader who takes charge",
          archetype: ["Ruler", "Visionary", "Chosen One", "Magician"],
        },
      ],
    },
    {
      question: "Which of these activities excites you the most?",
      options: [
        {
          option: "Solving puzzles or uncovering hidden truths",
          archetype: ["Detective", "Strategist", "Sage", "Polymath"],
        },
        {
          option: "Taking charge of a group or starting a project",
          archetype: ["Ruler", "Hustler", "Visionary", "Architect"],
        },
        {
          option: "Traveling, exploring new places, and having adventures",
          archetype: ["Explorer", "Seeker", "Outlaw", "Rebel"],
        },
        {
          option: "Creating something original and exciting",
          archetype: ["Creator", "Magician", "Visionary", "Polymath"],
        },
        {
          option: "Helping others to learn, grow, or transform",
          archetype: ["Hero", "Advocate", "Caregiver", "Prophet"],
        },
        {
          option: "Protecting someone or standing up for what’s right",
          archetype: ["Guardian", "Warrior", "Survivor", "Hunter"],
        },
      ],
    },
    {
      question: "What do you sometimes struggle with?",
      options: [
        {
          option: "Overthinking or keeping distance from others",
          archetype: ["Sage", "Strategist", "Architect", "Seeker"],
        },
        {
          option: "Trying too hard to please everyone",
          archetype: ["Empath", "Caregiver", "Host", "Hybrid"],
        },
        {
          option: "Always wanting to control things",
          archetype: ["Ruler", "Warrior", "Magician", "Hero"],
        },
        {
          option: "Acting before thinking, being impulsive",
          archetype: ["Saboteur", "Trickster", "Outlaw", "Shadow"],
        },
        {
          option: "Being afraid of success or staying hidden",
          archetype: ["Shadow", "Chosen One", "Mystic", "Polymath"],
        },
        {
          option: "Being too strict or not open to new ideas",
          archetype: ["Guardian", "Architect", "Advocate", "Detective"],
        },
      ],
    },
    {
      question: "Which line feels most like you?",
      options: [
        {
          option: "I protect others.",
          archetype: ["Guardian", "Caregiver", "Warrior", "Survivor"],
        },
        {
          option: "I help people change and grow.",
          archetype: ["Magician", "Prophet", "Seeker", "Mystic"],
        },
        {
          option: "I guide people toward success.",
          archetype: ["Hero", "Chosen One", "Visionary", "Advocate"],
        },
        {
          option: "I stand against unfair rules.",
          archetype: ["Rebel", "Outlaw", "Trickster", "Saboteur"],
        },
        {
          option: "I create and bring ideas to life.",
          archetype: ["Creator", "Polymath", "Networker", "Magician"],
        },
        {
          option: "I bring people together and build connections.",
          archetype: ["Empath", "Host", "Networker", "Hybrid"],
        },
      ],
    },
  ],
  "11-12": [
    {
      question: "What do you value most deep down?",
      options: [
        {
          option: "Gaining knowledge and understanding how things work",
          archetype: ["Sage", "Detective", "Seeker", "Strategist"],
        },
        {
          option: "Building deep relationships and emotional connections",
          archetype: ["Empath", "Caregiver", "Networker", "Host"],
        },
        {
          option: "Having power, influence, and control over situations",
          archetype: ["Ruler", "Warrior", "Guardian", "Magician"],
        },
        {
          option: "Freedom to express yourself and live on your own terms",
          archetype: ["Rebel", "Outlaw", "Creator", "Explorer"],
        },
        {
          option: "Making progress toward a bigger purpose or goal",
          archetype: ["Visionary", "Prophet", "Hero", "Chosen One"],
        },
        {
          option:
            "Staying secure, loyal, and true to the people you care about",
          archetype: ["Guardian", "Survivor", "Architect", "Advocate"],
        },
      ],
    },
    {
      question:
        "When you face conflict or disagreement, how do you usually react?",
      options: [
        {
          option: "Speak up confidently and state your opinion",
          archetype: ["Warrior", "Rebel", "Hero", "Advocate"],
        },
        {
          option: "Try to bring peace and help everyone understand each other",
          archetype: ["Empath", "Host", "Hybrid", "Caregiver"],
        },
        {
          option: "Step back, observe, and analyze before responding",
          archetype: ["Sage", "Mystic", "Seeker", "Detective"],
        },
        {
          option: "Push through and confront the situation directly",
          archetype: ["Hunter", "Warrior", "Survivor", "Ruler"],
        },
        {
          option: "Question the system or suggest ways to change it",
          archetype: ["Visionary", "Outlaw", "Prophet", "Trickster"],
        },
        {
          option: "Walk away to avoid drama and maintain your peace",
          archetype: ["Explorer", "Shadow", "Mystic", "Polymath"],
        },
      ],
    },
    {
      question: "What is your biggest fear?",
      options: [
        {
          option: "Becoming irrelevant or feeling stuck",
          archetype: ["Visionary", "Hustler", "Chosen One", "Creator"],
        },
        {
          option: "Hurting others or ending up alone",
          archetype: ["Empath", "Caregiver", "Host", "Advocate"],
        },
        {
          option: "Losing control or structure in life",
          archetype: ["Ruler", "Strategist", "Magician", "Guardian"],
        },
        {
          option: "Being seen as weak or failing at something important",
          archetype: ["Warrior", "Hero", "Survivor", "Hunter"],
        },
        {
          option: "Being misunderstood, unseen, or unheard",
          archetype: ["Shadow", "Prophet", "Hybrid", "Outlaw"],
        },
        {
          option: "Feeling trapped by rules, expectations, or routine",
          archetype: ["Explorer", "Rebel", "Seeker", "Trickster"],
        },
      ],
    },
    {
      question: "What gives your life the most meaning?",
      options: [
        {
          option: "Supporting and helping others feel safe and cared for",
          archetype: ["Caregiver", "Empath", "Guardian", "Host"],
        },
        {
          option: "Searching for truth, knowledge, and deeper understanding",
          archetype: ["Sage", "Seeker", "Detective", "Mystic"],
        },
        {
          option: "Building or creating something meaningful and lasting",
          archetype: ["Ruler", "Architect", "Strategist", "Visionary"],
        },
        {
          option: "Challenging unfair systems or making space for new ideas",
          archetype: ["Rebel", "Trickster", "Outlaw", "Saboteur"],
        },
        {
          option:
            "Mastering different skills and continuously improving yourself",
          archetype: ["Polymath", "Magician", "Hustler", "Creator"],
        },
        {
          option: "Leading others toward positive change",
          archetype: ["Hero", "Chosen One", "Prophet", "Advocate"],
        },
      ],
    },
    {
      question: "How would your friends or family describe you?",
      options: [
        {
          option: "Protective and dependable",
          archetype: ["Guardian", "Warrior", "Caregiver", "Host"],
        },
        {
          option: "Curious and eager to learn",
          archetype: ["Sage", "Seeker", "Detective", "Explorer"],
        },
        {
          option: "Bold, intense, and driven",
          archetype: ["Saboteur", "Shadow", "Prophet", "Survivor"],
        },
        {
          option: "Kind, warm, and thoughtful toward others",
          archetype: ["Empath", "Host", "Networker", "Hybrid"],
        },
        {
          option: "Creative, original, and full of ideas",
          archetype: ["Creator", "Trickster", "Polymath", "Magician"],
        },
        {
          option: "Strategic, focused, and goal-oriented",
          archetype: ["Strategist", "Ruler", "Visionary", "Hustler"],
        },
      ],
    },
    {
      question: "What frustrates you most about others?",
      options: [
        {
          option: "Dishonesty or fake behavior",
          archetype: ["Detective", "Sage", "Prophet", "Guardian"],
        },
        {
          option: "Lack of courage or giving up too easily",
          archetype: ["Warrior", "Hunter", "Hustler", "Hero"],
        },
        {
          option: "Arrogance or people who don’t listen to others",
          archetype: ["Trickster", "Empath", "Hybrid", "Seeker"],
        },
        {
          option: "Injustice or people treating others unfairly",
          archetype: ["Advocate", "Rebel", "Chosen One", "Outlaw"],
        },
        {
          option: "Blindly following the crowd without thinking",
          archetype: ["Creator", "Visionary", "Polymath", "Mystic"],
        },
        {
          option: "Chaos, disorganization, or lack of structure",
          archetype: ["Architect", "Ruler", "Strategist", "Host"],
        },
      ],
    },
    {
      question: "What are you most often praised for?",
      options: [
        {
          option: "Being loyal and consistent",
          archetype: ["Guardian", "Host", "Architect", "Caregiver"],
        },
        {
          option: "Being insightful, logical, and smart",
          archetype: ["Sage", "Strategist", "Polymath", "Detective"],
        },
        {
          option: "Being bold, courageous, and determined",
          archetype: ["Warrior", "Hero", "Survivor", "Hunter"],
        },
        {
          option: "Being creative, fun, and engaging",
          archetype: ["Trickster", "Networker", "Hustler", "Creator"],
        },
        {
          option: "Being empathetic and understanding",
          archetype: ["Empath", "Mystic", "Seeker", "Advocate"],
        },
        {
          option: "Being a strong leader and getting results",
          archetype: ["Ruler", "Visionary", "Chosen One", "Magician"],
        },
      ],
    },
    {
      question: "Which scenario excites you the most?",
      options: [
        {
          option: "Solving complex problems or cracking a mystery",
          archetype: ["Detective", "Strategist", "Sage", "Polymath"],
        },
        {
          option: "Leading a team or launching a new project",
          archetype: ["Ruler", "Hustler", "Visionary", "Architect"],
        },
        {
          option: "Exploring new places and going on adventures",
          archetype: ["Explorer", "Seeker", "Outlaw", "Rebel"],
        },
        {
          option: "Inventing or building something original",
          archetype: ["Creator", "Magician", "Visionary", "Polymath"],
        },
        {
          option: "Supporting others through transformation and change",
          archetype: ["Hero", "Advocate", "Caregiver", "Prophet"],
        },
        {
          option: "Standing up for others and fighting for what’s right",
          archetype: ["Guardian", "Warrior", "Survivor", "Hunter"],
        },
      ],
    },
    {
      question: "What is your shadow side (something you struggle with)?",
      options: [
        {
          option: "Overthinking or being emotionally distant",
          archetype: ["Sage", "Strategist", "Architect", "Seeker"],
        },
        {
          option: "Trying too hard to please everyone",
          archetype: ["Empath", "Caregiver", "Host", "Hybrid"],
        },
        {
          option: "Needing too much control or dominance",
          archetype: ["Ruler", "Warrior", "Magician", "Hero"],
        },
        {
          option: "Acting on impulse or sabotaging things",
          archetype: ["Saboteur", "Trickster", "Outlaw", "Shadow"],
        },
        {
          option: "Fear of success or isolating yourself",
          archetype: ["Shadow", "Chosen One", "Mystic", "Polymath"],
        },
        {
          option: "Being too rigid or closed-minded",
          archetype: ["Guardian", "Architect", "Advocate", "Detective"],
        },
      ],
    },
    {
      question: "Which sentence feels most like you?",
      options: [
        {
          option: "I protect others.",
          archetype: ["Guardian", "Caregiver", "Warrior", "Survivor"],
        },
        {
          option: "I help people grow and change.",
          archetype: ["Magician", "Prophet", "Seeker", "Mystic"],
        },
        {
          option: "I guide others toward their goals.",
          archetype: ["Hero", "Chosen One", "Visionary", "Advocate"],
        },
        {
          option: "I stand up against what’s wrong.",
          archetype: ["Rebel", "Outlaw", "Trickster", "Saboteur"],
        },
        {
          option: "I create new things and bring ideas to life.",
          archetype: ["Creator", "Polymath", "Networker", "Magician"],
        },
        {
          option: "I bring people together and build strong connections.",
          archetype: ["Empath", "Host", "Networker", "Hybrid"],
        },
      ],
    },
  ],
  college: [
    {
      question: "What do you value the most at your core?",
      options: [
        {
          option: "Learning, knowledge, and understanding the bigger picture",
          archetype: ["Sage", "Detective", "Seeker", "Strategist"],
        },
        {
          option:
            "Deep connections, meaningful relationships, and emotional bonds",
          archetype: ["Empath", "Caregiver", "Networker", "Host"],
        },
        {
          option:
            "Power, leadership, and having control over your life and work",
          archetype: ["Ruler", "Warrior", "Guardian", "Magician"],
        },
        {
          option:
            "Freedom, independence, and expressing yourself authentically",
          archetype: ["Rebel", "Outlaw", "Creator", "Explorer"],
        },
        {
          option:
            "Purpose, growth, and contributing to something larger than yourself",
          archetype: ["Visionary", "Prophet", "Hero", "Chosen One"],
        },
        {
          option: "Security, stability, and loyalty to people or principles",
          archetype: ["Guardian", "Survivor", "Architect", "Advocate"],
        },
      ],
    },
    {
      question: "How do you usually handle conflicts or disagreements?",
      options: [
        {
          option: "Speak up boldly and assert your opinion",
          archetype: ["Warrior", "Rebel", "Hero", "Advocate"],
        },
        {
          option: "Try to mediate and maintain harmony between people",
          archetype: ["Empath", "Host", "Hybrid", "Caregiver"],
        },
        {
          option:
            "Reflect, analyze, and approach the issue calmly after thinking it through",
          archetype: ["Sage", "Mystic", "Seeker", "Detective"],
        },
        {
          option: "Directly confront and challenge the problem head-on",
          archetype: ["Hunter", "Warrior", "Survivor", "Ruler"],
        },
        {
          option: "Question the system and suggest better alternatives",
          archetype: ["Visionary", "Outlaw", "Prophet", "Trickster"],
        },
        {
          option: "Step away to avoid unnecessary drama and protect your peace",
          archetype: ["Explorer", "Shadow", "Mystic", "Polymath"],
        },
      ],
    },
    {
      question: "What is your biggest internal fear?",
      options: [
        {
          option: "Feeling stuck, unimportant, or left behind",
          archetype: ["Visionary", "Hustler", "Chosen One", "Creator"],
        },
        {
          option: "Hurting someone you care about or ending up isolated",
          archetype: ["Empath", "Caregiver", "Host", "Advocate"],
        },
        {
          option: "Losing control or having your authority questioned",
          archetype: ["Ruler", "Strategist", "Magician", "Guardian"],
        },
        {
          option: "Failing or being seen as weak or unsuccessful",
          archetype: ["Warrior", "Hero", "Survivor", "Hunter"],
        },
        {
          option: "Being misunderstood, misjudged, or unseen",
          archetype: ["Shadow", "Prophet", "Hybrid", "Outlaw"],
        },
        {
          option: "Being trapped in routines, expectations, or systems",
          archetype: ["Explorer", "Rebel", "Seeker", "Trickster"],
        },
      ],
    },
    {
      question: "What gives your life the strongest sense of meaning?",
      options: [
        {
          option: "Being there for others, supporting, and protecting them",
          archetype: ["Caregiver", "Empath", "Guardian", "Host"],
        },
        {
          option: "Exploring the truth, questioning, and seeking knowledge",
          archetype: ["Sage", "Seeker", "Detective", "Mystic"],
        },
        {
          option:
            "Building a project, career, or legacy that makes a lasting impact",
          archetype: ["Ruler", "Architect", "Strategist", "Visionary"],
        },
        {
          option:
            "Challenging the status quo and bringing fresh ideas or change",
          archetype: ["Rebel", "Trickster", "Outlaw", "Saboteur"],
        },
        {
          option: "Mastering various skills and always improving yourself",
          archetype: ["Polymath", "Magician", "Hustler", "Creator"],
        },
        {
          option: "Leading, motivating, and guiding others toward success",
          archetype: ["Hero", "Chosen One", "Prophet", "Advocate"],
        },
      ],
    },
    {
      question:
        "How would your friends, classmates, or colleagues describe you?",
      options: [
        {
          option: "Protective and reliable — someone they can count on",
          archetype: ["Guardian", "Warrior", "Caregiver", "Host"],
        },
        {
          option: "Curious, thoughtful, and insightful",
          archetype: ["Sage", "Seeker", "Detective", "Explorer"],
        },
        {
          option: "Intense, ambitious, and driven",
          archetype: ["Saboteur", "Shadow", "Prophet", "Survivor"],
        },
        {
          option: "Warm, empathetic, and always supportive",
          archetype: ["Empath", "Host", "Networker", "Hybrid"],
        },
        {
          option: "Creative, fun, and original in your ideas",
          archetype: ["Creator", "Trickster", "Polymath", "Magician"],
        },
        {
          option: "Focused, disciplined, and strategic",
          archetype: ["Strategist", "Ruler", "Visionary", "Hustler"],
        },
      ],
    },
    {
      question: "Which behavior frustrates you the most in other people?",
      options: [
        {
          option: "Dishonesty or lack of integrity",
          archetype: ["Detective", "Sage", "Prophet", "Guardian"],
        },
        {
          option: "Weakness, giving up easily, or lack of willpower",
          archetype: ["Warrior", "Hunter", "Hustler", "Hero"],
        },
        {
          option: "Arrogance or unwillingness to listen",
          archetype: ["Trickster", "Empath", "Hybrid", "Seeker"],
        },
        {
          option: "Injustice, hypocrisy, or people being treated unfairly",
          archetype: ["Advocate", "Rebel", "Chosen One", "Outlaw"],
        },
        {
          option: "Conformity and lack of creative thinking",
          archetype: ["Creator", "Visionary", "Polymath", "Mystic"],
        },
        {
          option: "Chaos, disorganization, or lack of structure",
          archetype: ["Architect", "Ruler", "Strategist", "Host"],
        },
      ],
    },
    {
      question: "What strengths do people often notice in you?",
      options: [
        {
          option: "Loyalty, responsibility, and dependability",
          archetype: ["Guardian", "Host", "Architect", "Caregiver"],
        },
        {
          option: "Intelligence, problem-solving, and analytical thinking",
          archetype: ["Sage", "Strategist", "Polymath", "Detective"],
        },
        {
          option: "Courage, boldness, and determination",
          archetype: ["Warrior", "Hero", "Survivor", "Hunter"],
        },
        {
          option: "Creativity, sense of humor, or being inspiring to others",
          archetype: ["Trickster", "Networker", "Hustler", "Creator"],
        },
        {
          option: "Emotional intelligence, empathy, and compassion",
          archetype: ["Empath", "Mystic", "Seeker", "Advocate"],
        },
        {
          option: "Leadership, vision, and ability to deliver results",
          archetype: ["Ruler", "Visionary", "Chosen One", "Magician"],
        },
      ],
    },
    {
      question: "Which of these activities excites you the most?",
      options: [
        {
          option: "Solving complex challenges or figuring out mysteries",
          archetype: ["Detective", "Strategist", "Sage", "Polymath"],
        },
        {
          option: "Leading teams or starting innovative projects",
          archetype: ["Ruler", "Hustler", "Visionary", "Architect"],
        },
        {
          option: "Traveling, exploring new ideas or cultures",
          archetype: ["Explorer", "Seeker", "Outlaw", "Rebel"],
        },
        {
          option: "Inventing, designing, or creating something new",
          archetype: ["Creator", "Magician", "Visionary", "Polymath"],
        },
        {
          option: "Coaching or mentoring people through change",
          archetype: ["Hero", "Advocate", "Caregiver", "Prophet"],
        },
        {
          option: "Standing up for justice and protecting others",
          archetype: ["Guardian", "Warrior", "Survivor", "Hunter"],
        },
      ],
    },
    {
      question: "What do you feel is your biggest challenge sometimes?",
      options: [
        {
          option: "Overthinking or being emotionally distant",
          archetype: ["Sage", "Strategist", "Architect", "Seeker"],
        },
        {
          option: "Saying yes too often and burning yourself out",
          archetype: ["Empath", "Caregiver", "Host", "Hybrid"],
        },
        {
          option: "Trying too hard to control everything",
          archetype: ["Ruler", "Warrior", "Magician", "Hero"],
        },
        {
          option: "Acting impulsively, making risky choices",
          archetype: ["Saboteur", "Trickster", "Outlaw", "Shadow"],
        },
        {
          option: "Fear of success, pressure, or choosing isolation",
          archetype: ["Shadow", "Chosen One", "Mystic", "Polymath"],
        },
        {
          option: "Sticking too rigidly to your plans or ideas",
          archetype: ["Guardian", "Architect", "Advocate", "Detective"],
        },
      ],
    },
    {
      question: "Which statement resonates with you the most?",
      options: [
        {
          option: "I protect and support others.",
          archetype: ["Guardian", "Caregiver", "Warrior", "Survivor"],
        },
        {
          option: "I help people transform and grow.",
          archetype: ["Magician", "Prophet", "Seeker", "Mystic"],
        },
        {
          option: "I guide people toward success and purpose.",
          archetype: ["Hero", "Chosen One", "Visionary", "Advocate"],
        },
        {
          option: "I challenge what’s wrong and push for change.",
          archetype: ["Rebel", "Outlaw", "Trickster", "Saboteur"],
        },
        {
          option: "I create and bring new ideas to life.",
          archetype: ["Creator", "Polymath", "Networker", "Magician"],
        },
        {
          option: "I connect people and build strong relationships.",
          archetype: ["Empath", "Host", "Networker", "Hybrid"],
        },
      ],
    },
  ],
  working: [
    {
      question: "What do you value the most in your work and life?",
      options: [
        {
          option: "Knowledge, learning, and understanding complex systems",
          archetype: ["Sage", "Detective", "Seeker", "Strategist"],
        },
        {
          option:
            "Building strong human connections and meaningful relationships",
          archetype: ["Empath", "Caregiver", "Networker", "Host"],
        },
        {
          option: "Leadership, power, and control over outcomes",
          archetype: ["Ruler", "Warrior", "Guardian", "Magician"],
        },
        {
          option: "Freedom, autonomy, and authentic self-expression",
          archetype: ["Rebel", "Outlaw", "Creator", "Explorer"],
        },
        {
          option: "Progress, growth, and contributing to a larger mission",
          archetype: ["Visionary", "Prophet", "Hero", "Chosen One"],
        },
        {
          option: "Stability, loyalty, and long-term security",
          archetype: ["Guardian", "Survivor", "Architect", "Advocate"],
        },
      ],
    },
    {
      question:
        "How do you usually respond to workplace conflicts or challenges?",
      options: [
        {
          option: "Speak up and assert your viewpoint directly",
          archetype: ["Warrior", "Rebel", "Hero", "Advocate"],
        },
        {
          option:
            "Focus on resolving the conflict and keeping the team together",
          archetype: ["Empath", "Host", "Hybrid", "Caregiver"],
        },
        {
          option:
            "Take time to analyze, reflect, and then respond thoughtfully",
          archetype: ["Sage", "Mystic", "Seeker", "Detective"],
        },
        {
          option: "Confront the issue head-on without hesitation",
          archetype: ["Hunter", "Warrior", "Survivor", "Ruler"],
        },
        {
          option: "Push for system-wide improvements or policy changes",
          archetype: ["Visionary", "Outlaw", "Prophet", "Trickster"],
        },
        {
          option:
            "Step away from conflict when possible to maintain your own peace",
          archetype: ["Explorer", "Shadow", "Mystic", "Polymath"],
        },
      ],
    },
    {
      question: "What is your biggest professional fear?",
      options: [
        {
          option: "Becoming irrelevant, stuck, or unimportant",
          archetype: ["Visionary", "Hustler", "Chosen One", "Creator"],
        },
        {
          option: "Damaging relationships or ending up isolated",
          archetype: ["Empath", "Caregiver", "Host", "Advocate"],
        },
        {
          option: "Losing control over your work or leadership position",
          archetype: ["Ruler", "Strategist", "Magician", "Guardian"],
        },
        {
          option: "Failing or being perceived as weak or incapable",
          archetype: ["Warrior", "Hero", "Survivor", "Hunter"],
        },
        {
          option: "Being misunderstood, unheard, or overlooked",
          archetype: ["Shadow", "Prophet", "Hybrid", "Outlaw"],
        },
        {
          option: "Feeling trapped by rigid systems or roles",
          archetype: ["Explorer", "Rebel", "Seeker", "Trickster"],
        },
      ],
    },
    {
      question: "What gives your career or life the most meaning?",
      options: [
        {
          option: "Supporting and mentoring others",
          archetype: ["Caregiver", "Empath", "Guardian", "Host"],
        },
        {
          option:
            "Discovering insights, learning, and solving complex problems",
          archetype: ["Sage", "Seeker", "Detective", "Mystic"],
        },
        {
          option: "Building sustainable, impactful projects or businesses",
          archetype: ["Ruler", "Architect", "Strategist", "Visionary"],
        },
        {
          option: "Challenging norms and bringing innovation",
          archetype: ["Rebel", "Trickster", "Outlaw", "Saboteur"],
        },
        {
          option: "Mastering various skills, growing continuously",
          archetype: ["Polymath", "Magician", "Hustler", "Creator"],
        },
        {
          option: "Leading teams and inspiring change",
          archetype: ["Hero", "Chosen One", "Prophet", "Advocate"],
        },
      ],
    },
    {
      question:
        "How would your colleagues or team members likely describe you?",
      options: [
        {
          option: "Protective, reliable, and dependable",
          archetype: ["Guardian", "Warrior", "Caregiver", "Host"],
        },
        {
          option: "Inquisitive, thoughtful, and always learning",
          archetype: ["Sage", "Seeker", "Detective", "Explorer"],
        },
        {
          option: "Intense, passionate, and driven to succeed",
          archetype: ["Saboteur", "Shadow", "Prophet", "Survivor"],
        },
        {
          option: "Warm, empathetic, and supportive",
          archetype: ["Empath", "Host", "Networker", "Hybrid"],
        },
        {
          option: "Creative, visionary, and full of fresh ideas",
          archetype: ["Creator", "Trickster", "Polymath", "Magician"],
        },
        {
          option: "Strategic, disciplined, and results-oriented",
          archetype: ["Strategist", "Ruler", "Visionary", "Hustler"],
        },
      ],
    },
    {
      question: "Which behavior frustrates you the most in the workplace?",
      options: [
        {
          option: "Dishonesty or a lack of integrity",
          archetype: ["Detective", "Sage", "Prophet", "Guardian"],
        },
        {
          option: "Giving up easily or lacking resilience",
          archetype: ["Warrior", "Hunter", "Hustler", "Hero"],
        },
        {
          option: "Arrogance or refusing to listen to feedback",
          archetype: ["Trickster", "Empath", "Hybrid", "Seeker"],
        },
        {
          option: "Injustice, favoritism, or unethical behavior",
          archetype: ["Advocate", "Rebel", "Chosen One", "Outlaw"],
        },
        {
          option: "Playing it too safe, conformity, or a lack of creativity",
          archetype: ["Creator", "Visionary", "Polymath", "Mystic"],
        },
        {
          option: "Disorganization or lack of proper structure",
          archetype: ["Architect", "Ruler", "Strategist", "Host"],
        },
      ],
    },
    {
      question:
        "What are you most often recognized or appreciated for at work?",
      options: [
        {
          option: "Loyalty, commitment, and reliability",
          archetype: ["Guardian", "Host", "Architect", "Caregiver"],
        },
        {
          option: "Smart thinking, problem-solving, and analytical skills",
          archetype: ["Sage", "Strategist", "Polymath", "Detective"],
        },
        {
          option: "Bravery, risk-taking, and determination",
          archetype: ["Warrior", "Hero", "Survivor", "Hunter"],
        },
        {
          option: "Creativity, humor, or ability to energize the environment",
          archetype: ["Trickster", "Networker", "Hustler", "Creator"],
        },
        {
          option: "Emotional intelligence, empathy, and compassion",
          archetype: ["Empath", "Mystic", "Seeker", "Advocate"],
        },
        {
          option: "Leadership, vision, and ability to drive results",
          archetype: ["Ruler", "Visionary", "Chosen One", "Magician"],
        },
      ],
    },
    {
      question: "Which scenario feels the most exciting to you?",
      options: [
        {
          option: "Solving challenging problems or uncovering insights",
          archetype: ["Detective", "Strategist", "Sage", "Polymath"],
        },
        {
          option:
            "Starting a new initiative, leading a team, or launching a project",
          archetype: ["Ruler", "Hustler", "Visionary", "Architect"],
        },
        {
          option: "Exploring new opportunities, markets, or approaches",
          archetype: ["Explorer", "Seeker", "Outlaw", "Rebel"],
        },
        {
          option: "Innovating and creating something unique",
          archetype: ["Creator", "Magician", "Visionary", "Polymath"],
        },
        {
          option:
            "Mentoring, coaching, or guiding others to achieve their potential",
          archetype: ["Hero", "Advocate", "Caregiver", "Prophet"],
        },
        {
          option:
            "Standing up for what’s right and protecting people or values",
          archetype: ["Guardian", "Warrior", "Survivor", "Hunter"],
        },
      ],
    },
    {
      question: "What do you see as your biggest internal challenge?",
      options: [
        {
          option: "Overthinking, analysis paralysis, or emotional distance",
          archetype: ["Sage", "Strategist", "Architect", "Seeker"],
        },
        {
          option: "Putting others’ needs before your own too often",
          archetype: ["Empath", "Caregiver", "Host", "Hybrid"],
        },
        {
          option: "Struggling to let go of control",
          archetype: ["Ruler", "Warrior", "Magician", "Hero"],
        },
        {
          option: "Acting impulsively or being self-destructive",
          archetype: ["Saboteur", "Trickster", "Outlaw", "Shadow"],
        },
        {
          option: "Fear of success, perfectionism, or choosing isolation",
          archetype: ["Shadow", "Chosen One", "Mystic", "Polymath"],
        },
        {
          option: "Being too rigid or resistant to change",
          archetype: ["Guardian", "Architect", "Advocate", "Detective"],
        },
      ],
    },
    {
      question: "Which statement best describes your work style?",
      options: [
        {
          option: "I protect and support those around me.",
          archetype: ["Guardian", "Caregiver", "Warrior", "Survivor"],
        },
        {
          option: "I help people transform and achieve their best.",
          archetype: ["Magician", "Prophet", "Seeker", "Mystic"],
        },
        {
          option: "I guide others toward success and purpose.",
          archetype: ["Hero", "Chosen One", "Visionary", "Advocate"],
        },
        {
          option: "I challenge norms and push for meaningful change.",
          archetype: ["Rebel", "Outlaw", "Trickster", "Saboteur"],
        },
        {
          option: "I create new ideas and make things happen.",
          archetype: ["Creator", "Polymath", "Networker", "Magician"],
        },
        {
          option: "I build connections and bring people together.",
          archetype: ["Empath", "Host", "Networker", "Hybrid"],
        },
      ],
    },
  ],
};
