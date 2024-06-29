import React from 'react';
import axios from 'axios';

const DownloadButton = ({ userId }) => {
    const handleDownload = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/auth/download-contact/${userId}`, {
                responseType: 'blob'
            });

            const url = window.URL.createObjectURL(new Blob([response.data], { type: 'text/vcard' }));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', `contact-${userId}.vcf`);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error('Error downloading contact details:', error);
        }
    };

    return (
        <button onClick={handleDownload}>Save Contact Details</button>
    );
};

export default DownloadButton;
