import React from 'react';
import {StyleSheet, Text, View, Image, Button} from 'react-native';

const PromosCard = title => {
  return (
    <View style={styles.promos}>
      <Image source={require('../assest/hotel.jpg')} style={styles.imgStyle} />
      <View style={{position: 'absolute', bottom: 10, left: 10}}>
        <Text style={{color: '#fff'}}>Attaction & Activities</Text>
        <Text style={{fontSize: 18, fontWeight: 'bold', color: '#fff'}}>
          Barcelona
        </Text>
        <View style={{width: 90, height: 40}}>
          <Button title="Book Now" color="#F74402" />
        </View>
      </View>
    </View>
  );
};

export default PromosCard;

const styles = StyleSheet.create({
  imgStyle: {
    height: 200,
    width: 160,
    borderRadius: 8,
  },
  promos: {
    marginTop: 20,
    marginRight: 20,
  },
});
