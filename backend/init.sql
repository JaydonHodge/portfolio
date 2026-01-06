CREATE TABLE IF NOT EXISTS blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  author VARCHAR(100) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Insert sample data
INSERT INTO blog_posts (title, content, author) VALUES
  ('My First Blog Post', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt magna elit, vel luctus nisi tincidunt eu. Quisque ultrices lacus non augue feugiat rhoncus. Suspendisse ultrices libero tellus, ac dictum urna lobortis et. Duis eget lorem ac enim vestibulum pretium. Quisque finibus felis orci, a venenatis metus blandit feugiat. Nulla iaculis dignissim elit ornare aliquam. Etiam elementum neque a quam semper auctor. Aenean ullamcorper nulla justo, non iaculis dolor feugiat eu. Pellentesque auctor hendrerit enim sit amet dignissim. In volutpat leo lectus, nec tincidunt elit auctor dignissim. Aenean ut enim pharetra, mollis mauris eget, aliquet augue. Nullam vitae gravida nulla.', 'Jaydon Hodge'),
  ('Learning TypeScript', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis auctor justo id egestas. In vulputate mauris at odio consequat venenatis. Maecenas sodales sapien sit amet eros venenatis commodo sit amet ut turpis. Vivamus mollis non elit eget faucibus. Donec sed malesuada velit. Etiam ac lorem magna. Curabitur ac erat eget eros viverra gravida in in massa. Vestibulum tellus felis, convallis quis dui eget, accumsan porta nisl. Nunc mi nibh, pharetra sit amet luctus sit amet, lobortis quis metus. Pellentesque pellentesque aliquet neque eu euismod. Duis accumsan massa vitae augue interdum fermentum eu non dolor. Morbi et ullamcorper nisl. Sed.', 'Jaydon Hodge');
