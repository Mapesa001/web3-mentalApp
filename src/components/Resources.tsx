import React, { useState } from 'react';

// Define a type for the resource data
interface Resource {
    id: number;
    title: string;
    description: string;
    link: string;
    icon: string; // You can change this to a React component type if using an icon library
}

// Sample data for resources with descriptions
const resourcesData: Resource[] = [
    {
        id: 1,
        title: "National Mental Health Helpline",
        description: "A confidential, free, 24/7 helpline that provides support for mental health issues, resources, and referrals.",
        link: "https://www.samhsa.gov/find-help/national-helpline",
        icon: "📞"
    },
    {
        id: 2,
        title: "Crisis Text Line",
        description: "Text-based support for anyone in crisis. Connect with a trained crisis counselor via text.",
        link: "https://www.crisistextline.org",
        icon: "💬"
    },
    {
        id: 3,
        title: "MentalHealth.gov",
        description: "Official government website providing information about mental health and substance use disorders.",
        link: "https://www.mentalhealth.gov",
        icon: "🧠"
    },
    {
        id: 4,
        title: "NAMI (National Alliance on Mental Illness)",
        description: "Support, education, and advocacy for individuals affected by mental illness.",
        link: "https://www.nami.org",
        icon: "🏢"
    },
    {
        id: 5,
        title: "BetterHelp",
        description: "Affordable online therapy with licensed therapists, available 24/7.",
        link: "https://www.betterhelp.com",
        icon: "💻"
    },
];

const Resources: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>("");

    // Filter resources based on search input
    const filteredResources = resourcesData.filter(resource =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div style={styles.container}>
            <h2>Mental Health Resources</h2>
            <input
                type="text"
                placeholder="Search for resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={styles.searchInput}
            />
            <ul style={styles.list}>
                {filteredResources.map(resource => (
                    <li key={resource.id} style={styles.listItem}>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer" style={styles.link}>
                            <span style={styles.icon}>{resource.icon}</span>
                            <strong>{resource.title}</strong>
                        </a>
                        <p style={styles.description}>{resource.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

// Inline styles for simplicity
const styles = {
    container: {
        padding: '20px',
        maxWidth: '600px',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif',
    } as React.CSSProperties,
    searchInput: {
        padding: '10px',
        width: '100%',
        marginBottom: '20px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    } as React.CSSProperties,
    list: {
        listStyleType: 'none',
        padding: '0',
    } as React.CSSProperties,
    listItem: {
        marginBottom: '15px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        padding: '10px',
    } as React.CSSProperties,
    link: {
        textDecoration: 'none',
        color: '#333',
    } as React.CSSProperties,
    icon: {
        marginRight: '8px',
    } as React.CSSProperties,
    description: {
        marginTop: '5px',
        fontSize: '14px',
        color: '#555',
    } as React.CSSProperties,
};

export default Resources;
