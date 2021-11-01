import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TextInput,
  ScrollView,
  Button,
  FlatList,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import PromosCard from '../../../components/PromosCard';

const windowWidth = Dimensions.get('window').width;
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const HomeScreen = () => {
  const [search, setSearch] = useState();

  const renderItem = ({item}) => <PromosCard title={item.title} />;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../../assest/backbook.jpg')}
          style={styles.imgback}
        />
      </View>
      <View style={styles.body}>
        <View style={styles.cardGrid}>
          <View style={styles.searchSt}>
            <TextInput
              placeholder="What you looking for ?"
              style={styles.inptsearch}
              value={search}
              onChangeText={setSearch}
            />
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{marginLeft: 20}}>
              <View style={styles.gridIcons}>
                <FontAwesome name="calendar" size={30} color="#F74402" />
              </View>

              <Text style={{marginLeft: 7}}>Hotel</Text>
            </View>
            <View style={{marginLeft: 20}}>
              <View style={styles.gridIcons}>
                <Entypo name="location-pin" size={30} color="#F74402" />
              </View>

              <Text style={{marginLeft: 7}}>Tour</Text>
            </View>
            <View style={{marginLeft: 20}}>
              <View style={styles.gridIcons}>
                <FontAwesome name="car" size={30} color="#F74402" />
              </View>

              <Text style={{marginLeft: 7}}>Car</Text>
            </View>
            <View style={{marginLeft: 20}}>
              <View style={styles.gridIcons}>
                <MaterialIcons name="flight" size={30} color="#F74402" />
              </View>

              <Text style={{marginLeft: 7}}>Flight</Text>
            </View>
          </View>
        </View>
        <View style={styles.productcart}>
          <Text style={styles.title}>Promos Todays</Text>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  body: {
    flex: 4,
  },
  imgback: {
    height: 200,
    width: windowWidth,
  },
  cardGrid: {
    height: 200,
    backgroundColor: '#fff',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
  },
  searchSt: {
    backgroundColor: '#d9d9d9',
    height: 45,
    borderRadius: 8,
    margin: 10,
  },
  inptsearch: {
    paddingLeft: 10,
  },
  productcart: {
    margin: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '900',
  },

  gridIcons: {
    backgroundColor: '#d9d9d9',
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
