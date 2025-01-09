import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section id="gallery" className="gallery">
      <h2>Mythical Creatures Gallery</h2>

      <div className="intro">
        <p>Mythical creatures have inspired legends and stories for centuries. Let's dive into one of the most iconic mythical creatures: the Dragon.</p>
      </div>

      <div className="creature">
        <div className="image">
          <img src='/dragon.jpg' alt="Dragon" />
        </div>
        <div className="description">
          <h3>Dragon</h3>
          <p>Dragons are mythical creatures found in various cultures around the world. They are often depicted as large, fire-breathing reptiles with immense power. In some cultures, dragons are seen as malevolent beings, terrorizing villages and hoarding treasures. In others, they are revered as wise and benevolent creatures, symbolizing strength and good fortune. Whether feared or admired, dragons have long been symbols of mystery and power.</p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
