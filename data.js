const portfolioData = {
    personal: {
        name: "Mahmoud El-Sawy",
        title: "Data Analyst",
        tagline: "Turning Data into Insights, Insights into Decisions.",
        heroDesc: "I explore data, uncover patterns, and create clear visualizations that make complex information easier to understand. My hands-on training projects help me develop practical analytical skills and transform raw datasets into meaningful findings.",
        about: "I am an aspiring Data Analyst passionate about discovering what data can reveal. I work with spreadsheets, databases, programming tools, and business intelligence platforms to organize data, explore patterns, and communicate findings effectively.\n\nMy current focus is developing practical skills through training projects, strengthening my analytical approach, and learning how to connect technical analysis with real business questions.\n\nI believe effective data analysis is not only about writing queries or building dashboards. It is about asking the right questions, validating the data, understanding the context, and communicating insights clearly.",
        highlights: [
            "Analytical Thinking",
            "Practical, Project-Based Learning",
            "Data Visualization and Reporting"
        ],
        contact: {
            email: "contact@example.com",
            linkedin: "https://linkedin.com/",
            github: "https://github.com/",
            kaggle: "https://kaggle.com/",
            tableau: "https://public.tableau.com/",
            resumeUrl: "" // Leave empty to hide resume button
        }
    },
    skills: {
        "Spreadsheets and Data Preparation": [
            "Microsoft Excel", "Google Sheets", "Data Cleaning", "Data Validation", "Pivot Tables", "Lookup Functions", "Spreadsheet-Based Reporting"
        ],
        "Databases and SQL": [
            "SQL Queries", "Filtering and Sorting", "Aggregations and GROUP BY", "Joins", "Subqueries", "Common Table Expressions", "Window Functions"
        ],
        "Business Intelligence and Visualization": [
            "Power BI", "Tableau", "Interactive Dashboards", "KPI Visualization", "Data Modeling", "Reporting and Data Storytelling"
        ],
        "Python for Data Analysis": [
            "Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Exploratory Data Analysis"
        ],
        "Statistics and Analytical Methods": [
            "Descriptive Statistics", "Mean, Median, and Distribution", "Trend Analysis", "Correlation Analysis", "Data Interpretation", "Basic Hypothesis Testing"
        ]
    },
    projects: [
        {
            id: 1,
            title: "Sales Performance Analysis",
            category: ["Excel", "Power BI"],
            objective: "Analyze sales performance across time periods, products, and regions.",
            dataset: "Illustrative Retail Dataset",
            tools: ["Excel", "Power BI"],
            steps: "Data cleaned in Excel, imported into Power BI for modeling.",
            analysis: "Revenue and order trends, best-performing products, regional comparisons, monthly performance, KPI reporting.",
            findings: "Identified peak sales months and top regions driving revenue.",
            github: "#",
            dashboard: "#",
            isTemplate: true
        },
        {
            id: 2,
            title: "SQL Business Data Exploration",
            category: ["SQL"],
            objective: "Answer business questions using structured datasets.",
            dataset: "Sample E-commerce Database",
            tools: ["SQL Server"],
            steps: "Wrote queries to extract, join, and aggregate data.",
            analysis: "Aggregated performance by category, compared customer segments, used CTEs and window functions.",
            findings: "Found clear segmentation in customer purchasing behavior.",
            github: "#",
            dashboard: "",
            isTemplate: true
        },
        {
            id: 3,
            title: "Exploratory Data Analysis",
            category: ["Python"],
            objective: "Explore a dataset, investigate data quality, identify patterns, and communicate findings.",
            dataset: "Public Demographic Dataset",
            tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
            steps: "Handled missing values, explored distributions, investigated outliers.",
            analysis: "Distribution of variables, relationship analysis, outlier detection.",
            findings: "Uncovered significant correlations between demographic variables.",
            github: "#",
            dashboard: "",
            isTemplate: true
        },
        {
            id: 4,
            title: "Interactive Business Dashboard",
            category: ["Tableau"],
            objective: "Create an interactive dashboard that helps users explore business performance.",
            dataset: "Global Superstore Sample",
            tools: ["Tableau"],
            steps: "Connected data source, created calculated fields, built interactive views.",
            analysis: "KPI summaries, time-series trends, category and regional breakdowns.",
            findings: "Dashboard enabled dynamic filtering to drill down into regional performance.",
            github: "",
            dashboard: "#",
            isTemplate: true
        },
        {
            id: 5,
            title: "Spreadsheet-Based Data Analysis",
            category: ["Excel"],
            objective: "Organize, clean, summarize, and analyze a dataset using spreadsheet tools.",
            dataset: "Financial Sample Data",
            tools: ["Excel", "Google Sheets"],
            steps: "Used text functions and conditional formatting for cleaning.",
            analysis: "Pivot tables, lookup functions, summary metrics, charts.",
            findings: "Streamlined reporting process using spreadsheet automation.",
            github: "",
            dashboard: "",
            isTemplate: true
        }
    ],
    workflow: [
        { step: "01", title: "Define the Problem", desc: "Understand the business question and define the analytical objective." },
        { step: "02", title: "Collect the Data", desc: "Identify the dataset, understand its structure, and assess its relevance." },
        { step: "03", title: "Clean and Prepare", desc: "Investigate missing values, duplicates, inconsistencies, and data types." },
        { step: "04", title: "Explore the Data", desc: "Use exploratory analysis and descriptive statistics to identify patterns." },
        { step: "05", title: "Analyze and Visualize", desc: "Apply suitable analytical methods and create meaningful visualizations." },
        { step: "06", title: "Interpret Findings", desc: "Explain what the analysis shows and distinguish evidence-based findings from assumptions." },
        { step: "07", title: "Communicate Insights", desc: "Present conclusions and practical recommendations supported by the data." }
    ],
    learning: {
        description: "I am continuing to strengthen my practical skills in data cleaning, SQL querying, dashboard development, Python-based analysis, statistics, and analytical communication through hands-on projects.",
        courses: ["Google Data Analytics Professional Certificate (In Progress)"],
        goals: ["Mastering advanced SQL window functions", "Building end-to-end Python data pipelines"]
    }
};
