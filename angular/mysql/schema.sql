CREATE DATABASE IF NOT EXISTS jala_learning;
USE jala_learning;

CREATE TABLE IF NOT EXISTS learners (
  id INT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  track VARCHAR(120) NOT NULL
);

INSERT INTO learners (id, name, track) VALUES
  (201, 'Asha Rao', 'HTML and CSS'),
  (202, 'Naveen Kumar', 'JavaScript'),
  (203, 'Priya Das', 'Accessibility')
ON DUPLICATE KEY UPDATE name = VALUES(name), track = VALUES(track);