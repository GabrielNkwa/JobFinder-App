import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'

import { COLORS, SIZES} from '../../../constants';
import PopularJobCard  from '../../common/cards/popular/PopularJobCard'
import { TouchableHighlight } from 'react-native-gesture-handler';
import useFetch from '../../../hook/useFetch'

const Popularjobs = () => {
  const router = useRouter();
  const { data, isLoading, error } = useFetch
  ( 'search', {
    query: 'React developer',
    num_pages: 1
  })

   

  return (
    <View style={styles.container}>
     <View style={styles.header}>
      <Text style={styles.headerTitle}>
          Popular Jobs
      </Text>
      <TouchableOpacity><Text style={styles.headerBtn}>Show All</Text></TouchableOpacity>
     </View>

     <View styles={styles.cardsContainer}>
      { isLoading ? (
        <ActivityIndicator size="large"  colors={COLORS.primary}/>
      ) : error ?(
        <Text>Something went Wrong</Text>
      ) : (
        <FlatList 
          data={[1,2,3,4]}
          renderItem={({ item }) => (
            <PopularJobCard
              item = {item}
            />
          )}
          keyExtractor={item => item?.job_id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          horizontal 
        />
      )}
     </View>
    </View>

   
  )
}

export default Popularjobs