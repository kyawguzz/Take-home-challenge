import React, { useState, useEffect } from 'react';
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput, FlatList, Modal } from 'react-native';
import TopBar from "../../components/topBar";
import { searchCards } from "../../utils/api";
import CardListItem from './CardListItem';

const Home = ({ navigation }) => {

    const [cards, setCards] = useState([]);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async () => {
    const params = { q: search, pageSize: 12, page };
    const response = await searchCards(params);
    setCards([...cards, ...response.data.data]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const handleSearch = (text) => {
    setSearch(text);
    setCards([]);
    setPage(1);
  };

  const [modalVisible, setModalVisible] = useState(false);


  return (
    <View>
        <TopBar />
        
        <View style={{ opacity: 0.9}}>
            <TextInput value={search} onChangeText={handleSearch} />

            

            <FlatList
                data={cards}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CardListItem card={item} />}
                onEndReached={handleLoadMore}
                onEndReachedThreshold={0.5}
            />

            <TouchableOpacity style={styles.selectButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.quantity}>1</Text>
                <Image
                    source={require('../../assets/shopping.png')}
                    style={{ width: 30, height: 30,}}
                />
                <Text style={styles.selectText}>View cart</Text>
            </TouchableOpacity>

        </View>    

        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ backgroundColor: 'white', width: '100%', height: 600, marginTop: 150, padding: 20, }}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly',}}>
                        <View>
                            <Image
                                source={require('../../assets/image1.png')}
                                style={{ width: 70, height: 100, }}
                            />
                        </View>
                        <View>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>Absol G</Text>
                            <Text>$12.4 per card</Text>
                            <Text>10 card left</Text>
                        </View>
                        <View>
                            <Text style={{color: 'blue', fontWeight: 'bold'}}>2</Text>
                            <Text>price</Text>
                            <Text style={{color: 'blue', fontWeight: 'bold'}}>$4.6</Text>
                        </View>
                    </View>

                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 20}}>
                        <View>
                            <Image
                                source={require('../../assets/image1.png')}
                                style={{ width: 70, height: 100, }}
                            />
                        </View>
                        <View>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: '#000'}}>Absol G</Text>
                            <Text>$12.4 per card</Text>
                            <Text>10 card left</Text>
                        </View>
                        <View>
                            <Text style={{color: 'blue', fontWeight: 'bold'}}>2</Text>
                            <Text>price</Text>
                            <Text style={{color: 'blue', fontWeight: 'bold'}}>$4.6</Text>
                        </View>
                    </View>

                    <View style={{}}>
                        <TouchableOpacity>
                            <Text style={{marginTop: 50, alignSelf: 'center'}}>Clear All</Text>
                        </TouchableOpacity>
                        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
                            <Text style={{fontSize: 15, color: '#000'}}>Total Cards</Text>
                            <Text style={{fontSize: 15, color: 'red'}}> 5</Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 30}}>
                            <Text style={{fontSize: 18, color: '#000', fontWeight: 'bold'}}>Total Price</Text>
                            <Text style={{fontSize: 18, color: 'red', fontWeight: 'bold'}}> $ 10.8</Text>
                        </View>
                        
                    </View>

                    <TouchableOpacity style={styles.payButton}>
                            <Text style={styles.payText}>Pay now</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Text>Hide</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
        quantity:{
            backgroundColor: 'red',
            color: '#fff',
            padding: 5,
            marginTop: -30,
        },
        selectButton: {
            backgroundColor: '#0066ff',
            borderRadius: 15,
            width: 120,
            height: 40,
            alignSelf: "center",
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 650,
        },
        selectText: {
            fontSize: 15,
            color: '#fff',
            textAlign: 'center'
        },
        payButton: {
            backgroundColor: '#0066ff',
            borderRadius: 15,
            width: 120,
            height: 40,
            alignSelf: "center",
            position: 'absolute',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 650,
        },
        payText: {
            fontSize: 15,
            color: '#fff',
            textAlign: 'center'
        },
});

export default Home;
