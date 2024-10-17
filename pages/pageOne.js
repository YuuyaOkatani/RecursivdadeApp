import { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, TextInput } from 'react-native'


export default function PageOne({navigation}) {

    const [e, setE] = useState();
    const [b, setB] = useState(); 
    const [x, setX] = useState();

    const calcular = () => {
        console.log(b);
        console.log(e);
        
        let aT = Math.pow(b, 1); 
        let bT = Math.pow(b, e - 1)
        let xT = aT * bT;
        isNaN(xT) && alert('Digite somente números'); 
        setX(xT);
      
    }

    const changePage = () => {
        navigation.navigate('PageTwo');
        
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {x || 'x'} = {b || 'b'}^1 * {b || 'b'}^{e || 'e'}-1
            </Text>
            <TextInput placeholder='Digite o número do B' value={b} onChangeText={setB} style={styles.input} />
            <TextInput placeholder='Digite o número do e' value={e} onChangeText={setE} style={styles.input} />
            <TextInput placeholder='Resultado' value={x} style={styles.input} editable={false} focusable={false}  />
            <TouchableOpacity style={styles.button} onPress={calcular}>
                <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => changePage()}>
                <Text style={styles.text}>Soma recursiva</Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightgreen',
        alignItems: 'center',
        justifyContent: 'center',
        rowGap: 20
    },
    text:{
        fontSize: 20,

    },
    button:{
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        width: 200,
        height: 50,
        borderRadius: 10, 
        borderWidth: 1,

    },
    input:{
        width: 200,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor:'white'
    }
})