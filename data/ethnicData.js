import iban from "../assets/images/tribe/bajau.png"
import dusun from "../assets/images/tribe/dusun.png"
import murut from "../assets/images/tribe/suluk.png"
import kadazan from "../assets/images/tribe/suluk.png"
import bajau from "../assets/images/tribe/suluk.png"
import eating from "../assets/images/exercise/eating.png"
import coughing from "../assets/images/exercise/coughing.png"
import laughing from "../assets/images/exercise/laughing.png"
import Sompoton from "../assets/images/culturalHeritage/SOMPOTON.jpg"
import Tangkong from "../assets/images/culturalHeritage/TANGKONG & himpogot 2.jpg"
import Hinava from "../assets/images/culturalHeritage/Hinava2.jpg.png"
import Sumazau from "../assets/images/culturalHeritage/SUMAZAU 2.png"
import Tajau from "../assets/images/culturalHeritage/Tajau.jpg"
import Tongkungon from "../assets/images/culturalHeritage/Tongkungon.jpeg"
import Huminodun from "../assets/images/culturalHeritage/huminodun.jpeg"

export const borneoEthnicGroups = [
  { id: 'dusun', name: 'Dusun', greeting: 'Kopivosian!', langCode: 'id-ID', image: dusun },
  { id: 'iban', name: 'Iban', greeting: 'Selamat datai!', langCode: 'id-ID', image: iban },
  { id: 'kadazan', name: 'Kadazan', greeting: 'Kopiwosian!', langCode: 'id-ID', image: kadazan },
  { id: 'murut', name: 'Murut', greeting: 'Selamot tumikang!', langCode: 'id-ID', image: murut },
  { id: 'bajau', name: 'Bajau', greeting: 'Do ka diyan!', langCode: 'id-ID', image: bajau },
];

