import { useState } from 'react';

export function TwitterFollowCard({ children, formatUserName, username = 'unknown', initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  const text = isFollowing ? 'Siguiendo' : 'Seguir';
  const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img src={`https://unavatar.io/x/${username}`} alt="imagen" className="tw-followCard-avatar" />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">{formatUserName(username)}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}

