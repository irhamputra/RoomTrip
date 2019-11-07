import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Lists from '../src/components/Lists';
import Card from '../src/components/Cards';

const Home = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Lists />
                <Card />
            </ScrollView>
        </SafeAreaView>
    );
};

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Home;
