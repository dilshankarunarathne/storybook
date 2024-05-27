import React, { useState } from 'react';

function EditProfile() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [bio, setBio] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('first_name', firstName);
        formData.append('last_name', lastName);
        formData.append('dob', dob);
        formData.append('bio', bio);
        formData.append('profile_picture', profilePicture);


    };

    return (
        <div>
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </label>
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </label>
                <label>
                    Date of Birth:
                    <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
                </label>
                <label>
                    Bio:
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
                </label>
                <label>
                    Profile Picture:
                    <input type="file" onChange={(e) => setProfilePicture(e.target.files[0])} />
                </label>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}

export default EditProfile;
