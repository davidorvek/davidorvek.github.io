var papers = {
    "Serialism in Three Chamber Works of Reginald Smith Brindle": ["This paper examines the usage of serial techniques in three of Reginald Smith Brindle’s chamber pieces for guitar—Tierra Seca from Four Poems of Garcia Lorca, the first movement of Ten-String Music for cello and guitar, and Lachrimae from Five Sketches for violin and guitar—in light of Brindle’s own writings about serialism in his 1966 book Serial Composition...", "/html/research.html#brindle"], 
    "Ex Nihilo: An Inquiry into the Nature of Musical Composition": ["As of late there has been much interest in the creative process of musical composition. Most studies to date have taken the form of quantitative and/or psychological analyses performed upon composers by researchers who are not themselves composers. In contrast, this project takes a more philosophical and historical approach in that it takes time to reflect upon the context and manner in which music has been composed throughout history. Additionally, this study offers a more personal perspective as it draws information from the author’s own compositional process–as recorded in a composition journal–as well as the thoughts and reflections of composers throughout history...", "/html/research.html#ex_nihilo"], 
    "Sonata Form in the First Movement of Edvard Grieg's String Quartet in G Minor, Op. 27": ["This paper examines the form of the first movement of Edvard Grieg's G-minor string quartet in terms of Hepokoski and Darcy's three-part, 'tri-modular block' expositional structure. Approaching the movement from this paradigm helps to reconcile the profusion of seemingly unrelated themes into a single unified sonata whole. Such an interpretation also allows for suggestive readings of the quartet's narrative in light of many interesting connections to Grieg's biography and oeuvre...", "/html/research.html#grieg"], 
    "The Visualization of Tonality Through Color in the Animations of Stephen Malinowski": ["Stephen Malinowksi's musical animations of scrolling color and shapes have delighted viewers for over a decade. Yet these animations go far deeper than many people likely realize. Through these animations, Malinowski hopes to help people to hear and understand the music in a new and more meaningful way. In this paper, I examine in detail Malinowski's use of color to depict tonal structures in the music he animates. I argue that these colored animations, rather than being a mere gimick, can actually help us as listeners to hear important tonal structures in the music that would otherwise go unnoticed without the visuals. In this way, Malinowski helps us to actually hear and experience in real time tonal structures that could otherwise only be brought out through careful analysis...", "/html/research.html#malinowski"], 
    "Exploring Cohn's Sum-Class System Through Charles Villiers Stanford's <em>La belle Dame sans merci</em>": ["In this paper, I suggest that Cohn’s (1998) work with “sum classes” offers the beginnings of a system for understanding virtually any non-tonal triadic progression in terms of its voice leading and demonstrates that different background voice-leading structures can be expressed in various, seemingly different, surface realizations...", "/html/research.html#sum_class"], 
    "Form Generating Elements in Anton Webern's String Quartet (1905)": ["Though certainly tonal in many respects, Aton Webern's early string quartet experiment from 1905 also appears to explore atonality in some highly significant, though subtle, ways. This becomes particularly clear through the lens of Hepokoski and Darcy's Sonata Theory. By carefully choosing the key centers for important themes and cadences, Webern is actually able to use tonal centricity to unmoor the quartet's fundamental sonata structure from the bonds of tonality. In lieu of tonality's unifying force, Webern builds the structure around the set class 3-3 (014); a motive that proves to be important throughout the quartet. By breaking free from tonality at the deepest levels of structure, Webern paves the way for the composition of unified music without reference to any tonal center at all...", "/html/research.html#webern"], 
    "Non-Syntactical Closural Features in Atonal Music by Schoenberg, Webern, and Berg": ["A corpus study of closural features in the atonal music of Arnold Schoenberg, Anton Webern, and Alban Berg, conducted in partnership with <a href='https://music.osu.edu/people/huron.1' target='_blank'>David Huron</a>. Works of similar genre that were composed around the same time were chosen for each of the three composers. For each of these works, closural moments are identified according to pre-determined criteria (double bar lines, fermatas, and general pauses). These 'closural-moments' are then examined for certain 'secondary parameters' that tend to be associated with closure in tonal music (things like pitch descent, longer duration, change in textural density, change in dynamic leve, etc.) Our overarching hypothesis is that these secondary closural features found in tonal music will continue to be important in atonal music, and may in fact move to the fore as the only means of achieving closure...", "/html/research.html#atonal_close"]
};
            
