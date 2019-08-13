import React, {Fragment, useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';


const user = '../../assets/user.png'
const lock = '../../assets/lock.png'

import Tombol from '../components/tombol'
import TempatTeks from '../components/tempatTeks'

const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

const Login = ({navigation}) => {
	
	const [count, setCount] = useState(0);
	
	return (
		<View style={{flex:1}}>
			<View style={styles.backgroundOne}>
				<View style={styles.backgroundWrap}>
					<TempatTeks
						icon={require(user)}
						placeholderProps='Username'
					/>
					<TempatTeks
						icon={require(lock)}
						placeholderProps='Password'
						passwordMode={true}
					/>
				</View>
					
				<Tombol
					eventProps={() => navigation.navigate('Home')}
					teks='Login'
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundOne: {
		backgroundColor: '#FFCC80',
		justifyContent: 'center',
		alignItems: 'center',
		width: screenWidth,
		height: screenHeight
	},
	backgroundWrap: {
		backgroundColor: 'white',
		opacity: 0.3,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		width: 350,
		height: 200
	}

});

export default Login;
