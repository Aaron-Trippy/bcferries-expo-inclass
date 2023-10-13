import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, ScrollView, View, Button, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import * as Progress from 'react-native-progress';

export default function Home({ navigation }) {

    const [data, setData] = useState();

    const API_URL = "https://www.bcferriesapi.ca/api/TSA/";

    // const color = value > 90 ? '#800000' : value > 60 ? '#FDB515' : '#0F52BA';

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                setData(response)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const deviceHeight = Dimensions.get("window").height

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.head}>Ferries Leaving Tsawwassen</Text>
                <Text style={styles.subhead}>Destination: Duke Point (Nanaimo)</Text>
                {
                    data && data.DUK.sailings.map((s, index) => {
                        return (
                            <View key={index} style={styles.ferries}>
                                    <View style={styles.leftColumn}>
                                        <Text>Status: {s.isCancelled ? 'Cancelled' : 'Not Cancelled'}</Text>
                                    </View>
                                    <View style={styles.rightColumn}>
                                        <Text style={styles.vesselName}>Vessel Name: {s.vesselName}</Text>
                                        {
                                            (s.carFill === 100) ? <Text style={styles.textFull}>Full</Text> :
                                                <Progress.Bar
                                                    color={s.carFill > 90 ? '#800000' : s.carFill > 60 ? '#FDB515' : '#0F52BA'}
                                                    progress={s.carFill / 100}
                                                    width={150}
                                                    style={styles.progressBar}
                                                />
                                        }
                                    </View>
                            </View>
                        )
                    })
                }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'left',
        paddingLeft: 10,
        height: Dimensions.get("window").height, // Set height to device height
    },    
    head: {
        fontSize: 20,
        marginTop: 20,
    },
    subhead: {
        fontSize: 15,
        marginBottom: 50,
    },
    ferries: {
        gap: 10,
        flexDirection: 'row',
        paddingLeft: 30,
        paddingRight: 30,
    },
    leftColumn: {
        flex: 1,
        alignItems: 'left',
        width: '30%',
    },
    rightColumn: {
        flex: 1,
        alignItems: 'flex-end',  // Change 'right' to 'flex-end'
        width: '100%',
        display: 'flex',
        marginBottom: 40,
        gap: 5,
    },
    vesselName: {
        textAlign: 'right'
    },
});
