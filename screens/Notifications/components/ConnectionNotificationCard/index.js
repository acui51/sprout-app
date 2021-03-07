import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";

// Assets
import { Images, Colors } from "../../../../assets/Themes";

// Components
import { Bubble, CustomText } from "../../../../components";

const ConnectionNotificationCard = () => {
  return (
        <View style = {styles.notificationBox}>
            <Bubble genre="pop" img={Images.sb_candy} />
            <CustomText customStyles={styles.username}>"Monsters" 
                <CustomText customStyles={styles.notificationText}> was added by djcobra to a branch you are in. 
                    <CustomText customStyles={styles.notificationTime}> 11h</CustomText>
                </CustomText>
            </CustomText>
            <TouchableOpacity>
                <Image source = {Images.delete_button} style={styles.deleteButton}></Image>
            </TouchableOpacity>
        </View> 
  );
};

const styles = StyleSheet.create({
    notificationBox: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.lightGray,
        borderRadius: 20,
        height:77,
        width:315,
        padding: 15,
    },
    profileImage: {
        width: 50,
        height: 50,
        marginRight: 15,
    },
    username: {
        color: Colors.black,
        fontWeight: 'bold',
        flex: 1,
        fontSize: 13,
    },
    notificationText: {
        color: Colors.black,
        fontWeight: 'normal',
        fontSize: 13,
    },
    notificationTime: {
        color: Colors.gray,
        fontSize: 13,
    },
    deleteButton: {
        margin: 5,
        marginLeft: 15,
        width: 20,
        height: 20,
    },
});

export default ConnectionNotificationCard;
