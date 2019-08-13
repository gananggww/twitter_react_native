import React, { useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ToastAndroid,
  FlatList,
  Image
} from 'react-native';

import axios from 'axios'

import Daftar from '../components/daftar'

const Home = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        const {data} = await axios({method:'GET', url: 'https://jsonplaceholder.typicode.com/photos'});
        setData(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <View>
            <Daftar
                data={data}
            ></Daftar>
        </View>
    )
}

export default Home