// import React, {useState} from 'react';
// import {FlatList, StyleSheet, View, Text, Button, Modal} from 'react-native';

// import {TODOS} from '../data/dummy-data';
// import {
//   TouchableOpacity,
//   TouchableWithoutFeedback,
// } from 'react-native-gesture-handler';

// const TodayScreen = ({navigation}) => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [title, setTitle] = useState('');
//   const [description, setDescription] = useState('');
//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [category, setCategory] = useState('');
//   const [color, setColor] = useState('');

//   const renderToDoList = itemData => {
//     return (
//       <TouchableOpacity
//         onPress={() =>
//           handleModalToggle(
//             itemData.item.title,
//             itemData.item.date,
//             itemData.item.time,
//             itemData.item.description,
//             itemData.item.category,
//             itemData.item.color,
//           )
//         }>
//         <View style={styles.toDoCard}>
//           <Text>{itemData.item.title}</Text>
//         </View>
//       </TouchableOpacity>
//     );
//   };

//   const handleModalToggle = (
//     title,
//     date,
//     time,
//     description,
//     category,
//     color,
//   ) => {
//     setModalOpen(!modalOpen);
//     setTitle(title);
//     setDate(date);
//     setTime(time);
//     setDescription(description);
//     setCategory(category);
//     setColor(color);
//   };

//   return (
//     <View>
//       <Modal transparent={true} visible={modalOpen}>
//         <View style={styles.outerModal}>
//           <View style={styles.innerModalContainer}>
//             <Button title="X" onPress={() => handleModalToggle()} />
//             <Text>{title}</Text>
//             <Text>Created By</Text>
//             <Text>Name</Text>
//             <Text>Due Date</Text>
//             <Text>
//               {date}
//               {time}
//             </Text>
//             <Text>Descriotion</Text>
//             <Text>{description}</Text>
//             <Text>Category</Text>
//             <Text>{category}</Text>
//             <Text>Color</Text>
//             <Text>{color}</Text>
//           </View>
//         </View>
//       </Modal>
//       <FlatList data={TODOS} renderItem={renderToDoList} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   toDoCard: {
//     flex: 1,
//     height: 50,
//   },
//   outerModal: {
//     flex: 1,
//     backgroundColor: 'rgba(50,50,50,.3)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   innerModalContainer: {
//     backgroundColor: 'white',
//     height: '80%',
//     width: '80%',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default TodayScreen;
