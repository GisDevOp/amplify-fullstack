import React from 'react';
import ReactPlayer from 'react-player/lazy'
import { useAuthenticator } from '@aws-amplify/ui-react';
const Training = () => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
  const sectionsData = [
    {
      part: 1,
      title: 'Introduction',
      videoUrl: 'https://www.youtube.com/watch?v=kVBlRp3FW1E',
      notes: 'Notes for the introduction section.',
    },
    {
      part: 1,
      title: 'Field Data Collection',
      videoUrl: 'https://www.youtube.com/watch?v=2ysUqexMs64',
      notes: 'Fundamentals of Data Collection',
    },
    {
      part: 2,
      title: 'Device Setup',
      videoUrl: 'https://youtu.be/KioinXEZgGM',
      notes: 'How to setUp your I-pad',
    },
    // Add more sections as needed
  ];

  return (
    <div className="container mt-5">

      {/* Header */}
      <header className="text-center">
        <h1>Welcome, {user.username}! to Everick Ranger Training Hub</h1>
      </header>

      {/* Grid Design */}
      <div className="row mt-4">
        {sectionsData.map((section, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Part {section.part} - {section.title}</h5>
                <div className="embed-responsive ">
                  <ReactPlayer
                        url={section.videoUrl}
                        width="100%"
                        height="200px"
                        controls
                        className="card-img-top"
                    />
                </div>
                <p className="card-text mt-3">{section.notes}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Training;
