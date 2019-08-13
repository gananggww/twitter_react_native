import React, { useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  ToastAndroid,
  ListView
} from 'react-native';

import axios from 'axios'

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const {data} = await axios({method:'GET', url: 'https://jsonplaceholder.typicode.com/todos/'});
          setData(data);
        };
        fetchData();
    }, []);

    return (
        <View>
            <Text>Home {JSON.stringify(data)}</Text>
        </View>
    )
}

export default Home