export const ethnicData = {
  dusun: {
    learning: {
      beginner: {
        introduction: {
          title: "Introduction to Dusun",
          overview: "The Dusun language is one of the most widely spoken indigenous languages in Sabah, Malaysia. It is rich with cultural nuances and reflects the close connection the Dusun people have with nature and community.",
          pronunciationGuide: [
            { sound: "'o' as in 'pot'", example: "Kopivosian (Hello)" },
            { sound: "'ou' as in 'soul'", example: "Pounsikou (Thank you)" },
            { sound: "'ng' as in 'sing'", example: "Ngaran (Name)" },
          ],
        },
        interactiveLearning: {
          title: "Interactive Learning",
          overview: "Learn essential words through interactive slides with examples and practice exercises",
          lessons: [
            {
              id: 'd-b3', title: 'Daily Action', type: 'learning',
              items: [
                {
                  id: "d-b3-1",
                  title: "EATING",
                  img: eating,
                  translation: "Mogoribas",
                  description: "This word is used when referring to the action of consuming food.",
                  example: "Nogoribas ak di rumah", // "I'm eating at home"
                },
                {
                  id: "d-b3-2",
                  title: "COUGHING",
                  img: coughing,
                  translation: "Kukul",
                  description: "This word describes the act of coughing, often due to illness or irritation.",
                  example: "Kukul ak di rumah sakit", // "I'm coughing at the hospital"
                },
                {
                  id: "d-b3-3",
                  title: "LAUGHING",
                  img: laughing,
                  translation: "Mingkakak",
                  description: "This word is used when someone is laughing or finds something funny.",
                  example: "Mingkakak ak di bioskop", // "I'm laughing at the cinema"
                },
              ],
            },
          ],
        },
        essentialPhrases: {
          title: "Essential Phrases",
          lessons: [
            { id: 'd-b1', title: 'Greetings & Introductions', type: 'flashcards', phrases: [
                { id: 'd-b1-1', english: 'Hello', translation: 'Kopivosian' },
                { id: 'd-b1-2', english: 'Thank you', translation: 'Pounsikou' },
                { id: 'd-b1-3', english: 'My name is', translation: 'Ngaran ku nopo' },
                { id: 'd-b1-4', english: 'Yes', translation: 'Au' },
                { id: 'd-b1-5', english: 'No', translation: 'Amu' },
            ]},
          ]
        },
        basicVocabulary: {
          title: "Basic Vocabulary",
          lessons: [
            { id: 'd-b2', title: 'Numbers Matching', type: 'matching', pairs: [
                { id: 'd-b2-1', english: 'One', translation: 'Iso' },
                { id: 'd-b2-2', english: 'Two', translation: 'Duvo' },
                { id: 'd-b2-3', english: 'Three', translation: 'Tolu' },
            ]},
            {
              id: "d-b3",
              title: "Daily Actions",
              type: "learning",
              items: [
                {
                  id: "d-b3-1",
                  title: "EATING",
                  img: eating,
                  translation: "Mogoribas",
                  description: "This word is used when referring to the action of consuming food.",
                  example: "Nogoribas ak di rumah", // "I'm eating at home"
                },
                {
                  id: "d-b3-2",
                  title: "COUGHING",
                  img: coughing,
                  translation: "Kukul",
                  description: "This word describes the act of coughing, often due to illness or irritation.",
                  example: "Kukul ak di rumah sakit", // "I'm coughing at the hospital"
                },
                {
                  id: "d-b3-3",
                  title: "LAUGHING",
                  img: laughing,
                  translation: "Mingkakak",
                  description: "This word is used when someone is laughing or finds something funny.",
                  example: "Mingkakak ak di bioskop", // "I'm laughing at the cinema"
                },
              ],
            },
            {
              id: "d-b4",
              title: "Daily Actions",
              type: "exercise",
              items: [
                {
                  id: "d-b4-1",
                  title: "EATING",
                  img: eating,
                  translation: "Mogoribas",
                  description: "This word is used when referring to the action of consuming food.",
                  example: "Nogoribas ak di rumah", // "I'm eating at home"
                },
                {
                  id: "d-b4-2",
                  title: "COUGHING",
                  img: coughing,
                  translation: "Kukul",
                  description: "This word describes the act of coughing, often due to illness or irritation.",
                  example: "Kukul ak di rumah sakit", // "I'm coughing at the hospital"
                },
                {
                  id: "d-b4-3",
                  title: "LAUGHING",
                  img: laughing,
                  translation: "Mingkakak",
                  description: "This word is used when someone is laughing or finds something funny.",
                  example: "Mingkakak ak di bioskop", // "I'm laughing at the cinema"
                },
              ],
            },
          ]
        },
        listeningPractice: {
            title: "Listening & Speaking",
            audioClips: [
                { id: 'd-ls1', title: "Greeting a friend", audioUrl: "/audio/dusun_greeting.mp3" }
            ]
        },
        culturalInsights: {
          title: "Cultural Insights",
          notes: [
            { id: 'd-c1', note: "The greeting 'Kopivosian' is deeply tied to the harvest festival, Tadau Kaamatan, wishing prosperity and a good harvest upon others." }
          ]
        }
      },
      intermediate: {
        expandedVocabulary: {
            title: "Expanded Vocabulary",
            lessons: [
                 { id: 'd-i1', title: 'At the Market', type: 'fill-in-the-blank', sentences: [
                    { id: 'd-i1-1', prompt: '___ o ginawo diti?', blank: 'Piro', options: ['Nunu', 'Piro', 'Isai'], translation: "How much is this?" },
                    { id: 'd-i1-2', prompt: 'It is too ___.', blank: 'expensive', options: ['cheap', 'big', 'expensive'], translation: "Araat o ginawo." },
                ]},
            ]
        },
        phraseConstruction: {
            title: "Phrase Construction",
            lessons: []
        },
        listeningPractice: {
            title: "Listening & Speaking",
            dialogues: [
                { id: 'd-ls2', title: "A simple conversation", audioUrl: "/audio/dusun_dialogue.mp3" }
            ]
        },
        culturalContext: {
            title: "Cultural Context",
            notes: [
                { id: 'd-c2', note: "Understanding the concept of 'bambazon' or the spirit of the paddy is key to many traditional Dusun expressions and beliefs." }
            ]
        }
      },
      advanced: {
        advancedVocabulary: {
            title: "Advanced Vocabulary",
            lessons: [
                { id: 'd-a1', title: 'Business & Travel Terms', type: 'translation', prompts: [
                    { id: 'd-a1-1', english: "Let's schedule a meeting for tomorrow morning.", correct: "Mogisusuul tokou do mamaso suab." },
                    { id: 'd-a1-2', english: "Where can I find the best local handicrafts?", correct: "Hinongo ku kaanu do kraf tangan di tinaru?" },
                ]},
            ]
        },
        complexSentences: {
            title: "Complex Sentence Structures",
            lessons: []
        },
        listeningPractice: {
            title: "Advanced Listening",
            dialogues: [
                { id: 'd-ls3', title: "Discussing Traditions", audioUrl: "/audio/dusun_advanced_dialogue.mp3" }
            ]
        },
        culturalImmersion: {
            title: "Cultural Immersion",
            texts: [
                { id: 'd-ci1', title: "The Legend of Huminodun", text: "A central figure in Kadazan-Dusun mythology, Huminodun was a maiden who sacrificed herself to save her people from famine...", fullStoryId: 'huminodun' }
            ]
        }
      }
    },
    exhibits: [
        { id: 'sompoton', title: 'The Sompoton', category: 'Musical Instruments', imageUrl: Sompoton, description: 'The Sompoton is a mouth organ made from a gourd with bamboo pipes, unique to the Dusun people.'},
        { id: 'tangkong', title: 'Tangkong', category: 'Traditional Attire', imageUrl: Tangkong, description: 'The Tangkong is a traditional Dusun hip-belt made of brass rings worn by women.'},
        { id: 'hinava', title: 'Hinava', category: 'Cuisine', imageUrl: Hinava , description: 'A traditional dish of the Kadazan-Dusun people, Hinava is made from fresh, raw fish cured in lime juice.', ingredients: ['Fresh Mackerel', 'Lime Juice', 'Bird\'s Eye Chili', 'Ginger', 'Shallots'] },
        { id: 'huminodun', title: 'The Legend of Huminodun', category: 'Literature & Folklore', imageUrl: Huminodun, description: 'A central figure in Kadazan-Dusun mythology, Huminodun was a maiden who sacrificed herself to save her people from famine, her body parts giving rise to rice and other essential crops.', audioUrl: '/audio/huminodun_story.mp3' },
        { id: 'tajau', title: 'Tajau Jar', category: 'Historical Artifacts', imageUrl: Tajau, description: 'The Tajau is a large earthenware jar, traditionally used for storing rice wine (lihing), water, or as a burial jar. It is a symbol of wealth and status.', arEnabled: true },
        { id: 'sumazau', title: 'Sumazau Dance', category: 'Dance & Performance', imageUrl: Sumazau, description: 'The Sumazau is a traditional Kadazan-Dusun dance inspired by the eagle\'s flight, performed during the harvest festival (Tadau Kaamatan).', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'},
    ],
    elder: {
        greeting: 'Greetings from the heart of the Dusun people. What wisdom do you seek?',
        prompts: ["Tell me about the Sompoton", "Tell me the story of Huminodun", "Teach me a Dusun greeting"]
    },
  },
  iban: {
    learning: {
      beginner: {
        introduction: {
          title: "Introduction to Iban",
          overview: "The Iban language is spoken by the Iban people, the largest ethnic group in Sarawak, Malaysia. It has a rich oral tradition with epic poetry and folklore.",
          pronunciationGuide: [
            { sound: "'a' as in 'father'", example: "Selamat" },
            { sound: "'e' as in 'bed'", example: "Datai" },
            { sound: "'ng' as in 'sing'", example: "Ngagai" },
          ],
        },
        essentialPhrases: {
          title: "Essential Phrases",
          lessons: [
            { id: 'i-b1', title: 'Greetings & Introductions', type: 'flashcards', phrases: [
                { id: 'i-b1-1', english: 'Hello', translation: 'Selamat datai' },
                { id: 'i-b1-2', english: 'Thank you', translation: 'Terima kasih' },
                { id: 'i-b1-3', english: 'My name is...', translation: 'Nama saya...' },
                { id: 'i-b1-4', english: 'Yes', translation: 'Ya' },
                { id: 'i-b1-5', english: 'No', translation: 'Kadai' },
            ]},
          ]
        },
        basicVocabulary: {
          title: "Basic Vocabulary",
          lessons: [
            { id: 'i-b2', title: 'Numbers Matching', type: 'matching', pairs: [
                { id: 'i-b2-1', english: 'One', translation: 'Satu' },
                { id: 'i-b2-2', english: 'Two', translation: 'Dua' },
                { id: 'i-b2-3', english: 'Three', translation: 'Tiga' },
            ]},
          ]
        },
        listeningPractice: {
            title: "Listening & Speaking",
            audioClips: [
                { id: 'i-ls1', title: "Greeting a friend", audioUrl: "/audio/iban_greeting.mp3" }
            ]
        },
        culturalInsights: {
          title: "Cultural Insights",
          notes: [
            { id: 'i-c1', note: "The Iban people have a rich tradition of oral literature, including the epic poem 'Nyanyi Nenek Buyung' which tells the story of ancestral heroes." }
          ]
        }
      },
      intermediate: {
        expandedVocabulary: {
            title: "Expanded Vocabulary",
            lessons: [
                 { id: 'i-i1', title: 'At the Market', type: 'fill-in-the-blank', sentences: [
                    { id: 'i-i1-1', prompt: '___ o barang ini?', blank: 'Berapa', options: ['Berapa', 'Mana', 'Siapa'], translation: "How much is this item?" },
                    { id: 'i-i1-2', prompt: 'Saya mahu ___ ini.', blank: 'beli', options: ['beli', 'jual', 'makan'], translation: "I want to buy this." },
                ]},
            ]
        },
        phraseConstruction: {
            title: "Phrase Construction",
            lessons: []
        },
        listeningPractice: {
            title: "Listening & Speaking",
            dialogues: [
                { id: 'i-ls2', title: "A simple conversation", audioUrl: "/audio/iban_dialogue.mp3" }
            ]
        },
        culturalContext: {
            title: "Cultural Context",
            notes: [
                { id: 'i-c2', note: "Understanding the concept of 'pantang' or taboos is key to many traditional Iban expressions and beliefs." }
            ]
        }
      },
      advanced: {
        advancedVocabulary: {
            title: "Advanced Vocabulary",
            lessons: [
                { id: 'i-a1', title: 'Business & Travel Terms', type: 'translation', prompts: [
                    { id: 'i-a1-1', english: "Let's schedule a meeting for tomorrow morning.", correct: "Mari kita jadualkan mesyuarat untuk esok pagi." },
                    { id: 'i-a1-2', english: "Where can I find the best local handicrafts?", correct: "Di manakah saya boleh mencari kraf tangan tempatan yang terbaik?" },
                ]},
            ]
        },
        complexSentences: {
            title: "Complex Sentence Structures",
            lessons: []
        },
        listeningPractice: {
            title: "Advanced Listening",
            dialogues: [
                { id: 'i-ls3', title: "Discussing Traditions", audioUrl: "/audio/iban_advanced_dialogue.mp3" }
            ]
        },
        culturalImmersion: {
            title: "Cultural Immersion",
            texts: [
                { id: 'i-ci1', title: "The Legend of Singalang Burong", text: "A central figure in Iban mythology, Singalang Burong was a god of war who had the ability to transform into an hornbill...", fullStoryId: 'singalang_burong' }
            ]
        }
      }
    },
    exhibits: [
        { id: 'sape', title: 'The Sape\'', category: 'Musical Instruments', imageUrl: 'https://placehold.co/600x400/332C2B/FFF?text=Sape%27', description: 'The Sape\' is a traditional lute, famously played by the Iban and other Orang Ulu communities.' },
        { id: 'ngajat', title: 'Ngajat Dance', category: 'Dance & Performance', imageUrl: 'https://placehold.co/600x400/5A4D4B/FFF?text=Ngajat+Dance', description: 'The Ngajat dance is a traditional warrior dance of the Iban people.' },
        { id: 'pua_kumbu', title: 'Pua Kumbu', category: 'Art & Crafts', imageUrl: 'https://placehold.co/600x400/7C6F6E/FFF?text=Pua+Kumbu', description: 'Pua Kumbu is a sacred and ceremonial textile woven by Iban women.' },
        { id: 'ruai', title: 'Rumah Ruai', category: 'Architecture', imageUrl: 'https://placehold.co/600x400/6D28D9/FFF?text=Ruai', description: 'The Ruai is the communal longhouse gallery in Iban architecture. It serves as a social space for gatherings, rituals, and community activities.'},
        { id: 'iban_longhouse_tour', title: 'Iban Longhouse Tour', category: 'Virtual Tours', type: 'vr', imageUrl: 'https://placehold.co/1920x1080/4A3F3D/FFF', description: 'Step inside a traditional Iban longhouse. Look around to see the communal living space, the individual family rooms (bilik), and the intricate carvings that adorn the structure.'},
    ],
     elder: {
        greeting: 'Welcome, child. The spirits of the Iban are listening. Ask your questions.',
        prompts: ["Tell me about Pua Kumbu", "What is the Ngajat dance?", "Teach me an Iban phrase"]
    }
  },
  kadazan: {
    learning: {
      beginner: {
        introduction: {
          title: "Introduction to Kadazan",
          overview: "The Kadazan language is spoken by the Kadazan people, one of the major ethnic groups in Sabah, Malaysia. It shares many similarities with the Dusun language.",
          pronunciationGuide: [
            { sound: "'a' as in 'father'", example: "Tambay" },
            { sound: "'e' as in 'bed'", example: "Kopiwosian" },
            { sound: "'ou' as in 'soul'", example: "Pounsikou" },
          ],
        },
        essentialPhrases: {
          title: "Essential Phrases",
          lessons: [
            { id: 'k-b1', title: 'Greetings & Introductions', type: 'flashcards', phrases: [
                { id: 'k-b1-1', english: 'Hello', translation: 'Kopiwosian' },
                { id: 'k-b1-2', english: 'Thank you', translation: 'Pounsikou' },
                { id: 'k-b1-3', english: 'My name is...', translation: 'Ngaranku...' },
                { id: 'k-b1-4', english: 'Yes', translation: 'Au' },
                { id: 'k-b1-5', english: 'No', translation: 'Amu' },
            ]},
          ]
        },
        basicVocabulary: {
          title: "Basic Vocabulary",
          lessons: [
            { id: 'k-b2', title: 'Numbers Matching', type: 'matching', pairs: [
                { id: 'k-b2-1', english: 'One', translation: 'Iso' },
                { id: 'k-b2-2', english: 'Two', translation: 'Duvo' },
                { id: 'k-b2-3', english: 'Three', translation: 'Tolu' },
            ]},
          ]
        },
        listeningPractice: {
            title: "Listening & Speaking",
            audioClips: [
                { id: 'k-ls1', title: "Greeting a friend", audioUrl: "/audio/kadazan_greeting.mp3" }
            ]
        },
        culturalInsights: {
          title: "Cultural Insights",
          notes: [
            { id: 'k-c1', note: "The Kadazan people celebrate the Tadau Kaamatan (Harvest Festival) which is one of the most important cultural events in Sabah." }
          ]
        }
      },
      intermediate: {
        expandedVocabulary: {
            title: "Expanded Vocabulary",
            lessons: [
                 { id: 'k-i1', title: 'At the Market', type: 'fill-in-the-blank', sentences: [
                    { id: 'k-i1-1', prompt: '___ o ginawo diti?', blank: 'Piro', options: ['Nunu', 'Piro', 'Isai'], translation: "How much is this?" },
                    { id: 'k-i1-2', prompt: 'It is too ___.', blank: 'expensive', options: ['cheap', 'big', 'expensive'], translation: "Araat o ginawo." },
                ]},
            ]
        },
        phraseConstruction: {
            title: "Phrase Construction",
            lessons: []
        },
        listeningPractice: {
            title: "Listening & Speaking",
            dialogues: [
                { id: 'k-ls2', title: "A simple conversation", audioUrl: "/audio/kadazan_dialogue.mp3" }
            ]
        },
        culturalContext: {
            title: "Cultural Context",
            notes: [
                { id: 'k-c2', note: "Understanding the concept of 'bambazon' or the spirit of the paddy is key to many traditional Kadazan expressions and beliefs." }
            ]
        }
      },
      advanced: {
        advancedVocabulary: {
            title: "Advanced Vocabulary",
            lessons: [
                { id: 'k-a1', title: 'Business & Travel Terms', type: 'translation', prompts: [
                    { id: 'k-a1-1', english: "Let's schedule a meeting for tomorrow morning.", correct: "Mogisusuul tokou do mamaso suab." },
                    { id: 'k-a1-2', english: "Where can I find the best local handicrafts?", correct: "Hinongo ku kaanu do kraf tangan di tinaru?" },
                ]},
            ]
        },
        complexSentences: {
            title: "Complex Sentence Structures",
            lessons: []
        },
        listeningPractice: {
            title: "Advanced Listening",
            dialogues: [
                { id: 'k-ls3', title: "Discussing Traditions", audioUrl: "/audio/kadazan_advanced_dialogue.mp3" }
            ]
        },
        culturalImmersion: {
            title: "Cultural Immersion",
            texts: [
                { id: 'k-ci1', title: "The Legend of Huminodun", text: "A central figure in Kadazan-Dusun mythology, Huminodun was a maiden who sacrificed herself to save her people from famine...", fullStoryId: 'huminodun' }
            ]
        }
      }
    },
    exhibits: [
        { id: 'tongkungon', title: 'Tongkungon', category: 'Musical Instruments', imageUrl: Tongkungon, description: 'The Tongkungon is a traditional Kadazan-Dusun plucked tube zither made from a single bamboo stem, and it is played as an alternative to a gong ensemble.'},
        { id: 'bainun', title: 'Traditional Attire', category: 'Traditional Attire', imageUrl: 'https://placehold.co/600x400/5A4D4B/FFF?text=Bainun', description: 'Traditional Kadazan clothing includes colorful woven fabrics and intricate beadwork.'},
        { id: 'hinava', title: 'Hinava', category: 'Cuisine', imageUrl: 'https://placehold.co/600x400/8B5CF6/FFF?text=Hinava', description: 'A traditional dish of the Kadazan-Dusun people, Hinava is made from fresh, raw fish cured in lime juice.', ingredients: ['Fresh Mackerel', 'Lime Juice', 'Bird\'s Eye Chili', 'Ginger', 'Shallots'] },
        { id: 'tadau_kaamatan', title: 'Tadau Kaamatan', category: 'Festivals', imageUrl: 'https://placehold.co/600x400/10B981/FFF?text=Festival', description: 'The annual Harvest Festival (Tadau Kaamatan) is the most important celebration for the Kadazan people.' },
        { id: 'sumazau', title: 'Sumazau Dance', category: 'Dance & Performance', imageUrl: 'https://placehold.co/600x400/EC4899/FFF?text=Sumazau', description: 'The Sumazau is a traditional Kadazan-Dusun dance inspired by the eagle\'s flight, performed during the harvest festival (Tadau Kaamatan).', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'},
    ],
    elder: {
        greeting: 'Greetings from the heart of the Kadazan people. What wisdom do you seek?',
        prompts: ["Tell me about the Tongkungon", "What is the Tadau Kaamatan?", "Teach me a Kadazan greeting"]
    }
  },
  murut: {
    learning: {
      beginner: {
        introduction: {
          title: "Introduction to Murut",
          overview: "The Murut language is spoken by the Murut people, one of the indigenous groups in Sabah, Malaysia. It has several dialects across different regions.",
          pronunciationGuide: [
            { sound: "'a' as in 'father'", example: "Tambay" },
            { sound: "'e' as in 'bed'", example: "Selamat" },
            { sound: "'ou' as in 'soul'", example: "Tumikang" },
          ],
        },
        essentialPhrases: {
          title: "Essential Phrases",
          lessons: [
            { id: 'm-b1', title: 'Greetings & Introductions', type: 'flashcards', phrases: [
                { id: 'm-b1-1', english: 'Hello', translation: 'Selamot tumikang' },
                { id: 'm-b1-2', english: 'Thank you', translation: 'Nokosion' },
                { id: 'm-b1-3', english: 'My name is...', translation: 'Ngaran ku...' },
                { id: 'm-b1-4', english: 'Yes', translation: 'Yo' },
                { id: 'm-b1-5', english: 'No', translation: 'Kada' },
            ]},
          ]
        },
        basicVocabulary: {
          title: "Basic Vocabulary",
          lessons: [
            { id: 'm-b2', title: 'Numbers Matching', type: 'matching', pairs: [
                { id: 'm-b2-1', english: 'One', translation: 'Iso' },
                { id: 'm-b2-2', english: 'Two', translation: 'Duvo' },
                { id: 'm-b2-3', english: 'Three', translation: 'Tolu' },
            ]},
          ]
        },
        listeningPractice: {
            title: "Listening & Speaking",
            audioClips: [
                { id: 'm-ls1', title: "Greeting a friend", audioUrl: "/audio/murut_greeting.mp3" }
            ]
        },
        culturalInsights: {
          title: "Cultural Insights",
          notes: [
            { id: 'm-c1', note: "The Murut people are traditionally known for their longhouse living and headhunting practices in the past, which are now part of their cultural heritage." }
          ]
        }
      },
      intermediate: {
        expandedVocabulary: {
            title: "Expanded Vocabulary",
            lessons: [
                 { id: 'm-i1', title: 'At the Market', type: 'fill-in-the-blank', sentences: [
                    { id: 'm-i1-1', prompt: '___ o barang ini?', blank: 'Berapa', options: ['Berapa', 'Mana', 'Siapa'], translation: "How much is this item?" },
                    { id: 'm-i1-2', prompt: 'Saya mahu ___ ini.', blank: 'beli', options: ['beli', 'jual', 'makan'], translation: "I want to buy this." },
                ]},
            ]
        },
        phraseConstruction: {
            title: "Phrase Construction",
            lessons: []
        },
        listeningPractice: {
            title: "Listening & Speaking",
            dialogues: [
                { id: 'm-ls2', title: "A simple conversation", audioUrl: "/audio/murut_dialogue.mp3" }
            ]
        },
        culturalContext: {
            title: "Cultural Context",
            notes: [
                { id: 'm-c2', note: "Understanding the concept of 'adat' or traditional customs is key to many Murut expressions and beliefs." }
            ]
        }
      },
      advanced: {
        advancedVocabulary: {
            title: "Advanced Vocabulary",
            lessons: [
                { id: 'm-a1', title: 'Business & Travel Terms', type: 'translation', prompts: [
                    { id: 'm-a1-1', english: "Let's schedule a meeting for tomorrow morning.", correct: "Mari kita jadualkan mesyuarat untuk esok pagi." },
                    { id: 'm-a1-2', english: "Where can I find the best local handicrafts?", correct: "Di manakah saya boleh mencari kraf tangan tempatan yang terbaik?" },
                ]},
            ]
        },
        complexSentences: {
            title: "Complex Sentence Structures",
            lessons: []
        },
        listeningPractice: {
            title: "Advanced Listening",
            dialogues: [
                { id: 'm-ls3', title: "Discussing Traditions", audioUrl: "/audio/murut_advanced_dialogue.mp3" }
            ]
        },
        culturalImmersion: {
            title: "Cultural Immersion",
            texts: [
                { id: 'm-ci1', title: "The Legend of Lumboi", text: "A central figure in Murut mythology, Lumboi was a legendary warrior who protected his people from various threats...", fullStoryId: 'lumboi' }
            ]
        }
      }
    },
    exhibits: [
        { id: 'suling', title: 'Suling', category: 'Musical Instruments', imageUrl: 'https://placehold.co/600x400/332C2B/FFF?text=Suling', description: 'The Suling is a bamboo flute used in traditional Murut ceremonies.'},
        { id: 'traditional_attire', title: 'Traditional Attire', category: 'Traditional Attire', imageUrl: 'https://placehold.co/600x400/5A4D4B/FFF?text=Attire', description: 'Traditional Murut clothing includes distinctive tattoos and woven accessories.'},
        { id: 'tapai', title: 'Tapai', category: 'Cuisine', imageUrl: 'https://placehold.co/600x400/8B5CF6/FFF?text=Tapai', description: 'A traditional fermented rice dish that is a staple in Murut cuisine.', ingredients: ['Glutinous Rice', 'Rice Fermenting Starter', 'Banana Leaves'] },
        { id: 'longhouse', title: 'Traditional Longhouse', category: 'Architecture', imageUrl: 'https://placehold.co/600x400/10B981/FFF?text=Longhouse', description: 'The traditional Murut longhouse was a communal living space that could house multiple families.' },
        { id: 'beadwork', title: 'Traditional Beadwork', category: 'Art & Crafts', imageUrl: 'https://placehold.co/600x400/EC4899/FFF?text=Beadwork', description: 'Intricate beadwork is a hallmark of Murut craftsmanship, often used in ceremonial attire.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'},
    ],
    elder: {
        greeting: 'Welcome, friend. The spirits of the Murut are listening. Ask your questions.',
        prompts: ["Tell me about the Suling", "What is traditional Murut beadwork?", "Teach me a Murut greeting"]
    }
  },
  bajau: {
    learning: {
      beginner: {
        introduction: {
          title: "Introduction to Bajau",
          overview:
            "The Bajau (Sama–Bajau) languages are spoken by sea-faring communities across Sabah and the Sulu–Sulawesi seas. Speech varies by region, but many everyday phrases are widely understood.",
          pronunciationGuide: [
            { sound: "'a' as in 'father'", example: "Magsukul (Thank you)" },
            { sound: "'e' glottal stop often written (')", example: "Inde' (No)" },
            { sound: "'u' as in 'rule'", example: "Do' (you)" },
          ],
        },
        essentialPhrases: {
          title: "Essential Phrases",
          lessons: [
            {
              id: "b-b1",
              title: "Greetings & Introductions",
              type: "flashcards",
              phrases: [
                { id: "b-b1-1", english: "Hello", translation: "Do' ka diyan?" },
                { id: "b-b1-2", english: "Thank you", translation: "Magsukul" },
                { id: "b-b1-3", english: "My name is...", translation: "Ngaran ku..." },
                { id: "b-b1-4", english: "Yes", translation: "Iyo" },
                { id: "b-b1-5", english: "No", translation: "Inde'" },
              ],
            },
          ],
        },
        basicVocabulary: {
          title: "Basic Vocabulary",
          lessons: [
            {
              id: "b-b2",
              title: "Numbers Matching",
              type: "matching",
              pairs: [
                { id: "b-b2-1", english: "One", translation: "Isa" },
                { id: "b-b2-2", english: "Two", translation: "Duwa" },
                { id: "b-b2-3", english: "Three", translation: "Telu" },
              ],
            },
            {
              id: "b-b3",
              title: "Daily Actions",
              type: "learning",
              items: [
                {
                  id: "b-b3-1",
                  title: "EATING",
                  img: eating,
                  translation: "Mangan",
                  description: "Used when referring to the act of eating food.",
                  example: "Mangan aku di rumah. (I’m eating at home)",
                },
                {
                  id: "b-b3-2",
                  title: "COUGHING",
                  img: coughing,
                  translation: "Batuk",
                  description: "Describes the act of coughing.",
                  example: "Batuk aku di klinik. (I’m coughing at the clinic)",
                },
                {
                  id: "b-b3-3",
                  title: "LAUGHING",
                  img: laughing,
                  translation: "Katawa",
                  description: "Used when someone is laughing or finds something funny.",
                  example: "Katawa sila di sinema. (They’re laughing at the cinema)",
                },
              ],
            },
            {
              id: "b-b4",
              title: "Daily Actions",
              type: "exercise",
              items: [
                {
                  id: "b-b4-1",
                  title: "EATING",
                  img: eating,
                  translation: "Mangan",
                  description: "Pick the correct translation.",
                  example: "Mangan aku di rumah.",
                },
                {
                  id: "b-b4-2",
                  title: "COUGHING",
                  img: coughing,
                  translation: "Batuk",
                  description: "Pick the correct translation.",
                  example: "Batuk aku di klinik.",
                },
                {
                  id: "b-b4-3",
                  title: "LAUGHING",
                  img: laughing,
                  translation: "Katawa",
                  description: "Pick the correct translation.",
                  example: "Katawa sila di sinema.",
                },
              ],
            },
          ],
        },
        listeningPractice: {
          title: "Listening & Speaking",
          audioClips: [{ id: "b-ls1", title: "Greeting a friend", audioUrl: "/audio/bajau_greeting.mp3" }],
        },
        culturalInsights: {
          title: "Cultural Insights",
          notes: [
            {
              id: "b-c1",
              note:
                "Bajau communities are famed for seafaring and boat-making; greetings often vary slightly between coastal and island dialects.",
            },
          ],
        },
      },
      intermediate: {
        expandedVocabulary: {
          title: "Expanded Vocabulary",
          lessons: [
            {
              id: "b-i1",
              title: "At the Market",
              type: "fill-in-the-blank",
              sentences: [
                {
                  id: "b-i1-1",
                  prompt: "___ in price diti?",
                  blank: "Pira",
                  options: ["Pira", "Inu", "Isai"],
                  translation: "How much is this?",
                },
                {
                  id: "b-i1-2",
                  prompt: "Aku bili ___ diti.",
                  blank: "ini",
                  options: ["itu", "ini", "sana"],
                  translation: "I want to buy this.",
                },
              ],
            },
          ],
        },
        phraseConstruction: { title: "Phrase Construction", lessons: [] },
        listeningPractice: {
          title: "Listening & Speaking",
          dialogues: [{ id: "b-ls2", title: "A simple conversation", audioUrl: "/audio/bajau_dialogue.mp3" }],
        },
        culturalContext: {
          title: "Cultural Context",
          notes: [
            {
              id: "b-c2",
              note:
                "Regional variation is common; Sama–Bajau speech in Kota Belud differs from Semporna and the Sulu archipelago.",
            },
          ],
        },
      },
      advanced: {
        advancedVocabulary: {
          title: "Advanced Vocabulary",
          lessons: [
            {
              id: "b-a1",
              title: "Business & Travel Terms",
              type: "translation",
              prompts: [
                {
                  id: "b-a1-1",
                  english: "Let's schedule a meeting for tomorrow morning.",
                  correct: "Mag-iskedyul kita meting pa buwas subu'.",
                },
                {
                  id: "b-a1-2",
                  english: "Where can I find the best local handicrafts?",
                  correct: "Di in nangku mikiya kraf tangan banar di sini?",
                },
              ],
            },
          ],
        },
        complexSentences: { title: "Complex Sentence Structures", lessons: [] },
        listeningPractice: {
          title: "Advanced Listening",
          dialogues: [{ id: "b-ls3", title: "Discussing Traditions", audioUrl: "/audio/bajau_advanced_dialogue.mp3" }],
        },
        culturalImmersion: {
          title: "Cultural Immersion",
          texts: [
            {
              id: "b-ci1",
              title: "Life on the Sea",
              text:
                "Stories of seafaring, seasonal journeys, and communal fishing form the backbone of Bajau oral history...",
              fullStoryId: "life_on_the_sea",
            },
          ],
        },
      },
    },
    exhibits: [
      {
        id: "lepa_lepa",
        title: "Lepa-Lepa Boat",
        category: "Maritime Heritage",
        imageUrl: "https://placehold.co/600x400/2563EB/FFF?text=Lepa-Lepa",
        description:
          "The iconic Bajau single-hulled sailing boat, central to festivals like Regatta Lepa in Semporna.",
      },
      {
        id: "igal",
        title: "Igal Dance",
        category: "Dance & Performance",
        imageUrl: "https://placehold.co/600x400/F59E0B/FFF?text=Igal",
        description:
          "A graceful traditional dance with flowing arm movements, often accompanied by kulintangan music.",
      },
      {
        id: "kulintangan",
        title: "Kulintangan Ensemble",
        category: "Musical Instruments",
        imageUrl: "https://placehold.co/600x400/0EA5E9/FFF?text=Kulintangan",
        description:
          "A set of small, horizontally-laid gongs played with drums—shared across coastal Borneo cultures.",
      },
    ],
    elder: {
      greeting: "Peace and fair winds. What would you learn from the Bajau?",
      prompts: ["Tell me about the Lepa-Lepa", "What is the Igal dance?", "Teach me a Bajau greeting"],
    },
  },  
}