var paperTitles = [
        "Serialism in Three Chamber Works of Reginald Smith Brindle", 
        "Ex Nihilo: An Inquiry into the Nature of Musical Composition", 
        "Sonata Form in the First Movement of Edvard Grieg's String Quartet in G Minor, Op. 27", 
        "The Visualization of Tonality Through Color in the Animations of Stephen Malinowski", 
        "Exploring Cohn's Sum-Class System Through Charles Villiers Stanford's <em>La belle Dame sans merci</em>", 
        "Form Generating Elements in Anton Webern's String Quartet (1905)", 
        "Non-Syntactical Closural Features in Atonal Music by Schoenberg, Webern, and Berg"
];

// generates random title
var randomPaperTitle = paperTitles[Math.floor(Math.random() * 7 )];
// uses randomly generated title to retrieve that title's blurb
var randomPaperBlurb = papers[randomPaperTitle][0];
// uses randomly gerenerated title to retrieve that title's file path
var randomPaperPath = papers[randomPaperTitle][1];



var compositions = {
    "String Trio in D, I": ["A sonata-form movement from a string trio in the classical style for violin, viola, and cello, written during my studies with Dr. J. Bruce Ashton. Performed by Jacob Martin, Randy Wiedemann, and Anna Park in Ackerman Auditorium at Southern Adventist University.", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/235801481&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"],
    "Short and Suite": ["A dance suite in the baroque style for solo guitar. Peformed during my senior recital in Ackerman Auditorium at Southern Adventist University. This piece was written as a part of my senior thesis, during which time I kept a journal of my creative process and used these findings to inform my discussion of the process musical composition. The resulting paper ('Ex Nihilo: An Inquiry into the Nature of Musical Composition') may be downloaded <a href='/papers/ex_nihilo.pdf' download>here</a>.", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/470534268&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"],
    "Mabel Wood Hall": ["This work was created from twelve sounds recorded in Mabel Wood Hall (the music building) at Southern Adventist University. A twelve-tone row was then used to determine the order and duration of each sound and the overall length of the piece.", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/262500660&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"],
    "Call to Prayer and Response": ["A short piece of service music to be used before and after the congregational prayer in a church service. Performed by the Die Meistersinger and Bel Canto choirs of Southern Adventist University at the Collegedale Seventh-day Adventist Church.", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/247260425&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"],
    "Portrait": ["A freely atonal work for solo guitar based upon harmonic structures derived from my name, birthdate, and other biographical information.", "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/205500715&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"]
};

var compositionTitles = [
    "String Trio in D, I", 
    "Short and Suite", 
    "Mabel Wood Hall", 
    "Call to Prayer and Response", 
    "Portrait"
];

// generates random title
var randomCompositionTitle = compositionTitles[Math.floor(Math.random() * 5 )];
// uses randomly generated title to retrieve that title's blurb
var randomCompositionBlurb = compositions[randomCompositionTitle][0];
// uses randomly gerenerated title to retrieve that title's file path
var randomCompositionPath = compositions[randomCompositionTitle][1];


var programs = {
    "Aural Skills Bookkeeping": ["This script can be used in an aural-skills class to take attendance, randomly choose students to perform rhythm and melodic exercises, and record students' scores for their performances. Once again, due to the constraints of embedded Python scripts, this information is simply printed to the terminal, but it can be modified to actually write to a file and retrieve this information when it is run locally.", "https://trinket.io/embed/python3/5c7c4377cf?runOption=run"], 
    "Characteristic Function": ["This script looks through the given pitch-class set to see which of the twelve pitch classes are present. It outupts these results as a binary value (1 = present, 0 = absent) for each pitch class in the format: 0, 1, 2, etc.", "https://trinket.io/embed/python3/a1883ebd29?runOption=run"], 
    "Degrees of Symmetry": ["This script tallies the total number of transposition and inversion values at which a given pitch-class set maps onto itself and outputs these values as a ordered pair (transposition, inversion). The transposition value is always at least 1 because all pitch class-sets map unto themselves at T0.", "https://trinket.io/embed/python3/2e323a19ce?runOption=run"], 
    "Dice Roller": ["This is a simple dice rolling game. The user is asked to input the number of dice to be thrown (which we will call x) and the number of sides on each of these dice (which we will call y). The script then generates x random integers between one and y + 1 (so as to be inclusive) and saves these integers in an array. The array and the sum of all the integers in the array are then outputted to the user.", "https://trinket.io/embed/python3/3ad97a00f3?runOption=run"], 
    "Index Vector": ["This script calculates the number of pitch-classes that are held invariant at each inversional axis (0–11) and outputs this information as twelve values where the value at position one indicates the number of pitch classes held invariant around the axis of 0, the value at position two indicates the number of pitch classes held invariant around the axis of 1, etc. Any value that is equal to the cardinality of the given pitch-class set indicates an axis at which the pitch-class set will map onto itself.", "https://trinket.io/embed/python3/2b4e7fa53b?runOption=run"], 
    "Interval String": ["This script calculates the dsitance in half steps between each consecutive member of the given pitch-class set.", "https://trinket.io/embed/python3/a6a2b6c342?runOption=run"], 
    "Interval Vector": ["This script finds the interval vector of any pitch-class set. The user provides a pitch-class set, and the script then measures the distance from every element in the pitch-class set to every element in the pitch-class set and tallies these results into six interval classes (where 1 and 11 half steps = IC1, 2 and 10 = IC2, etc.). The script then returns the total number of each interval class as an ordered sextuple where position one equals the number of times inverval class one occurs, position two equals the number of times interval class two occurs, etc.", "https://trinket.io/embed/python3/30e301c0cd?runOption=run"], 
    "Inversion": ["This is a pitch-class set inverter. The user provides a pitch-class set and an inversional axis between 0 and 11 and the script returns the pitch-class set inverted around the axis provided.", "https://trinket.io/embed/python3/d35b191c6f?runOption=run"], 
    "Transposition": ["This is a pitch-class set transposer. The user provides a pitch-class set and a transposition value (n) between 0 and 11 (number of half steps) and the script returns the pitch-class set transposed n half steps heigher.", "https://trinket.io/embed/python3/ca54c9c97c?runOption=run"], 
    "Find Relation": ["This script uses the transposition, inversion, and interval vector scripts to see if two given pitch-class sets map onto each other under any transposition or inversion, or if they are Z-related (share the same interval vector).", "https://trinket.io/embed/python3/5df28dd215?runOption=run"], 
    "Password Generator": ["This script allows you to generate random, highly secure passwords and save them for future reference. Due to the constraints of embedded Python code, saved passwords are erased after the program is quit. If you run the program locally on your own computer, however, Python's <a href='https://docs.python.org/3/library/pickle.html' target='_blank'>Pickle</a> module can be used to save this data to a file and allow you to retrieve it later.", "https://trinket.io/embed/python3/b2658c6368?runOption=run"]
};

var programTitles = [
    "Aural Skills Bookkeeping", 
    "Characteristic Function", 
    "Degrees of Symmetry", 
    "Dice Roller", 
    "Index Vector", 
    "Interval String", 
    "Interval Vector", 
    "Inversion", 
    "Transposition", 
    "Find Relation", 
    "Password Generator"
];

// generates random title
var randomProgramTitle = programTitles[Math.floor(Math.random() * 11)];
// uses randomly generated title to retrieve that title's blurb
var randomProgramBlurb = programs[randomProgramTitle][0];
// uses randomly generated title to retrieve that title's file path
var randomProgramPath = programs[randomProgramTitle][1];


var performances = {
    "Fantasia - Robert Johnson, Trans. Mario Abril": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485021289&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true", 
    "Hanswurst (2016) - Jonathan Bartholomew": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485021916&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    "Sonata Op. 15, II, Adagio Con Grand Espressione - Mauro Giuliani": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485022561&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    "El Polifemo De Oro (1981) - Reginald Smith Brindle": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485023071&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    "At Tenby Castle (2015) - Ethan McGrath": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485023350&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    "Short and Suite": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/470534268&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    "Suite In E BWV 1006a, Gavotte En Rondeau - J.S. Bach, Trans. Frank Koonce": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485024049&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    "Un Dia De Noviembre - Leo Brouwer": "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485024343&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
}

var performanceTitles = [
    "Fantasia - Robert Johnson, Trans. Mario Abril",
    "Hanswurst (2016) - Jonathan Bartholomew",
    "Sonata Op. 15, II, Adagio Con Grand Espressione - Mauro Giuliani",
    "El Polifemo De Oro (1981) - Reginald Smith Brindle",
    "At Tenby Castle (2015) - Ethan McGrath",
    "Suite In E BWV 1006a, Gavotte En Rondeau - J.S. Bach, Trans. Frank Koonce",
    "Un Dia De Noviembre - Leo Brouwer",
    "Short and Suite"
]

// generates random title
var randomPerformanceTitle = performanceTitles[Math.floor(Math.random() * 8)];
// uses randomly generated title to retrieve that title's file path
var randomPerformancePath = performances[randomPerformanceTitle];
