const resumeData = {
    name: 'Naresh Kumar',
    contact: {
        phone: '8901135580',
        email: 'naresh6436@gmail.com',
        linkedin: 'https://linkedin.com/in/naresh2002',
        github: 'https://github.com/naresh2002'
    },
    education: [
        {
            institution: 'Indian Institute of Information Technology Kalyani',
            location: 'Nadia, West Bengal',
            degree: 'Bachelor of Technology (B. Tech.) in Computer Science and Engineering',
            year: '2019-2023',
            cgpa: '8.23'
        },
        {
            institution: 'S.R. Century Public School',
            location: 'Bahadurgarh, Haryana',
            degree: 'Intermediate (XII Grade)',
            year: '2018',
            percentage: '82.8%'
        },
        {
            institution: 'S.R. Century Public School',
            location: 'Bahadurgarh, Haryana',
            degree: 'High School (X Grade)',
            year: '2016',
            cgpa: '9.8'
        }
    ],
    experience: [
        {
            company: 'EpiFi Technology Pvt. Ltd.',
            location: 'Bengaluru, Karnataka',
            role: 'Backend Developer Intern',
            duration: 'Aug 2023 - Feb 2024',
            responsibilities: [
                'Orchestrated the backfilling of user data in Amazon S3 - AWS, ensuring seamless integration into Snowflake for efficient data management.',
                'Engineered a Jenkins script automating the generation of loan accounts for users absent in our records post-retries.',
                'Automated the release of frozen loan amounts for users who failed to complete the previous loan journey, streamlining a previously manual process.',
                'Collaborated with multiple teams to design and establish databases for integration with new loan partners such as ABFL, Moneyview, and IDFC First Bank.'
            ]
        }
    ],
    projects: [
        {
            name: 'Student Management System',
            technologies: ['Golang', 'REST API', 'Ollama', 'Input-Validations'],
            description: 'It is designed to manage student data, providing endpoints for CRUD operations for student records. Utilizes Ollama\'s AI model (llama3) to generate concise summaries of student details enhancing the system\'s functionality with intelligent data processing. Includes validations to ensure proper input data for the struct using middleware.'
        },
        {
            name: 'ShareDocs',
            technologies: ['Python', 'Django', 'RESTful API', 'PostgreSQL', 'HTML', 'CSS'],
            description: 'Created a PDF sharing platform where users can create an account and are free to share their PDFs. Users can access PDFs shared by others and are free to comment on them. Nested comments are allowed, users can easily reply to any other comment.'
        },
        {
            name: 'Document Scanner',
            technologies: ['Python', 'OpenCV', 'Edge Detection'],
            description: 'Engineered a document processing solution using edge detection for precise cropping. Integrated a magic color filter for improved document visualization.'
        }
    ],
    achievements: [
        'Ranked 1st in college in Discovery Challenge by Scaler Academy (CERTIFICATE).',
        'Achieved best rank of 28 and 81 in Division 2 Cook-offs held on Codechef.',
        'Earned a 5 star rating (2026) on Codechef (Link).',
        'Solved 700+ problems across various Online Judges including Codeforces, Codechef, Leetcode, etc.'
    ],
    additional: {
        languages: ['English', 'Hindi'],
        technicalSkills: ['C', 'C++', 'Go (Golang)', 'Python', 'JAVA', 'OOPs', 'SQL', 'MySQL', 'PostgreSQL', 'HTML', 'CSS', 'Django', 'RESTful APIs', 'Node.js', 'MongoDB', 'Git', 'Github', 'Algorithms', 'Data Structures (DSA)', 'SDLC'],
        hobbies: ['Badminton', 'Chess', 'Reading novels', 'Movies'],
        softSkills: ['Leadership', 'Ability to Work Under Pressure', 'Decision Making', 'Time Management', 'Adaptability', 'Teamwork', 'Creativity']
    }
};

export default resumeData;
