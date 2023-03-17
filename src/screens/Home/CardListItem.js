import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';


const CardListItem = ({ card }) => {

    console.log("card", card.set.images.symbol)
    const handleSelect = () => {
        // handle card selection logic here
      };
  

  return (
    <TouchableOpacity onPress={handleSelect}>
        <View style={styles.cardContainer}>
            <Image source={{ uri: card.images.large }} style={styles.cardImage} />
            <Text style={styles.cardName}>{card.name}</Text>
            <Text style={styles.rarity}>{card.rarity}</Text>
            <View style={styles.cardFooter}>
                <Text>$ {card.cardmarket.prices.averageSellPrice}</Text> 
                <Text>{card.set.total} left</Text>
            </View>
            <TouchableOpacity style={styles.selectButton}>
                <Text style={styles.selectText}>Select Card</Text>
            </TouchableOpacity>
        </View>
      </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  cardImage:{
    width: 150,
    height: 200,
    borderRadius: 10
  },
  cardName:{
    marginTop: 10,
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold'
  },
  rarity:{
    color: '#059862'
  },
  cardFooter:{
    flexDirection: "row",
    gap: 20
  },
  selectButton: {
    backgroundColor: '#fad905',
    borderRadius: 35,
    width: 200,
    height: 40,
    marginTop: 5,
    alignSelf: "center"
  },
  selectText: {
    marginTop: 10,
    fontSize: 18,
    color: '#000000',
    textAlign: 'center'
  },
});

export default CardListItem;
