import React, { useState } from 'react';
import { safeAreaView, ScrollView, Text, View, TextInput, TouchableOpacity, FlatList, Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors.js';
import hotels from '../../consts/hotels';
const { width } = Dimensions.get('screen');
const cardWidth = width / 1.8;

const HomeScreen = ({ navigation }) => {
  const categories = ['All', 'Popular', 'Top Rated', 'Featured', 'Luxury'];
  const [selectCategory, setSelectCategory] = useState(0);


  const CategoryList = () => {
    return (
      <View style={style.categoryListContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => setSelectCategory(index)} >
            <View>
              <Text
                style={{
                  ...style.categoryListText,
                  color: selectCategory == index ? COLORS.primary : COLORS.grey,
                }}>
                {item}
              </Text>
              {selectCategory == index && (
                <View
                  style={{
                    height: 3,
                    width: 30,
                    backgroundColor: COLORS.primary,
                    marginTop: 2,
                  }}
                />
              )}

            </View>
          </TouchableOpacity>
        ))}
      </View>
    )
  }

  const Card = ({ hotel, index }) => {
    return (
      <View style={{ ...style.card }}></View>
    )
  }

  return (
    <safeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={style.header}>
        <View style={{ paddingBottom: 15 }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
            {/* Find Your Products */}
          </Text>

          <view style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
              Search <Text style={{ fontSize: 30, fontWeight: 'bold', color: COLORS.primary }}>Here</Text>
            </Text>


          </view>
        </View>
        <Icon name="person-outline" size={38} color={COLORS.grey} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.searchInputContainer}>
          <Icon name="search" size={30} style={{ marginLeft: 20 }} />
          <TextInput placeholder="Search" style={{ fontSize: 20, paddingLeft: 10, textDecoration: 'none' }}></TextInput>
        </View>
        <CategoryList />
        <View>
          <FlatList
            horizontal
            // data={hotels}
            contentContainerStyle={{
              paddingVertical: 30, paddingLeft: 20
            }}
          // showsHorizontalScrollIndicator={false}
          // renderItem={({ item, index }) => <Card hotel={item} index={index} />}

          />
        </View>
      </ScrollView>

    </safeAreaView >

  );
};
const style = ({
  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    marginTop: 15,
    marginLeft: 20,
    borderTopLeftRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  card: {
    height: 280,
    width: cardWidth,
    elevation: '15',
    marginRight: 20,
    borderRadius: 15,
    backgroundColor: COLORS.white

  }
});


export default HomeScreen;