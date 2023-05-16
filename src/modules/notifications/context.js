import React, { createContext, useContext, useState } from 'react'
import { useThemeUI } from 'theme-ui'
import { Icon } from '@makerdao/dai-ui-icons'

export const NotificationContext = createContext()

export const useNotifications = () => {
  const context = useContext(NotificationContext)
  if (context === undefined) {
    throw new Error(
      'useNotificationContext must be within a NotificationProvider'
    )
  }

  return context
}

const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([])

  const removeNotification = (id) => {
    const notificationsWithoutRemoved = notifications.filter((notification) => {
      return notification.id !== id
    })

    setNotifications(notificationsWithoutRemoved)
  }

  // Notifications should have the shape { id, message, kind }
  // Kind can be of type "success", "warning", "error", same as the names of
  // colors in our theme
  const queueNotification = (kind, message, subtitle = null) => {
    const newNotification = {
      id: new Date().getTime(),
      kind,
      message,
      subtitle,
    }
    setNotifications([...notifications, newNotification])
    setTimeout(removeNotification, 5000, newNotification.id)
  }

  return (
    <NotificationContext.Provider value={{ queueNotification }}>
      {children}
      <div style={styles.notificationsContainer}>
        {notifications.map((notification) => {
          return (
            <Notification
              key={notification.id}
              notification={notification}
              onClick={removeNotification}
            />
          )
        })}
      </div>
    </NotificationContext.Provider>
  )
}

const Notification = ({
  notification: { id, message, subtitle, kind },
  onClick,
}) => {
  const {
    theme: { colors },
  } = useThemeUI()
  const backgroundColor = colors[kind] || colors.success

  const handleClick = () => onClick(id)

  return (
    <div
      key={id}
      style={{ ...styles.notification, backgroundColor }}
      onClick={handleClick}>
      <div style={styles.icon}>
        <Icon name="close" />
      </div>
      <div style={styles.notificationTextContainer}>
        <div style={styles.notificationMessage}>{message}</div>
        {!!subtitle && (
          <div style={styles.notificationSubtitle}>{subtitle}</div>
        )}
      </div>
    </div>
  )
}

const styles = {
  icon: {
    display: 'flex',
    alignItems: 'center',
    padding: '1rem',
  },
  notification: {
    border: '0.5px solid black',
    borderRadius: '10px',
    color: 'white',
    cursor: 'pointer',
    display: 'flex',
    flexDiration: 'row',
    marginBottom: '1rem',
    paddingTop: '1rem',
    paddingBottom: '1rem',
  },
  notificationsContainer: {
    bottom: 0,
    width: '30rem',
    maxWidth: '30rem',
    position: 'fixed',
    right: '1rem',
    zIndex: 9999,
  },
  notificationMessage: {
    fontSize: '1.25rem',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  notificationSubtitle: {
    fontSize: '0.75rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  notificationTextContainer: {
    marginRight: '1rem',
    overflow: 'hidden',
  },
}

export default NotificationProvider