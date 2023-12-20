import React, {useState} from "react";
import {
    View,
    Text,
    Image
    } from 'react-native';
import IllustrationImg from '../../assets/illustration.png'
import { StatusBar } from "expo-status-bar";
import {styles} from './styles'
export default function SignIn(){
    const  [text, setText] = useState('');
    return (
        <View style={styles.container}>
            
            <StatusBar barStyle="light-content"
            backgroundColor="transparent" />
            <Image source={IllustrationImg} resizeMode="stretch" style={styles.image} />
            <View>
                <Text style={styles.title}>
                    Organize {`\n`}
                    suas Jogatinas {`\n`}
                    Facilmente
                </Text>
                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos {`\n`}
                </Text>
            </View>
        </View>
    );
}