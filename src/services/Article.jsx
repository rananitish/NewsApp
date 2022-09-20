import React, {useState} from "react";
import {View,StyleSheet,Text,Pressable,Image} from "react-native";
import Modal from "react-native-modal";
import { Linking } from 'react-native';




const Article = (props) => {

    const [modalVisible,setModalVisible] = useState(false);

    const handlePress=()=>{
        setModalVisible(!modalVisible);
    }

    return(
        <>
        <Pressable style={styles.container} onPress={handlePress}>
        
            {/* image */}
            <Image source={{
                url: props.urlToImage
            }}
            style={styles.image}
            />

            <View style={{padding: 20}}>


        {/*    title */}
            <Text style={styles.title}>{props.title}</Text>

        {/*    description */}
            <Text style={styles.description} numberOfLines={2}>
                {props.description}
            </Text>

            <View style={styles.data}>
                <Text style={styles.heading}>by: <Text style={styles.author}>{props.author}</Text></Text>
               
            </View>

        {/*     source */}
            <View style={{marginTop: 10}}>
                <Text>source: <Text style={styles.source}>{props.sourceName}</Text></Text>
            </View>
            </View>
        </Pressable>

        <Modal
            animationOut = "slideOutDown"
            transparent={true}
            isVisible={modalVisible}
            style={{justifyContent: 'flex-end', margin: 0}}
            onRequestClose={() => {
               handlePress();
            }}
            onBackdropPress={() => {
                handlePress();
            }}>
            <View style={styles.modal}>

            <Text onPress={handlePress} style={{marginTop:20, marginBottom:5,marginLeft:10, fontWeight:"600"}}>  Back </Text>   


            <Pressable style={styles.container_2} style={{marginTop:0}}>
        
                 {/* image */}
                    <Image source={{
                        url: props.urlToImage
                    }}
                    style={styles.image_2}
                    />

                    <View style={{padding: 20}}>


                {/*    title */}
                    <Text style={styles.title_2}>{props.title}</Text>

                {/*    description */}
                    <Text style={styles.description_2 } numberOfLines={4}>
                        {props.content}
                       
                    </Text>
                    <Text style={{color:"red"}} onPress={() => Linking.openURL(props.url)}>
                    click to read more
                    </Text>

                    <View style={styles.data}>
                        <Text style={styles.heading}>by: <Text style={styles.author}>{props.author}</Text></Text>
                    
                    </View>

                {/*     source */}
                    <View style={{marginTop: 10}}>
                        <Text>source: <Text style={styles.source}>{props.sourceName}</Text></Text>
                    </View>
                    </View>
                </Pressable>

            </View>

        </Modal>

        </>

    )
}

export default Article;

const styles = StyleSheet.create({
    container:{
        width: "90%",
        alignSelf: "center",
        borderRadius: 40,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: "#fff",
        marginTop: 20
    },
    container_2:{
        width: "90%",
        flex:1,
        alignSelf: "center",
        borderRadius: 40,
        shadowOpacity: 0.5,
        shadowColor: "#000",
        shadowOffset: {
            height: 5,
            width: 5
        },
        backgroundColor: "#fff",
        marginTop: 20

    },
    image:{
        height: 200,
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    image_2:{
        padding:10,
        height: 400,
        width: "100%",
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40
    },
    title:{
        fontSize: 18,
        fontWeight: "600",
        marginTop: 10
    },
    title_2:{
        fontSize: 22,
        fontWeight: "600",
        marginTop: 10
    },
    description:{
        fontSize: 16,
        fontWeight: "400",
        marginTop: 10
    },
    description_2:{
        fontSize: 18,
        fontWeight: "400",
        marginTop: 20
    },
    data:{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10
    },
    heading:{

    },
    author:{
        fontWeight: "bold",
        fontSize: 15
    },
    date:{
        fontWeight: "bold",
        color: "#e63946",
        fontSize: 15
    },
    source:{
        color: "#e63946",
        fontWeight: "bold",
        fontSize: 18
    },
    modal: {
        height: "100%",
        paddingTop: 20,
        marginTop: 'auto',
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
      },
})