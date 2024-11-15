import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch, useSelector } from 'react-redux';
import axiosInstance from '../api/axiosInstance';
import { deletePost, setPosts } from '../redux/actions/postActions';
import styles from './MainContainer.styles';

const MainContainer = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);

    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [loadingMore, setLoadingMore] = useState(false);
    const [hasMorePosts, setHasMorePosts] = useState(true);
    useEffect(() => {
        fetchPosts(page);
    }, [page]);

    const fetchPosts = async (page) => {
        try {
            const response = await axiosInstance.get(`/posts?_page=${page}&_limit=10`);
            const newPosts = response.data;
            if (newPosts.length > 0) {
                dispatch(setPosts(page === 1 ? newPosts : [...posts, ...newPosts]));
            } else {
                setHasMorePosts(false);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
        } finally {
            setLoading(false);
            setLoadingMore(false);
        }
    };

    const handleLoadMore = () => {
        if (!loadingMore && hasMorePosts) {
            setLoadingMore(true);
            setPage((prevPage) => prevPage + 1);
        }
    };

    const handleDeletePost = (id) => {
        dispatch(deletePost(id));
    };

    const renderPost = ({ item }) => (
        <View style={styles.postContainer}>
            <View style={styles.postContent}>
                <Text style={styles.id}>{`Post ${item.id}`}</Text>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.body}>{item.body}</Text>
            </View>
            <TouchableOpacity onPress={() => handleDeletePost(item.id)} style={styles.deleteButton}>
                <Icon name="trash" size={24} color="red" />
            </TouchableOpacity>
        </View>
    );

    if (loading) {
        return <ActivityIndicator size="large" color="#808080" />;
    }

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderPost}
            contentContainerStyle={styles.list}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
                loadingMore ? (
                    <ActivityIndicator size="small" color="#808080" />
                ) : !hasMorePosts ? (
                    <Text style={styles.endMessage}>No more posts to load</Text>
                ) : null
            }
        />
    );
};

export default MainContainer;