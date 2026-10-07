export const profile = {
    name: 'Yuya Kawakami',
    title: 'Ph.D. Candidate, Computer Science, UC Davis',
    photo: '/images/Headshot.jpg',
    bio: `I am a Ph.D. Candidate in the <a href="https://www.cs.ucdavis.edu/~ma/people.html" target="_blank" rel="noopener"><b>VIDI Research Group at UC Davis</b></a>, advised by <a href="https://www.cs.ucdavis.edu/~ma/" target="_blank" rel="noopener">Dr. Kwan-Liu Ma</a>. <br><br>
    I am also a Visiting Ph.D. Researcher at <b>Scripps Institution of Oceanography at UC San Diego</b>, where I work with <a href="https://dcayan.scrippsprofiles.ucsd.edu/" target="_blank" rel="noopener">Dr. Daniel Cayan</a> and <a href="https://tcorringham.scrippsprofiles.ucsd.edu/" target="_blank" rel="noopener">Dr. Tom Corringham</a> at the intersection of Computer Science and Climate Science. I am also a part of the <a href="https://cw3e.ucsd.edu/" target="_blank" rel="noopener"><b>Center for Western Weather and Water Extremes (CW3E)</a> at Scripps.</b><br><br>

    My current research interests span GeoAI (e.g., climate risk assessment such as flood damage prediction), Interpretablity for GeoAI, and <em>Visual Analytics x Climate</em>, and my dissertation focuses on Visual Analytics for Geospatial Data.
  <br><br>
  Before UC Davis, I received my M.S. from the University of Oregon, where I worked on HPC + Vis,
  particularly in situ visualization for high-performance computing applications, and my B.A. in
  Mathematics and Computer Science from Grinnell College.
  <br><br>
  Feel free to reach out at ykawakami [at] ucdavis.edu.`
    ,
    links: [
        { label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=mYebBPMAAAAJ&hl=en' },
        { label: 'LinkedIn', url: 'https://www.linkedin.com/in/yuya-kawakami/' },
        { label: 'GitHub', url: 'https://github.com/yuya737' },
    ],
}

// Newest first.
export const updates = [
    { date: '2026-08', text: 'Our paper, DELUGE, was accepted to appear at <b>ACM SIGSPATIAL 2026</b>!' },
    { date: '2026-08', text: 'I passed my Qualifying Exam! Now a Candidate!' },
    { date: '2026-07', text: 'I will be at Scripps for the month for a Summer Appointment!' },
    { date: '2026-04', text: 'Our work was featured on the <a href="https://engineering.ucdavis.edu/news/new-visual-analysis-tool-calms-climate-data-storm" target="_blank" rel="noopener">UC Davis College of Engineering</a> news page!' },
]

// Newest first.
export const publications = [
    {
        title:
            'DELUGE: Towards Continental-Scale Daily Pluvial Flood Damage Prediction via Interpretable Conditioning on Foundation Model Embeddings',
        authors: 'Yuya Kawakami, Daniel Cayan, Dongyu Liu, Kwan-Liu Ma, Tom Corringham',
        venue: 'ACM SIGSPATIAL (to appear)',
        year: '2026',
        teaser: 'images/deluge-teaser.png',
        links: [
            { label: 'arXiv', url: 'https://arxiv.org/abs/2607.16050' },
        ],
    },
    {
        title: 'ClimateSOM: A Visual Analysis Workflow for Climate Ensemble Datasets',
        authors: 'Yuya Kawakami, Daniel Cayan, Dongyu Liu, Kwan-Liu Ma',
        venue: 'IEEE Transactions on Visualization and Computer Graphics (Proc. IEEE VIS)',
        year: '2025',
        teaser: 'images/climatesom-teaser.png',
        links: [
            { label: 'arXiv', url: 'https://arxiv.org/abs/2508.06732' },
            { label: 'DOI', url: 'https://doi.org/10.1109/TVCG.2025.3634788' },
        ],
    },
    {
        title: 'Watering the Future: Assessing a Visualization Design for Accessible Comprehension of Water Management',
        authors: 'Sarah Yuniar, Yuya Kawakami, Logan Ga-sing Tang, Kwan-Liu Ma',
        venue: 'IEEE VIS',
        year: '2025',
        teaser: 'images/waterbottle-teaser.png',
        links: [
            {
                label: 'IEEE Xplore', url: 'https://ieeexplore.ieee.org/abstract/document/11298853'
            }],
    },
    {
        title:
            'The ECP ALPINE project: In situ and post hoc visualization infrastructure and analysis capabilities for exascale',
        authors: 'James Ahrens, Marco Arienti, Utkarsh Ayachit, ..., Yuya Kawakami, ...',
        venue: 'The International Journal of High Performance Computing Applications',
        year: '2025',
        teaser: 'images/alpine-teaser.png',
        links: [
            { label: 'DOI', url: 'https://doi.org/10.1177/10943420241286521' },
        ],
    },
    {
        title: 'HexTiles and Semantic Icons for MAUP-Aware Multivariate Geospatial Visualizations',
        authors: 'Yuya Kawakami, Sarah Yuniar, Kwan-Liu Ma',
        venue: 'arXiv preprint',
        year: '2024',
        teaser: 'images/hextiles-teaser.png',
        links: [
            { label: 'arXiv', url: 'https://arxiv.org/abs/2407.16897' },
        ],
    },
    {
        title: 'An Entropy-Based Approach for Identifying User-Preferred Camera Positions',
        authors: 'Nicole Marsaglia, Yuya Kawakami, Samuel D. Schwartz, Stefan Fields, Hank Childs',
        venue: 'IEEE Symposium on Large Data Analysis and Visualization (LDAV)',
        year: '2021',
        teaser: 'images/camera-teaser.png',
        links: [
            { label: 'DOI', url: 'https://doi.org/10.1109/LDAV53230.2021.00015' },
        ],
    },
    {
        title: 'Benchmarking In Situ Triggers Via Reconstruction Error',
        authors: 'Yuya Kawakami, Nicole Marsaglia, Matthew Larsen, Hank Childs',
        venue: 'In Situ Infrastructures for Enabling Extreme-Scale Analysis and Visualization (ISAV, held with SC)',
        year: '2020',
        teaser: 'images/trigger-teaser.png',
        links: [
            { label: 'DOI', url: 'https://doi.org/10.1145/3426462.3426469' },
        ],
    },
]
