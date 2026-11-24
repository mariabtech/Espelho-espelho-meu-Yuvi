import { useState } from 'react';
import {
  FaHeart,
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaBookmark,
  FaHome,
  FaUserCircle,
} from 'react-icons/fa';
import initialPosts from './data/posts.json';
import './App.css';

export default function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [commentInputs, setCommentInputs] = useState({});
  const [savedPosts, setSavedPosts] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);
  const [view, setView] = useState('feed');

  const handleToggleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const isLiked = !post.liked;
          return {
            ...post,
            liked: isLiked,
            likes: isLiked ? post.likes + 1 : post.likes - 1,
          };
        }
        return post;
      })
    );
  };

  const handleAddComment = (e, postId) => {
    e.preventDefault();
    const text = (commentInputs[postId] || '').trim();
    if (!text) return;

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, { user: 'user.yuvi', text }],
            }
          : post
      )
    );

    setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
  };

  const handleToggleSave = (postId) => {
    setSavedPosts((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  const visiblePosts = selectedUser
    ? posts.filter((post) => post.username === selectedUser)
    : posts;

  return (
    <div>
      <header className="navbar">
        <div
          className="brand"
          onClick={() => {
            setSelectedUser(null);
            setView('feed');
          }}
        >
          <img src="/logoYuvi.png" alt="Logo Yuvi" />
          <span className="brand-name">Yuvi</span>
        </div>

        <nav className="nav-actions">
          <button
            className={`nav-btn ${view === 'feed' ? 'active' : ''}`}
            onClick={() => setView('feed')}
          >
            <FaHome /> Feed
          </button>
          <button
            className={`nav-btn ${view === 'profile' ? 'active' : ''}`}
            onClick={() => setView('profile')}
          >
            <FaUserCircle /> Perfil
          </button>
        </nav>
      </header>

      <main className="container">
        {view === 'feed' ? (
          <>
            <section className="stories-bar" aria-label="Stories">
              {posts.map((person) => (
                <div
                  key={person.id}
                  className="story-item"
                  onClick={() =>
                    setSelectedUser(
                      selectedUser === person.username ? null : person.username
                    )
                  }
                >
                  <div
                    className={`story-ring ${
                      selectedUser === person.username ? 'selected' : ''
                    }`}
                  >
                    <img src={person.avatar} alt={person.displayName} />
                  </div>
                  <span className="story-name">{person.displayName}</span>
                </div>
              ))}
            </section>

            {selectedUser && (
              <div className="filter-banner">
                <span>
                  Mostrando publicações de <strong>@{selectedUser}</strong>
                </span>
                <button onClick={() => setSelectedUser(null)}>Ver todos</button>
              </div>
            )}

            {visiblePosts.map((post) => (
              <article key={post.id} className="post-card">
                <div className="post-header">
                  <div
                    className="post-user"
                    onClick={() => setSelectedUser(post.username)}
                  >
                    <img src={post.avatar} alt={post.displayName} />
                    <div>
                      <h2 className="post-title">{post.displayName}</h2>
                      <p className="post-subtitle">{post.subtitle}</p>
                    </div>
                  </div>
                  <span className="post-tag">{post.tag}</span>
                </div>

                <img
                  src={post.image}
                  alt={post.caption}
                  className="post-image"
                  onDoubleClick={() => handleToggleLike(post.id)}
                />

                <div className="post-body">
                  <div className="post-actions">
                    <div className="action-group">
                      <button
                        className={`icon-btn ${post.liked ? 'liked' : ''}`}
                        onClick={() => handleToggleLike(post.id)}
                        aria-label="Curtir"
                      >
                        {post.liked ? <FaHeart /> : <FaRegHeart />}
                      </button>
                      <button className="icon-btn" aria-label="Comentar">
                        <FaRegComment />
                      </button>
                    </div>

                    <button
                      className="icon-btn"
                      onClick={() => handleToggleSave(post.id)}
                      aria-label="Salvar"
                    >
                      {savedPosts[post.id] ? <FaBookmark /> : <FaRegBookmark />}
                    </button>
                  </div>

                  <p className="likes-count">
                    {post.likes.toLocaleString('pt-BR')} curtidas
                  </p>

                  <p className="post-caption">
                    <strong>{post.username}</strong>
                    {post.caption}
                  </p>

                  <div className="comments-list">
                    {post.comments.map((c, index) => (
                      <p key={index} className="comment-item">
                        <strong>{c.user}</strong>
                        {c.text}
                      </p>
                    ))}
                  </div>

                  <form
                    className="comment-form"
                    onSubmit={(e) => handleAddComment(e, post.id)}
                  >
                    <input
                      type="text"
                      placeholder="Adicione um comentário na Yuvi..."
                      value={commentInputs[post.id] || ''}
                      onChange={(e) =>
                        setCommentInputs((prev) => ({
                          ...prev,
                          [post.id]: e.target.value,
                        }))
                      }
                    />
                    <button type="submit">Publicar</button>
                  </form>
                </div>
              </article>
            ))}
          </>
        ) : (
              <section className="profile-card">
              <img src={posts[0].avatar} alt="Perfil Yuvi" />
              <h2>Exploradora Yuvi</h2>
              <p>@yuvi.user • Explorando mundos criativos ✨</p>
              <div className="profile-grid">
              {posts.map((item) => (
                <img
                  key={item.id}
                  src={item.image}
                  alt={item.displayName}
                  title={item.displayName}
                />
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}