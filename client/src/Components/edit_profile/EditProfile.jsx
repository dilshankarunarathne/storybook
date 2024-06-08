import React, {useState} from 'react';

import {editProfile} from '../../api/profile';

import './editProfile.css';

function EditProfile() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [dob, setDob] = useState('');
    const [bio, setBio] = useState('');
    const [profilePicture, setProfilePicture] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await editProfile(firstName, lastName, dob, bio, profilePicture);
            alert('Profile updated successfully');
        } catch (error) {
            alert('Error during profile update');
        }
    };

    return (
        <div className="EditProfile">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </label>
                <label>
                    Last Name:
                    <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </label>
                <label>
                    Date of Birth:
                    <input type="date" value={dob} onChange={(e) => setDob(e.target.value)}/>
                </label>
                <label>
                    Bio:
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)}/>
                </label>
                <label>
                    Profile Picture:
                    <input type="file" onChange={(e) => setProfilePicture(e.target.files[0])}/>
                </label>
                <button type="submit">Update Profile</button>
            </form>
        </div>
    );
}

export default EditProfile;
