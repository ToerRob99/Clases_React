// eslint-disable-next-line no-unused-vars
import { useState } from 'react'
// eslint-disable-next-line react/prop-types
export function TwitterFollowCard ({ children, userName, initialIsFollowing }) {
  const [isFollowing , setIsfollowing] = useState(initialIsFollowing)


  const text = isFollowing ? 'Siguiendo' : 'Seguir'
  const buttonClassName = isFollowing
  ? 'tw-followCard-button is-following'
  : 'tw-followCard-button'

  const handleClick = () => {
    setIsfollowing(!isFollowing)
  }

  return(
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt="El abatar de usuario"
          src={`https://unavatar.io/${userName}`}/>
        <div className="tw-followCard-info">
          <stromg >{children}</stromg>
          <span className="tw-followCard-infoUserName" >
            @{userName}
          </span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-follow-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  )
}