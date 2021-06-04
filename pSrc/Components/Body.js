import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, SafeAreaView } from 'react-native';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
export default function Body() {


    return (
        <View>
            <View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/swiper.scss';

// export default () => {
//     return (
//         <View>
{/* <Swiper
spaceBetween={50}
slidesPerView={3}
onSlideChange={() => console.log('slide change')}
onSwiper={(swiper) => console.log(swiper)}
>
<SwiperSlide>Slide 1</SwiperSlide>
<SwiperSlide>Slide 2</SwiperSlide>
<SwiperSlide>Slide 3</SwiperSlide>
<SwiperSlide>Slide 4</SwiperSlide>
...
</Swiper> */}
//         </View>
//     );
// };