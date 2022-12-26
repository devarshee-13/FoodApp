import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React, {useState, useEffect} from 'react';

const ApiData = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [myData, setMyData] = useState();

  useEffect(() => {
    getRecipeData();
  }, []);

  const getRecipeData = () => {
    fetch(
      'https://api.spoonacular.com/recipes/random?number=10&apiKey=16c383107d4346c6bc3d615e72d3bee5',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )
      .then(res => {
        return res.json();
      })
      .then(res => {
        var data = res;
        console.log(data);
        console.log(Object.keys(data.recipes[0]));
        setIsLoaded(false);
        setMyData(data.recipes);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const showUserData = ({item}) => {
    return (
      <View style={styles.card}>
        <View style={styles.imgContainer}>
          <Image style={styles.imgStyle} source={{uri: item.image}} />
        </View>

        <View>
          <View style={styles.bioDataContainer}>
            <Text style={styles.bioData}> {item.title} </Text>
          </View>
          <View style={styles.mainContain}>
            <Text style={styles.myName}>
              {' '}
              Health Score: {item.healthScore}{' '}
            </Text>
            <Text style={styles.myName}>
              {' '}
              Ready in Minutes: {item.readyInMinutes}{' '}
            </Text>
            <Text style={styles.myName}>
              {' '}
              Price Per Serving: {item.pricePerServing}{' '}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.root}>
      <Text style={styles.mainHeader}>EXPLORE NEW RECIPES</Text>
      <FlatList
        keyExtractor={item => item.id}
        data={myData}
        renderItem={showUserData}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    paddingVertical: 100,
  },
  mainContainer: {
    width: '100%',
    minHeight: '100%',
    paddingVertical: 80,
    backgroundColor: '#7393B3',
  },
  card: {
    width: 350,
    height: 400,
    backgroundColor: '#7393B3',
    borderRadius: 10,
    margin: 20,
    shadowColor: 'grey',
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 4, height: 15},
  },
  bioDataContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#899499',
    paddingVertical: 20,
  },
  idNumber: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.5)',
    paddingRight: 20,
  },
  bioData: {
    paddingLeft: 30,
    alignItems: 'center',
    textAlign: 'center',
    fontSize: 23,
    color: '#36454F',
  },
  mainHeader: {
    fontFamily: 'Ultra-Regular',
    fontWeight: 'bold',
    textShadowColor: '#818589',
    textShadowOffset: {width: -1, height: 0},
    textShadowRadius: 5,
    fontSize: 37,
    color: '#36454F',
    textAlign: 'center',
    paddingTop: 20,
  },
  imgContainer: {
    padding: 10,
    borderRadius: 10,
  },
  imgStyle: {
    width: '100%',
    height: 180,
  },
  mainContain: {
    padding: 10,
    backgroundColor: '#708090',

    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  myName: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    alignSelf: 'flex-start',
    textTransform: 'capitalize',
  },
});

export default ApiData;
