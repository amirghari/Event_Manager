import { Avatar, AvatarBadge } from '@chakra-ui/react'
import { useState } from 'react'

export const Profile = () => {
  const [profileDropdown, setProfileDropdown] = useState(false)
  const handleLogout = () => {
    // Implement the handleLogout function
  }

  return (
    <>
      <Avatar
        marginTop="35px"
        cursor={'pointer'}
        onClick={() => setProfileDropdown(true)}
      >
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>

      {profileDropdown && (
        <>
          <div
            className="dropdown-overlay"
            onClick={() => setProfileDropdown(false)}
          ></div>
          <div className="dropdown-menu-container">
            <div className="dropdown-profile-picture">
              <AvatarBadge boxSize="1.25em" bg="green.500" />
            </div>

            <div className="dropdown-selection">
              <p>Account</p>
              <p>Settings</p>
              <p onClick={handleLogout}>Logout</p>
            </div>
          </div>
        </>
      )}
    </>
  )
}
export default Profile
