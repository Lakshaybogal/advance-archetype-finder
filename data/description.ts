export const ARCHETYPE_DESCRIPTIONS: Record<
  string,
  {
    name: string;
    description: string;
    fear: string;
    desire: string;
    traits: string;
    strengths: string;
    weaknesses: string;
    clashes: string;
    connects: string;
  }
> = {
  Ruler: {
    name: "The Ruler",
    description:
      "The Ruler is driven by a deep need to bring structure to their surroundings. They believe order creates safety and predictability—not just for themselves but for everyone under their influence. Think of a startup founder who builds a company from scratch, outlining systems, hierarchies, and SOPs. For a Ruler, power isn’t about dominance, it’s about responsibility.",
    desire:
      "Control and Stability: The Ruler is driven by a deep need to bring structure to their surroundings. They believe order creates safety and predictability—not just for themselves but for everyone under their influence.",
    fear: "Chaos and Loss of Power: A lack of control feels like free fall to the Ruler. They fear that if they don’t hold the reins, things will spiral into disorder. A family matriarch fearing generational disconnect or a politician worried about losing public trust are both haunted by this archetypal fear—of irrelevance and loss of command.",
    traits:
      "Authoritative, Commanding, Responsible: Rulers walk into rooms and people notice. They speak with weight and lead by example. Others might see them as intimidating, but they see themselves as dutiful. They’re often the first to arrive and the last to leave, making sure all the wheels are turning.",
    strengths:
      "Leadership, Structure, Confidence: They can lead nations or organizations with clarity, setting standards and keeping promises. When everyone else is panicking, they often stay calm and decisive. Think of Barack Obama during a crisis—measured, confident, and focused.",
    weaknesses:
      "Arrogance, Control Issues: At their worst, Rulers believe 'my way or the highway.' They may ignore valuable input, refuse to delegate, or become authoritarian. They can over-identify with their title or role and forget to be vulnerable or flexible when needed.",
    clashes:
      "Rebel, Trickster: They clash with those who challenge systems. Rebels want to tear down what the Ruler built; Tricksters mock their rules and expose their flaws. These archetypes force Rulers to evolve—or harden further.",
    connects:
      "Sage, Architect: The Sage helps Rulers act with wisdom, not just power. The Architect assists in translating their vision into reality. Together, they can build systems that endure.",
  },
  Rebel: {
    name: "The Rebel",
    description:
      "The Rebel is born to challenge the status quo. Whether it’s questioning societal norms, breaking traditions, or flipping industries upside down, the Rebel wants liberation. Think of Greta Thunberg—young, fiery, refusing to conform to expectations of politeness or obedience in the face of global crises.",
    desire:
      "Revolution and Freedom: The Rebel is born to challenge the status quo. Whether it’s questioning societal norms, breaking traditions, or flipping industries upside down, the Rebel wants liberation.",
    fear: "Powerlessness and Conformity: Nothing terrifies a Rebel more than becoming 'just like everyone else.' Conformity feels like death—it’s a slow erasure of their identity. Being silenced, restrained, or ignored feels like betrayal. They often overcompensate by constantly pushing boundaries.",
    traits:
      "Disruptive, Passionate, Defiant: They may seem confrontational or difficult, but Rebels are fiercely loyal to their values. They can’t sit quietly when something feels unjust. Their energy is raw and electric, and they often don’t wait for permission—they take action.",
    strengths:
      "Innovation, Bravery: Rebels spark revolutions, start trends, and stand up for those who can’t. They don’t flinch at risk, and their courage can create extraordinary change. Think of Elon Musk disrupting multiple industries or Malala standing up to an oppressive regime.",
    weaknesses:
      "Impulsiveness, Alienation: Their intensity can alienate others. They may act too quickly without thinking of the consequences or burn bridges in their pursuit of freedom. If unchecked, they can become rebels without a cause—disrupting for the sake of it.",
    clashes:
      "Ruler, Guardian: Rebels naturally push against the systems Rulers build and the values Guardians defend. These clashes are often intense and can lead to massive transformation—or collapse.",
    connects:
      "Trickster, Visionary: Tricksters give Rebels the tools of irony and wit to outsmart their opponents. Visionaries share the Rebel’s hunger for a better future. Together, they’re revolutionaries with direction.",
  },
  Strategist: {
    name: "The Strategist",
    description:
      "Strategists dream not just of winning but of winning wisely. They’re obsessed with making moves that create sustainable impact. A chess grandmaster, a political analyst, or a market analyst—they all live in this archetype's psyche.",
    desire:
      "Long-term Success Through Planning: Strategists dream not just of winning but of winning wisely. They’re obsessed with making moves that create sustainable impact.",
    fear: "Unpreparedness, Randomness: Random events terrify Strategists. They fear surprises, lack of foresight, and being caught off guard. They often have backup plans for their backup plans, and chaos feels like personal failure.",
    traits:
      "Calculating, Rational, Visionary: They are logical, composed, and forward-thinking. They weigh consequences before taking action and prefer to act only when the odds are in their favor. Their presence is often calm, deliberate, and slightly mysterious.",
    strengths:
      "Foresight, Discipline: Strategists can see patterns others miss. They’re long-term thinkers who don’t get caught in trends—they build strategies that endure. Think of Warren Buffett’s patient, calculated investing style.",
    weaknesses:
      "Overthinking, Coldness: Because they’re so focused on outcomes, Strategists may neglect relationships, spontaneity, or emotional cues. They can seem cold or distant. Their caution can make them slow to act, even when speed is required.",
    clashes:
      "Warrior, Empath: They clash with Warriors who prefer instinct over planning, and with Empaths who lead from the heart rather than the head. These clashes often reveal the Strategist’s blind spots in human understanding.",
    connects:
      "Ruler, Sage: Rulers give the Strategist real-world power to implement ideas. Sages expand their wisdom and provide moral guidance. Together, they form the brains behind most successful legacies.",
  },
  Warrior: {
    name: "The Warrior",
    description:
      "The Warrior wants to earn their place through action. They live to push limits, conquer challenges, and be respected for their strength. Whether it’s dominating in sports, fighting injustice, or building a business from the ground up, they need to prove their power.",
    desire:
      "Courage, Conquest, Respect: The Warrior wants to earn their place through action. They live to push limits, conquer challenges, and be respected for their strength.",
    fear: "Weakness, Surrender: To a Warrior, being seen as weak or giving up is unbearable. Failure isn’t just a setback—it feels like defeat of the spirit. They often fear becoming dependent, vulnerable, or insignificant.",
    traits:
      "Competitive, Relentless, Driven: They thrive in high-pressure environments. Competition energizes them. They rarely give up and often push themselves (and others) harder than necessary.",
    strengths:
      "Determination, Bravery: Their courage in the face of adversity is unmatched. Warriors are the ones who step up when others step back. They break barriers, charge ahead, and inspire others through action. Think of Serena Williams, fighting on and off the court.",
    weaknesses:
      "Aggression, Burnout: Relentless pursuit can lead to exhaustion. Warriors can become combative, impatient, or authoritarian. They may ignore emotional needs and view vulnerability as weakness—even in others.",
    clashes:
      "Sage, Caregiver: Sages frustrate them with abstract thinking instead of action. Caregivers, who lead with softness, can feel too passive or idealistic. Warriors want results now, not introspection or nurturing.",
    connects:
      "Guardian, Ruler: They align naturally with those who value discipline and structure. Guardians share their sense of duty, and Rulers help them channel their strength toward purposeful leadership.",
  },
  Sage: {
    name: "The Sage",
    description:
      "Sages live for understanding. Their desire is not to control or conquer—but to know. Whether they’re diving into philosophy, studying human behavior, or experimenting in labs, they chase truth and insight.",
    desire:
      "Wisdom, Clarity: Sages live for understanding. Their desire is not to control or conquer—but to know.",
    fear: "Deception, Ignorance: Their deepest fear is living in falsehood. They dread being misled, tricked, or intellectually trapped. The idea of being wrong—or worse, unaware of it—causes existential discomfort.",
    traits:
      "Analytical, Reflective, Curious: They ask questions others miss. They sit quietly in rooms, listening more than they speak. They process deeply, observing the world like a puzzle to be decoded.",
    strengths:
      "Intelligence, Objectivity: They bring clarity where there is confusion. Their thinking is sharp, non-reactive, and layered. In moments of crisis, they offer perspective. Think of Carl Jung or Yuval Noah Harari—masters of interpreting complex realities.",
    weaknesses:
      "Indecisive, Aloof: Because they see so many sides, Sages may struggle to choose one. They can feel emotionally distant or frustratingly noncommittal. Their obsession with objectivity may leave them emotionally disengaged or inaccessible to others.",
    clashes:
      "Hustler, Warrior: They dislike the Hustler’s obsession with shortcuts and success-at-any-cost, and they struggle with the Warrior’s emotional reactivity and brute force mentality.",
    connects:
      "Strategist, Mystic: They thrive alongside Strategists who appreciate thoughtfulness, and Mystics who expand their perception into the spiritual and intuitive realms.",
  },
  Mystic: {
    name: "The Mystic",
    description:
      "The Mystic seeks connection—not to society, but to the unseen. They long for inner peace, divine truth, or a sense of spiritual oneness. Think of a healer, a monk, a tarot reader, or someone who finds meaning through meditation and stillness.",
    desire:
      "Inner Truth, Spiritual Understanding: The Mystic seeks connection—not to society, but to the unseen. They long for inner peace, divine truth, or a sense of spiritual oneness.",
    fear: "Disconnection from Spirit/Self: Losing touch with their inner voice, intuition, or purpose feels terrifying. Mystics dread becoming just another cog in the machine.",
    traits:
      "Intuitive, Meditative, Ethereal: They have a still presence—soft-spoken, often misunderstood, but deeply insightful. They often speak in metaphors and express wisdom that feels beyond logic.",
    strengths:
      "Depth, Serenity: Mystics are grounded in a deep kind of calm that soothes others. They don’t need external validation. They see beyond surface realities and help others find clarity through reflection. Think of the Dalai Lama or Maya Angelou’s poetic spiritualism.",
    weaknesses:
      "Vagueness, Impracticality: They can struggle to express themselves clearly or take action. Their wisdom may sound abstract or inaccessible. In fast-paced environments, they may seem detached or out of touch with reality.",
    clashes:
      "Ruler, Hustler: Rulers frustrate them with rigidity and obsession with control. Hustlers' materialism and restlessness feel jarring to the Mystic’s inner world.",
    connects:
      "Sage, Seeker: They bond with those on a similar path of meaning. Sages connect intellectually, while Seekers resonate with their spiritual longing.",
  },
  Detective: {
    name: "The Detective",
    description:
      "The Detective is on a mission to uncover what others overlook. They want facts, patterns, and solid conclusions. Whether it’s solving crimes, decoding financial reports, or uncovering secrets in relationships, they thrive on proving what’s real.",
    desire:
      "Truth Through Evidence: The Detective is on a mission to uncover what others overlook. They want facts, patterns, and solid conclusions.",
    fear: "Unsolved Mysteries, Deception: Uncertainty drives them crazy. They fear being misled, manipulated, or left in the dark. An unsolved question nags at them like an itch they can’t reach.",
    traits:
      "Observant, Curious, Skeptical: They catch the details others miss—tone of voice, body language, inconsistencies in stories. They’re often quiet in groups, processing deeply.",
    strengths:
      "Problem-Solving, Logic: Detectives make excellent troubleshooters. Whether in forensics or corporate audits, they spot flaws and bring clarity. Think of Sherlock Holmes or Lisbeth Salander.",
    weaknesses:
      "Distrustful, Obsessive: Because they’re always analyzing, Detectives can struggle to relax or take things at face value. They might doubt even when there’s no need or push people away with their probing nature.",
    clashes:
      "Mystic, Outlaw: Mystics frustrate them with vagueness and a lack of tangible proof. Outlaws break rules and thrive in unpredictability, making them hard to decode.",
    connects:
      "Sage, Strategist: They feel at home with Sages who value knowledge and Strategists who admire their systematic approach.",
  },
  Creator: {
    name: "The Creator",
    description:
      "The Creator burns to bring what’s inside them out into the world—art, ideas, innovations. They want to leave something that feels uniquely theirs. Whether it’s painting, coding, writing, or design, they find meaning in creation.",
    desire:
      "Originality, Expression: The Creator burns to bring what’s inside them out into the world—art, ideas, innovations.",
    fear: "Mediocrity, Unfulfilled Potential: Their nightmare is blandness. They dread becoming a copy of someone else or watching their talent go to waste.",
    traits:
      "Imaginative, Expressive, Driven: They’re bursting with ideas and often find the ordinary dull. Their thoughts come in metaphors, melodies, colors.",
    strengths:
      "Creativity, Passion: When they’re in flow, Creators produce brilliance. They see connections others don’t and can create beauty from chaos. Think Pixar storytellers or indie musicians.",
    weaknesses:
      "Perfectionism, Volatility: Creators can be their own worst critics. Their fear of not living up to their vision can paralyze them.",
    clashes:
      "Ruler, Saboteur: Rulers impose structure that can feel stifling, while Saboteurs embody inner demons Creators try to avoid.",
    connects:
      "Visionary, Magician: They click with Visionaries who share their big ideas and Magicians who add a sense of mystery and transformation.",
  },
  Visionary: {
    name: "The Visionary",
    description:
      "Visionaries want to change the world—not tweak it, transform it. They’re often ahead of their time, dreaming of possibilities others can’t yet see.",
    desire:
      "Progress, Shaping the Future: Visionaries want to change the world—not tweak it, transform it.",
    fear: "Being Stuck in the Past: Routine and tradition make them restless. They fear irrelevance, stagnation, or becoming trapped in a system they didn’t create.",
    traits:
      "Innovative, Bold, Idealistic: They often come across as eccentric or intense. But they’re vision-driven and unafraid to speak what others whisper.",
    strengths:
      "Inspiration, Originality: They can spark revolutions of thought, technology, or culture. Think of Steve Jobs or Martin Luther King Jr.",
    weaknesses:
      "Unrealistic, Detached: Their heads can be so far in the clouds they forget the ground. They may ignore logistics or struggle with timelines.",
    clashes:
      "Guardian, Shadow: Guardians defend tradition, which can feel suffocating to Visionaries. Shadows represent repressed truths they sometimes ignore.",
    connects:
      "Rebel, Creator: They thrive around Rebels who challenge norms and Creators who bring their visions to life.",
  },
  Architect: {
    name: "The Architect",
    description:
      "The Architect seeks to build systems that last—frameworks that make life more efficient and functional. Their joy lies in crafting environments that work seamlessly.",
    desire:
      "Order Through Design: The Architect seeks to build systems that last—frameworks that make life more efficient and functional.",
    fear: "Chaos, Lack of Structure: Architects fear unpredictability. Disorder makes them feel lost or ineffective.",
    traits:
      "Precise, Organized, Constructive: They are methodical and logical. Everything has a place, and everything should have a reason.",
    strengths:
      "Planning, Efficiency: Architects are masters of logistics and design. Think engineers building clean energy infrastructure or software architects.",
    weaknesses:
      "Rigidity, Perfectionism: They can get stuck in the planning phase, constantly tweaking instead of launching.",
    clashes:
      "Trickster, Outlaw: Tricksters mock their need for logic, and Outlaws resist their systems entirely.",
    connects:
      "Ruler, Strategist: They pair well with Rulers who implement their designs and Strategists who provide long-term vision.",
  },

  Empath: {
    name: "The Empath",
    description:
      "Empaths want to help others feel seen, safe, and emotionally whole. They’re driven by a desire to soothe pain and restore harmony, often putting others before themselves.",
    desire:
      "Connection, Healing: Empaths want to help others feel seen, safe, and emotionally whole. Their love language is service and understanding.",
    fear: "Emotional Abandonment, Numbness: They fear emotional disconnection—either from others or within themselves. Being ignored or dismissed feels devastating.",
    traits:
      "Compassionate, Intuitive, Nurturing: They instinctively understand unspoken feelings. They notice the emotional undercurrents in every group.",
    strengths:
      "Emotional Intelligence, Warmth: Empaths comfort, heal, and connect people like few others can. Think of Mister Rogers or Brené Brown.",
    weaknesses:
      "Overwhelm, People-Pleasing: They absorb emotions like a sponge, leading to burnout. Their kindness makes them vulnerable to manipulation.",
    clashes:
      "Warrior, Saboteur: Warriors may dismiss their sensitivity, while Saboteurs trigger the very wounds Empaths try to heal.",
    connects:
      "Caregiver, Mystic: They bond deeply with Caregivers who share their nurturing nature and Mystics who help them reconnect with their spiritual center.",
  },
  Networker: {
    name: "The Networker",
    description:
      "The Networker craves connection—not just emotionally, but socially and professionally. They want to be the glue that brings people together, creating opportunities and communities.",
    desire:
      "Belonging, Social Influence: The Networker shines at parties, conferences, and in DMs. For them, relationships are currency.",
    fear: "Isolation, Irrelevance: Being left out is painful, but feeling forgettable is worse. They fear losing their voice or access.",
    traits:
      "Charming, Adaptable, Communicative: They read rooms quickly and know how to connect across personalities.",
    strengths:
      "Charisma, Connection: They are incredible relationship builders—warm, quick-witted, and emotionally intelligent. Think of Oprah or Gary Vee.",
    weaknesses:
      "Superficiality, Manipulation: When misaligned, their charm becomes calculation. They may collect connections without depth.",
    clashes:
      "Sage, Seeker: Sages dislike superficial charm, and Seekers find Networkers too distracted from deeper meaning.",
    connects:
      "Host, Hustler: They work beautifully with Hosts who value hospitality and Hustlers who appreciate their access and persuasion skills.",
  },
  Host: {
    name: "The Host",
    description:
      "The Host thrives on creating comfort. They love curating spaces where people feel at ease, valued, and looked after. Their joy lies in making others feel at home.",
    desire:
      "Make Others Feel Welcome: Hosts love curating spaces—literal or emotional—where people feel at ease, valued, and looked after.",
    fear: "Disapproval, Rejection: Their biggest fear is making someone feel unwelcome—or being unwelcome themselves.",
    traits:
      "Hospitable, Detail-Oriented, Warm: They remember birthdays, refill your coffee, and make sure everyone is introduced at gatherings.",
    strengths:
      "Organization, Care: Hosts create livable, cohesive, and harmonious environments. Think of Martha Stewart or the person who keeps the office culture alive.",
    weaknesses:
      "Over-Accommodation, Burnout: They can overextend themselves trying to please everyone, often saying yes when they mean no.",
    clashes:
      "Outlaw, Warrior: Outlaws reject social niceties, and Warriors bulldoze sensitivity. These personalities can challenge the Host’s peacekeeping nature.",
    connects:
      "Networker, Caregiver: They bond deeply with Networkers who love people and Caregivers who share their instinct to serve.",
  },
  Explorer: {
    name: "The Explorer",
    description:
      "Explorers are always chasing what’s just over the next hill—travel, knowledge, new experiences, or self-discovery. They value autonomy and seek meaning through adventure.",
    desire:
      "Freedom, Discovery: Explorers are always chasing what’s just over the next hill. Their joy is in the journey.",
    fear: "Confinement, Routine: Nothing terrifies an Explorer more than being stuck—geographically, emotionally, or mentally.",
    traits:
      "Adventurous, Independent, Curious: They’re the first to try new things, the first to leave a dead-end job, the ones who backpack across continents alone.",
    strengths:
      "Adaptability, Courage: Explorers excel in unfamiliar situations. Think of Anthony Bourdain or anyone who constantly reinvents themselves.",
    weaknesses:
      "Restlessness, Detachment: Too much change can leave them ungrounded. Commitment can feel scary because it limits possibility.",
    clashes:
      "Ruler, Host: Rulers frustrate them with rules; Hosts with expectations of emotional consistency. These clashes highlight freedom vs. stability.",
    connects:
      "Seeker, Visionary: They resonate with Seekers who share their inner restlessness and Visionaries who are future-focused.",
  },
  Survivor: {
    name: "The Survivor",
    description:
      "The Survivor wants to make it through—not just to survive, but to triumph over adversity. Their identity is rooted in grit, and they carry a 'no matter what, I’ll survive' mindset.",
    desire:
      "Endurance, Overcoming Odds: Survivors find meaning in resilience. Whether it’s beating illness or escaping hardship, their identity is rooted in grit.",
    fear: "Failure, Defeat: Their biggest fear is giving up or being taken down by circumstances. Failure isn’t just a moment—it’s a betrayal of all the pain they’ve endured.",
    traits:
      "Gritty, Resourceful, Determined: They’re street-smart, tough, and incredibly self-sufficient. Survivors rarely ask for help—they’ve learned to rely on themselves.",
    strengths:
      "Resilience, Willpower: They can take what would destroy most people and come back stronger. Think Oprah Winfrey or Bethany Hamilton.",
    weaknesses:
      "Isolation, Distrust: Survivors can become overly guarded or assume no one understands their struggle. Emotional armor keeps others at arm’s length.",
    clashes:
      "Empath, Networker: They may feel judged by Empaths who emphasize softness, and Networkers who seem too socially driven.",
    connects:
      "Warrior, Hunter: They align with those who understand struggle and strength. Together, they push each other to keep aiming higher.",
  },

  Hunter: {
    name: "The Hunter",
    description:
      "The Hunter lives for the thrill of the chase—setting a goal and going after it with precision. Whether it’s closing a deal, achieving peak performance, or pursuing a life partner, they’re motivated by targets.",
    desire:
      "Pursuit, Achievement: The Hunter lives for the thrill of the chase—setting a goal and going after it with precision.",
    fear: "Failure to Capture or Achieve: Falling short feels like personal failure. Hunters hate wasted effort or missed opportunities.",
    traits:
      "Focused, Determined, Assertive: Once a Hunter locks in on something, they go all in. Distractions annoy them. They are assertive and goal-oriented.",
    strengths:
      "Persistence, Precision: Hunters rarely give up. They refine their strategy and push through challenges. Think of elite athletes or top-performing salespeople.",
    weaknesses:
      "Obsession, Narrow Vision: They can fixate to a fault, ignoring other areas of life or dismissing anything not linked to the mission.",
    clashes:
      "Mystic, Host: Mystics focus inward, which Hunters may find abstract or frustrating. Hosts prioritize group harmony, which may feel inefficient to the Hunter.",
    connects:
      "Warrior, Survivor: They align with those who understand struggle and strength. Together, they form a tribe that thrives through adversity.",
  },
  Caregiver: {
    name: "The Caregiver",
    description:
      "The Caregiver feels most fulfilled when they’re easing someone else’s pain. Their love language is service. Whether they’re parents, nurses, mentors, or empathetic friends, they instinctively support others.",
    desire:
      "To Help and Nurture Others: Caregivers feel most fulfilled when they’re easing someone else’s pain and supporting growth.",
    fear: "Selfishness, Causing Harm: Hurting someone—intentionally or accidentally—is their worst fear. Even setting boundaries can feel like betrayal to them.",
    traits:
      "Compassionate, Responsible, Loving: Caregivers check in, show up, and stay present. They take responsibility naturally—sometimes too much.",
    strengths:
      "Healing, Patience: Caregivers can sit with pain and stay gentle. They have deep wells of empathy and are natural protectors. Think of Mother Teresa or trauma therapists.",
    weaknesses:
      "Neglects Self, Martyrdom: They may give until they’re empty, struggling to prioritize their own needs.",
    clashes:
      "Trickster, Shadow: Tricksters mock their seriousness, while Shadows force Caregivers to confront their suppressed emotions and boundaries.",
    connects:
      "Empath, Guardian: Empaths understand their emotional depth, and Guardians align with their sense of duty and protection.",
  },
  Guardian: {
    name: "The Guardian",
    description:
      "Guardians see themselves as defenders—of values, people, traditions, or communities. Their instinct is to protect and uphold what’s right.",
    desire:
      "Protection, Duty: Guardians find purpose in standing between danger and those who can’t defend themselves.",
    fear: "Betrayal, Vulnerability: They fear letting down someone who counted on them, or being left exposed without backup.",
    traits:
      "Loyal, Vigilant, Disciplined: Guardians are steady and dependable. They stick to their word and uphold high standards.",
    strengths:
      "Bravery, Integrity: They stand up when others stay silent. Think of Captain America or community leaders who mentor youth.",
    weaknesses:
      "Stubbornness, Rigidity: Their commitment to duty can make them resistant to change and emotionally closed off.",
    clashes:
      "Rebel, Visionary: Rebels challenge the systems they guard; Visionaries seek radical change while they uphold tradition.",
    connects:
      "Warrior, Caregiver: They resonate with Warriors through shared discipline and with Caregivers through mutual protection.",
  },
  Advocate: {
    name: "The Advocate",
    description:
      "Advocates are driven by a deep sense of fairness. They want to give voice to the voiceless and fight for justice and equality.",
    desire:
      "Justice, Equality: Advocates are driven by a deep sense of fairness and work toward social transformation and ethical change.",
    fear: "Injustice, Silence: They fear being powerless against oppression or complicit through silence.",
    traits:
      "Bold, Ethical, Outspoken: Advocates speak out even when it’s uncomfortable. They often serve as the moral compass in their groups.",
    strengths:
      "Morality, Empathy: They inspire others with conviction and compassion. Think Malala Yousafzai or Ruth Bader Ginsburg.",
    weaknesses:
      "Dogmatism, Burnout: Their intensity can alienate others or lead to emotional exhaustion when progress feels slow.",
    clashes:
      "Ruler, Trickster: They may battle Rulers whose systems they seek to reform and Tricksters who don’t take causes seriously.",
    connects:
      "Rebel, Sage: They bond with Rebels who want to challenge the system and Sages who help them stay grounded in wisdom.",
  },
  Trickster: {
    name: "The Trickster",
    description:
      "The Trickster thrives on shaking things up. They use humor, irony, or disruption to expose flaws in systems or beliefs, often waking people up through surprise.",
    desire:
      "Chaos, Disruption for Insight: Tricksters thrive on challenging norms and revealing deeper truths through disruption.",
    fear: "Boredom, Being Predictable: Routine and conformity bore them. They fear losing their edge or becoming irrelevant.",
    traits:
      "Witty, Cunning, Humorous: Tricksters use jokes, sarcasm, and misdirection to make their point. They’re masters at flipping perspectives.",
    strengths:
      "Cleverness, Irreverence: Tricksters dismantle egos, institutions, and arrogance through truth-laced mischief.",
    weaknesses:
      "Manipulation, Destruction: If misaligned, Tricksters use their wit to destabilize or hurt for amusement rather than growth.",
    clashes:
      "Ruler, Guardian: Rulers hate their disrespect for rules, and Guardians see them as threats to stability.",
    connects:
      "Rebel, Outlaw: Tricksters vibe with Rebels who love disruption and Outlaws who share their disregard for social norms.",
  },

  Outlaw: {
    name: "The Outlaw",
    description:
      "The Outlaw lives to challenge authority and create freedom on their own terms. Whether they are political dissidents, punk artists, or rogue entrepreneurs, they are fueled by disruption and individuality.",
    desire:
      "Rebellion, Independence: Outlaws are here to break the system and live according to their inner code.",
    fear: "Control, Confinement: Being tamed or trapped by rules feels suffocating. Any form of imposed order feels like a cage.",
    traits:
      "Bold, Lawless, Anti-Authority: They act according to their own values, not social contracts. They trigger discomfort and admiration alike.",
    strengths:
      "Fearlessness, Disruption: Outlaws have the guts to say what others won’t. Think Che Guevara or Tyler Durden from Fight Club.",
    weaknesses:
      "Anarchy, Alienation: They can go too far—burning bridges or sabotaging systems without offering alternatives.",
    clashes:
      "Ruler, Detective: They despise the Ruler’s control and frustrate Detectives who need logical patterns.",
    connects:
      "Rebel, Trickster: They find their tribe in chaos-makers and fellow nonconformists.",
  },
  Saboteur: {
    name: "The Saboteur",
    description:
      "The Saboteur lives on the edge of chaos and growth. They subconsciously destroy relationships, opportunities, or systems to test what’s real and what can survive.",
    desire:
      "To Test Limits, Even Destructively: They push limits to provoke transformation, often through destruction.",
    fear: "Success, Vulnerability: They fear that growth might expose their weaknesses or invite betrayal.",
    traits:
      "Self-Sabotaging, Conflicted, Intense: They live in extremes, sometimes tearing down what they’ve built.",
    strengths:
      "Intensity, Depth: Saboteurs explore emotional and psychological underworlds. Think of BoJack Horseman or Kanye West.",
    weaknesses:
      "Destruction, Inner Chaos: They can ruin good things and leave trails of damage if not self-aware.",
    clashes:
      "Empath, Creator: Empaths want healing, Creators want to build—both contrast with the Saboteur’s chaos.",
    connects:
      "Shadow, Outlaw: They resonate with those who embrace darkness and truth, often creating transformation together.",
  },
  Seeker: {
    name: "The Seeker",
    description:
      "The Seeker craves purpose and personal meaning—not through achievement but through exploration and self-discovery.",
    desire:
      "Personal Meaning, Inner Growth: They ask, 'Why am I here?' and pursue insight through their journeys.",
    fear: "Emptiness, Aimlessness: They fear floating through life without clarity or living someone else’s story.",
    traits:
      "Curious, Spiritual, Restless: Always questioning, always exploring, never settling too soon.",
    strengths:
      "Insight, Curiosity: Seekers inspire reflection and openness to experience. Think Elizabeth Gilbert or Siddhartha.",
    weaknesses:
      "Detachment, Indecisiveness: They may stay in 'seeking' forever, avoiding decisions out of fear of choosing wrong.",
    clashes:
      "Networker, Hustler: Their skepticism toward social status or success-at-any-cost often leads to tension with these archetypes.",
    connects:
      "Mystic, Explorer: They bond with those who also crave meaning and depth.",
  },
  Prophet: {
    name: "The Prophet",
    description:
      "The Prophet seeks to reveal divine or future truth, often standing as a voice ahead of their time. They feel called to awaken or warn others.",
    desire:
      "To Share Divine or Future Truth: They feel a mission to speak what others may fear to say.",
    fear: "Ignorance, Being Ignored: Being dismissed or misunderstood feels like spiritual exile.",
    traits:
      "Visionary, Passionate, Intense: Their insights are powerful, often dramatic, and deeply felt.",
    strengths:
      "Insight, Conviction: Prophets can wake people up through sheer presence. Think of charismatic leaders and spiritual guides.",
    weaknesses:
      "Extremism, Alienation: They can over-identify with their mission, leading to isolation or fanaticism.",
    clashes:
      "Ruler, Sage: Rulers seek structure; Prophets bring disruption. Sages want evidence; Prophets speak in spiritual truth.",
    connects:
      "Seeker, Mystic: They align beautifully with those on introspective or spiritual paths.",
  },
  Magician: {
    name: "The Magician",
    description:
      "The Magician wants to reshape reality through transformation—whether by innovation, spiritual alchemy, or visionary design.",
    desire:
      "Transformation, Manifestation: Magicians unlock new levels of possibility through creativity and mastery.",
    fear: "Chaos Beyond Control: They fear losing influence over the outcomes they shape.",
    traits:
      "Charismatic, Visionary, Powerful: Magicians attract attention not by force, but by energy. They often innovate or heal.",
    strengths:
      "Creativity, Innovation: They make change possible. Think Tony Robbins, Steve Jobs, or Gandalf.",
    weaknesses:
      "Arrogance, Manipulation: If misaligned, they may control rather than uplift, driven by fear of losing power.",
    clashes:
      "Saboteur, Ruler: Saboteurs destroy what Magicians create; Rulers limit their fluid approach.",
    connects:
      "Creator, Visionary: They thrive with those who believe in creation and change.",
  },

  Hustler: {
    name: "The Hustler",
    description:
      "Hustlers are driven by results and rewards. They want to rise fast, make money, and beat the odds. Whether in business, side hustles, or self-promotion, they’re motivated by movement and wins.",
    desire:
      "Quick Success, Opportunity: Hustlers want to rise fast, seize opportunities, and build momentum through action.",
    fear: "Being Broke, Stuck, Invisible: They fear stagnation, failure, or falling behind. Losing relevance feels like losing their identity.",
    traits:
      "Ambitious, Persuasive, Clever: They are smooth talkers, fast thinkers, and always on the move.",
    strengths:
      "Resourcefulness, Drive: Hustlers make things happen. Think Gary Vee, Jay-Z, or any savvy entrepreneur juggling projects.",
    weaknesses:
      "Morally Flexible, Impatient: They may cut corners or burn out from the constant grind. Success can become survival.",
    clashes:
      "Sage, Mystic: Sages see them as shallow, Mystics as too worldly. These clashes push Hustlers to find purpose beyond profit.",
    connects:
      "Networker, Trickster: They work well with socially savvy personalities and disruptors who share their energy.",
  },
  Polymath: {
    name: "The Polymath",
    description:
      "Polymaths crave versatility and knowledge across disciplines. They believe in being well-rounded and often redefine expertise.",
    desire:
      "Mastery of Many Fields: They want to learn, explore, and apply skills across areas, connecting diverse ideas.",
    fear: "Being One-Dimensional: Sticking to one thing feels like wasting potential or being trapped.",
    traits:
      "Curious, Adaptable, Brilliant: They know a little about everything and a lot about a few things, switching roles fluidly.",
    strengths:
      "Versatility, Depth: Polymaths connect ideas across fields and pivot with ease. Think Leonardo da Vinci or Donald Glover.",
    weaknesses:
      "Scattered Focus, Restlessness: They may start many projects and finish few, struggling with long-term commitment.",
    clashes:
      "Architect, Host: Architects frustrate them with rigid structures, and Hosts may seem too repetitive.",
    connects:
      "Creator, Seeker: They vibe with others who value growth and exploration.",
  },
  Hybrid: {
    name: "The Hybrid",
    description:
      "Hybrids seek to integrate opposites—logic and emotion, tradition and innovation. They are bridge-builders who defy neat categorization.",
    desire:
      "Harmony of Contradictions: They want to reconcile opposites and create synthesis between seemingly conflicting forces.",
    fear: "Fragmentation, Misunderstanding: Being judged for their contradictions or oversimplified feels painful.",
    traits:
      "Balanced, Nuanced, Integrative: They embrace both/and thinking, blending multiple perspectives naturally.",
    strengths:
      "Flexibility, Empathy: They adapt easily and understand varied viewpoints. Think Barack Obama or Brené Brown.",
    weaknesses:
      "Identity Confusion, Indecision: Their adaptability may lead to inconsistency or struggles with clear decisions.",
    clashes:
      "Extremists (Warrior or Outlaw): Those who see the world in black-and-white may dismiss Hybrids as too neutral.",
    connects:
      "Sage, Visionary: They align with those who appreciate nuance and innovation.",
  },
  Hero: {
    name: "The Hero",
    description:
      "The Hero wants to prove their worth through action, rising to meet challenges and becoming a symbol of hope and transformation.",
    desire:
      "To Rise, To Triumph: Heroes strive to overcome adversity and earn respect through courage and perseverance.",
    fear: "Failure, Cowardice: They fear weakness and not living up to their potential. Impostor syndrome often haunts them.",
    traits:
      "Brave, Noble, Determined: They take initiative and rarely back down, often sacrificing comfort for the greater good.",
    strengths:
      "Courage, Inspiration: Heroes inspire through action. Think of Superman, Katniss Everdeen, or Malala.",
    weaknesses:
      "Hubris, Over-Sacrifice: They may overextend themselves or become arrogant in their pursuit of victory.",
    clashes:
      "Shadow, Saboteur: These archetypes reflect the inner fears and self-doubt the Hero tries to outrun.",
    connects:
      "Guardian, Warrior: They bond with those who share loyalty and strength, forming heroic alliances.",
  },
  Shadow: {
    name: "The Shadow",
    description:
      "The Shadow seeks to confront what is hidden or repressed. They represent the dark, unconscious parts of the psyche that demand integration, not denial.",
    desire:
      "Expression of the Unconscious: Shadows want repressed truths to be acknowledged and embraced for healing and wholeness.",
    fear: "Exposure, Rejection: Being unmasked and shamed for who they truly are is terrifying.",
    traits:
      "Repressed, Brooding, Powerful: Shadows often appear intense and emotionally charged, holding deep insight into human nature.",
    strengths:
      "Depth, Transformation: They help others confront pain and process emotions, often leading to healing. Think Carl Jung or a trauma-informed coach.",
    weaknesses:
      "Destructiveness, Fear: Without awareness, they may lash out or isolate themselves in cycles of shame or rage.",
    clashes:
      "Caregiver, Hero: Caregivers may try to fix them; Heroes may dismiss their darkness. Both trigger defensiveness.",
    connects:
      "Saboteur, Mystic: They align with those unafraid of darkness, creating transformative bonds.",
  },
  "Chosen One": {
    name: "The Chosen One",
    description:
      "The Chosen One feels destined for a greater purpose, often bearing the weight of high expectations. Their journey involves proving their worth and fulfilling a calling.",
    desire:
      "Fulfill Destiny, Greater Purpose: They believe their life holds unique meaning and are driven to rise to the occasion.",
    fear: "Unworthiness, Failure of Destiny: Impostor syndrome and fear of disappointing others haunt their journey.",
    traits:
      "Noble, Conflicted, Unique: They often stand out, struggling internally with the burden of expectation.",
    strengths:
      "Courage, Belief: They carry immense heart and rise even when unsure. Think Harry Potter or Joan of Arc.",
    weaknesses:
      "Isolation, Pressure: They may suffer silently under the weight of their role, risking burnout or loneliness.",
    clashes:
      "Rebel, Shadow: Rebels question their role, and Shadows force them to confront inner doubts.",
    connects:
      "Hero, Prophet: They bond with those who walk a similar path of belief and calling.",
  },
};
