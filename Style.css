/* =========================================================
   4. PLANET CARD
   The card is a grid, like a table with 2 columns:
   the picture goes on the left, everything else on the right.
   ========================================================= */

.card {
  display: grid;
  grid-template-columns: 112px 1fr;
  grid-template-areas:
    "image title"
    "image type"
    "image description"
    "image statistics"
    "image meta_data";
  column-gap: 32px;
  align-items: start;
  background-color: #ffffff;
  border-radius: 16px;
  padding: 48px;
  box-shadow: 0 10px 30px rgba(70, 90, 180, 0.12);
  margin-bottom: 40px;
}

/* Tell each item which spot in the grid it belongs to */
.card_image_wrap { grid-area: image; }
.card_title { grid-area: title; }
.card_type { grid-area: type; }
.card_description { grid-area: description; }
.statistics { grid-area: statistics; }
.meta_data { grid-area: meta_data; }

/* The round window that clips the planet picture */
.card_image_wrap {
  width: 112px;
  height: 112px;
  border-radius: 50%;
  overflow: hidden;
}

/* The picture is zoomed in a little so the black space around
   the planet is cropped away. Lower 1.2 if the planet looks too
   close up; raise it if black is still visible at the edge. */
.card_image {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.2);
}

.card_title {
  margin: 0;
  font-family: "Space Mono", monospace;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.2;
}

.card_type {
  margin: 2px 0 0 0;
  font-family: "Space Mono", monospace;
  font-size: 15px;
  color: #007aff;
}

.card_description {
  margin: 20px 0 22px 0;
  font-family: "Space Mono", monospace;
  font-size: 14px;
  line-height: 1.8;
  color: #6f7cab;
}

/* Gravity / Mass / Period box: 3 equal columns */
.statistics {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin: 0 0 22px 0;
  padding: 20px 28px;
  background-color: #f6f7fd;
  border-radius: 8px;
}

.statistics_item {
  margin: 0;
  font-weight: 900;
}

.statistics dt {
  font-family: "Space Mono", monospace;
  font-size: 12px;
  color: #6f7cab;
}

.statistics dd {
  margin: 4px 0 0 0;
  font-family: "Space Mono", monospace;
  font-size: 21px;
  font-weight: bold;
}

/* The four small icons with numbers: 2 columns */
.meta_data {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 20px;
  font-family: "Space Mono", monospace;
  font-size: 14px;
  color: #6f7cab;
}

.meta_data li {
  display: flex;
  align-items: center;
  gap: 14px;
}

.meta_data svg {
  width: 24px;
  height: 24px;
  color: #1c1f33;
  flex-shrink: 0;
}
