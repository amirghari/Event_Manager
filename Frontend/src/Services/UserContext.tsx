import React, { createContext, useContext, ReactNode } from 'react'

interface UserContextType {
  userId: string
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider: React.FC<{
  children: ReactNode
  userId: string
}> = ({ children, userId }) => {
  const value = { userId }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
