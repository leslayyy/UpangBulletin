import React, { useState } from 'react';
import { View, ScrollView, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Post 1',
      content: 'This is the content of post 1',
      image: 'https://via.placeholder.com/300',
      liked: false,
      bookmarked: false,
      comments: [],
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'This is the content of post 2.',
      image: 'https://via.placeholder.com/300',
      liked: false,
      bookmarked: false,
      comments: [],
    },
    {
      id: 3,
      title: 'Post 3',
      content: 'This is the content of post 3.',
      image: 'https://via.placeholder.com/300',
      liked: false,
      bookmarked: false,
      comments: [],
    },
    {
      id: 4,
      title: 'Post 4',
      content: 'This is the content of post 4.',
      image: 'https://via.placeholder.com/300',
      liked: false,
      bookmarked: false,
      comments: [],
    },
    {
      id: 5,
      title: 'Post 5',
      content: 'This is the content of post 5.',
      image: 'https://via.placeholder.com/300',
      liked: false,
      bookmarked: false,
      comments: [],
    },
    // Add more posts as needed
  ]);

  const [commentText, setCommentText] = useState('');

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, liked: !post.liked } : post
      )
    );
  };

  const handleBookmark = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId ? { ...post, bookmarked: !post.bookmarked } : post
      )
    );
  };

  const handleAddComment = (postId) => {
    if (commentText.trim() === '') {
      return;
    }

    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, commentText],
            }
          : post
      )
    );

    setCommentText('');
  };

  return (
    <View style={{ flex: 1, margin: 20 }}>
      <ScrollView>
        {posts.map((post) => (
          <View key={post.id} style={{ padding: 10, marginBottom: 30, marginTop: 30 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{post.title}</Text>
            <Image
              source={{ uri: post.image }}
              style={{ width: 300, height: 200 }}
            />
            <Text>{post.content}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <TouchableOpacity onPress={() => handleLike(post.id)}>
                <FontAwesome
                  name={post.liked ? 'heart' : 'heart-o'}
                  size={24}
                  color={post.liked ? 'red' : 'black'}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleBookmark(post.id)}>
                <FontAwesome
                  name={post.bookmarked ? 'bookmark' : 'bookmark-o'}
                  size={24}
                  color={post.bookmarked ? 'blue' : 'black'}
                />
              </TouchableOpacity>
            </View>
            {/* Comment Section */}
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontWeight: 'bold' }}>Comments:</Text>
              {post.comments.map((comment, index) => (
                <Text key={index}>{comment}</Text>
              ))}
              <TextInput
                placeholder="Add a comment..."
                value={commentText}
                onChangeText={(text) => setCommentText(text)}
                onSubmitEditing={() => handleAddComment(post.id)}
              />
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default App;
