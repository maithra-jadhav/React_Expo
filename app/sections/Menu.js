import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';

export class Menu extends React.Component {
   
    onPress = ()=> {
        Alert.alert('You tapped the button!');
      }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this._onPress}>
                        <Text style={styles.buttonText}>WHAT WE DO</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this._onPress}>
                         <Text style={styles.buttonText}>INSIGHTS</Text>
                    </TouchableOpacity>
                   
                   
                </View>
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this._onPress}>
                         <Text style={styles.buttonText}>PEOPLE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this._onPress}>
                         <Text style={styles.buttonText}>WORKING WITH TTC</Text>
                    </TouchableOpacity>

                </View>
                      
                <View style={styles.buttonRow}>
                    <TouchableOpacity style={styles.buttonStyles} onPress={()=>this.props.navigate('ContactRT')}>
                        <Text style={styles.buttonText}>ABOUT US</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonStyles} onPress={this._onPress}>
                        <Text style={styles.buttonText}>JOIN US</Text>
                    </TouchableOpacity>
                </View>
                
           
        </View>
        );


    }

}
const styles = StyleSheet.create({
    container:{
        flex:6,
        backgroundColor:'#35605a'
    },
    buttonRow:{
        flex:2,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor:'#ffffff',
        borderBottomWidth: 1
    },
    buttonStyles:{
        backgroundColor:'#35605a',
        height: '50%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center' 
    },
    buttonText:{
        color:'#ffffff',
        fontSize: 18
    }

});
