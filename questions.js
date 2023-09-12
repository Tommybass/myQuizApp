// creating an array and passing the number, questions, options, and answers
let questions = [
    {
    numb: 1,
    question: "People who write programs are called?",
    answer: "Programmers",
    options: [
      "Teachers",
      "Programmers",
      "Enginners",
      "Operaters"
    ]
  },
    {
    numb: 2,
    question: "The step by step procedure to solve logical and mathematical problems is known as ......... in programming?",
    answer: "Algorithm",
    options: [
      "Flow Chart",
      "Compiler",
      "Algorithm",
      "Loops"
    ]
  },
    {
    numb: 3,
    question: "Which of the folllowing consist of one or more characters which includes letters, numbers and other characters?",
    answer: "String",
    options: [
      "Double",
      "Floats",
      "Interger",
      "String"
    ]
  },
    {
    numb: 4,
    question: "Which network topology requires a central controller or hub?",
    answer: "Star",
    options: [
      "Star",
      "Mesh",
      "Ring",
      "Bus"
    ]
  },
    {
    numb: 5,
    question: "Data communication system spanning states, countries or the whole world is ........?",
    answer: "WAN",
    options: [
      "LAN",
      "WAN",
      "MAN",
      "PAN"
    ]
  },
  {
    numb: 6,
    question: "....... is the process of creating a set of instruction that tells the computer how to perform a task?",
    answer: "programming",
    options: [
      "constant",
      "string",
      "programming",
      "boolean"
    ]
  },
  {
    numb: 7,
    question: "The physical or logical arrangement of network is ......?",
    answer: "topology",
    options: [
      "topology",
      "routing",
      "networking",
      "control"
    ]
  },
  {
    numb: 8,
    question: "The computer on a network that is used as a central repository of data and programs is called .......?",
    answer: "server",
    options: [
      "router",
      "client",
      "hub",
      "server"
    ]
  },
  {
    numb: 9,
    question: "Computers on a network that access resources from a remote computer is called ....... ?",
    answer: "client",
    options: [
      "router",
      "client",
      "hub",
      "server"
    ]
  },
  {
    numb: 10,
    question: "This networking device connects mulitple computers to a single network.",
    answer: "hub",
    options: [
      "router",
      "client",
      "hub",
      "server"
    ]
  },
  {
    numb: 11,
    question: "Which of the following networking devices perform traffic direction functions on the internet?",
    answer: "router",
    options: [
      "router",
      "client",
      "hub",
      "server"
    ]
  },
  {
    numb: 12,
    question: "Which of the following networking devices is necessary for Internet connecttion?",
    answer: "Router",
    options: [
      "Switch",
      "Hub",
      "Router",
      "Topology"
    ]
  },
  {
    numb: 13,
    question: "'heloo'is an example of which data type?",
    answer: "string",
    options: [
      "date",
      "string",
      "boolean",
      "object"
    ]
  },
  {
    numb: 14,
    question: "A language formally designed to communicate instructions to a computer is called ....... ?",
    answer: "Programming Language",
    options: [
      "Algorithm",
      "English Language",
      "Programming Language",
      "Instructions Language"
    ]
  },
  {
    numb: 15,
    question: "Which of the following is not an advantage of Algorithms?",
    answer: "Writing an algorithm takes a long time so it is time-consuming",
    options: [
      "It is easy to understand",
      "Writing an algorithm takes a long time so it is time-consuming",
      "It is a step-wise representation of a solution to a given problem",
      "It makes it easier for the programmer to convert it into actual code"
    ]
  },
  {
    numb: 16,
    question: "Full meaning of ASCII?",
    answer: "American Standard Computer for Information Interchange",
    options: [
      "American Standard Code for Information International",
      "American Standard Computer for Information Interchange",
      "American Standard Code for International Interexchange ",
      "American Standard Code for Information Interexchange "
    ]
  },
  {
    numb: 17,
    question: "An error, flaw or failure of a computer program is know as ........?",
    answer: "Bug",
    options: [
      "Bug",
      "Fault",
      "Error",
      "Fail"
    ]
  },
  {
    numb: 18,
    question: "Full meaning of API ?",
    answer: "Application Programming Interface",
    options: [
      "Application Programming Information",
      "Application Programming Interface",
      "Applied Program Information",
      "Applied Program Interface"
    ]
  },
  {
    numb: 19,
    question: "The most commonly used cables are the ........?",
    answer: "Ethernet cable",
    options: [
      "Ethernet cable",
      "Optic cables",
      "Fibre cables",
      "Coaxial cables"
    ]
  },
  {
    numb: 20,
    question: "The following are wireless technologies except?",
    answer: "Dullwave Transmission",
    options: [
      "Radio Frequency transmission",
      "Infrared Transmission",
      "Dullwave Transmission",
      "Microwave Transmission"
    ]
  },
  {
    numb: 21,
    question: "........ is a small, rectangular, inexpensive device that joins multiple network-enabled devices.",
    answer: "hub",
    options: [
      "Client",
      "Towerbase",
      "hub",
      "server"
    ]
  },
  {
    numb: 22,
    question: "Another name for repeaters is ..........",
    answer: "Signal boosters",
    options: [
      "Signal boosters",
      "Signal Analyzers",
      "Signal nodes",
      "Signal assemblers"
    ]
  },
  {
    numb: 23,
    question: ".......... is a type of computer network which is a collection of devices connected together in one physical location,such as a building, office, or home.",
    answer: "Local Area Network",
    options: [
      "Personal Area Network",
      "Local Area Network",
      "Storage Area Network",
      "Office Area Network"
    ]
  },
  {
    numb: 24,
    question: "...... is a global wide area network that connects computer systems across the world.",
    answer: "The Internet",
    options: [
      "The Intranet",
      "The Internet",
      "The Extranet",
      "The Externet"
    ]
  },
  {
    numb: 25,
    question: "The expression  used to denote an unexpected error or defect in hardware or software, which causes it to malfunction is ..........",
    answer: "Bug",
    options: [
      "Pseudocode",
      "Algorithms",
      "Bug",
      "Boolean"
    ]
  },
  {
    numb: 26,
    question: "The expression  used for creating statements that are either TRUE or FALSE is known as ..........",
    answer: "Boolean",
    options: [
      "Pseudocode",
      "Algorithms",
      "Bug",
      "Boolean"
    ]
  },
  {
    numb: 27,
    question: "An organised collection of instructions, which when executed perform a specific task or function is known as ...............",
    answer: "Program",
    options: [
      "Exception",
      "Object",
      "Program",
      "Expression"
    ]
  },
  {
    numb: 28,
    question: "Which of the folllowing is a terminology used in developing programs",
    answer: "Algorithm",
    options: [
      "Architecture",
      "Algorithm",
      "Schemes",
      "Facilitation"
    ]
  },
  {
    numb: 29,
    question: "....... is the part of the computer which sends instructions and commands into the computer",
    answer: "an input part",
    options: [
      "a processing part",
      "an input part",
      "storage part",
      "an output part"
    ]
  },
  {
    numb: 30,
    question: "Which of the foloowing is an output device?",
    answer: "projector",
    options: [
      "microprocessor",
      "mouse",
      "projector",
      "flash drive"
    ]
  },
  {
    numb: 31,
    question: "Peripheral devices are grouped into input, output and .......... devices.",
    answer: "storage",
    options: [
      "processing",
      "sent",
      "monitoring",
      "storage"
    ]
  },
  {
    numb: 32,
    question: "The third generation computers were first introduced in the year ...........",
    answer: "1962",
    options: [
      "1964",
      "1962",
      "1965",
      "1966"
    ]
  },

  {
    numb: 33,
    question: "......... defines a significant technological development which changes fundamentally how computers operate and work.",
    answer: "Generation",
    options: [
      "Expansion",
      "Generation",
      "Setting",
      "Procedure"
    ]
  },
  {
    numb: 34,
    question: "The replacement of vacuum tubes by ............ brought the second generation of compuitng.",
    answer: "Transistors",
    options: [
      "Transistors",
      "Capacitors",
      "Resistors",
      "Expositors"
    ]
  },
  {
    numb: 35,
    question: "......... prat of the computer which converts the instructions and commands sent into the computer into meaningful form to the computer user",
    answer: "Processing",
    options: [
      "Processing",
      "Input",
      "Output",
      "Storage"
    ]
  },
  {
    numb: 36,
    question: "The full meaning of ICs is ..............",
    answer: "Integrated Circuits",
    options: [
      "Intended Circuits",
      "Integrated Capacitors",
      "Intended Capacitors",
      "Integrated Circuits"
    ]
  },
  {
    numb: 37,
    question: "The full meaning of USB is .........",
    answer: "Universal Serial Bus",
    options: [
      "Uniform Serial Bus",
      "Universal Scout Bus",
      "Universal Serial Bus",
      "Uniform Scout Byte"
    ]
  },
  {
    numb: 38,
    question: "Which of the following allows you to locate and launch programs through Start and the Start menu, or view any program that is currently open?",
    answer: "taskbar",
    options: [
      "task pane",
      "taskbar",
      "Quick launch",
      "Quick pane"
    ]
  },
  {
    numb: 39,
    question: "The arranging and organizing files and documents kept on the computer system by the Operating system is .......?",
    answer: "File management",
    options: [
      "Folder organization",
      "File management",
      "Folder management",
      "Proper organization"
    ]
  },
  {
    numb: 40,
    question: "Which of the following tools is a presentation package?",
    answer: "MS PowerPoint",
    options: [
      "MS Word",
      "MS Excel",
      "MS Windows",
      "MS PowerPoint"
    ]
  },
  {
    numb: 41,
    question: "The pages in a presentation software is called ..........",
    answer: "slide",
    options: [
      "document",
      "flame",
      "slide",
      "graphic"
    ]
  },
  {
    numb: 42,
    question: "Predefined set of colour and fonts that provides a unified look for a presentation is known as .........",
    answer: "Theme",
    options: [
      "Slides",
      "Theme",
      "Ribbon",
      "Tabs"
    ]
  },
  {
    numb: 43,
    question: "Which of the following tools is used to get synonyms for words in PowerPoint?",
    answer: "Thesaurus",
    options: [
      "Proofing",
      "Thesaurus",
      "Design",
      "Template"
    ]
  },
  {
    numb: 44,
    question: "Health problems associated with the long-term use of computers is known as ........ ",
    answer: "Computer related disorders",
    options: [
      "Regulatory requirements",
      "Computer related disorders",
      "public health",
      "computer health"
    ]
  },
  {
    numb: 45,
    question: "Which of the following is not a health problem associated with the long-term use of computers?",
    answer: "Fever",
    options: [
      "eyes irritation",
      "Backache",
      "Fever",
      "fatigue"
    ]
  },
  {
    numb: 46,
    question: "Exposure to heat form laptops can cause .......",
    answer: "skin burns",
    options: [
      "headache",
      "skin burns",
      "fever",
      "stress"
    ]
  },
  {
    numb: 47,
    question: "RSI stands for .........",
    answer: "repetitive strain injury",
    options: [
      "resistance strain illness",
      "repetitive skull injury",
      "resistance stomach illness",
      "repetitive strain injury"
    ]
  },
  {
    numb: 48,
    question: "All the following are causes of RSI except .......",
    answer: "look at the monitor for long period",
    options: [
      "using the mouse for long period",
      "poor keyboard design",
      "look at the monitor for long period",
      "wrong height of workstation chair"
    ]
  },
  {
    numb: 49,
    question: "The electromagnetic wave that is emitted by the computer .......",
    answer: "Computer radiation",
    options: [
      "Computer radiation",
      "Computer rays",
      "Computer Magnet",
      "Electromagnetic waves"
    ]
  },
  {
    numb: 50,
    question: "The simulation of human intelligence in machines that are programmed to think like humans and copy their actions is called ........",
    answer: "Artificial Intelligence",
    options: [
      "Machine Learning",
      "Algorithms",
      "Artificial Intelligence",
      "Computer Learning"
    ]
  }];
