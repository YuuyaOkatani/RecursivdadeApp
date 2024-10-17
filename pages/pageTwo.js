import { useState } from 'react'
import { TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet, TextInput } from 'react-native'


export default function PageTwo() {

    const [x, setX] = useState();
    const [a, setA] = useState();
    const [b, setB] = useState();

    const P = (aN, bN) => {
        let xT = aN * bN;
        console.log(aN, bN);
        
        console.log(xT);
        
        return xT
    }

    const calcular = () => {
        console.log(a);
        console.log(b);

        let xT = parseInt(a) + parseInt(P(a, b - 1));

        isNaN(xT) && alert('Digite somente números');
 
        setX(xT);

    }
    
    return (
        <View style={styles.container}>
            {!b && 
            
            <Text style={styles.text}>
                P({a || 'a'} , {b || 'b'}) =  0 , se b = 0


            </Text>

            || 
            !(a*b == x ) &&

            <Text style={styles.text}>
                P({a || 'a'} , {b || 'b'}) =  {a || 'a'} + P({a || 'a'}, {b || 'b'} - 1), se b {'>'} 0
            </Text>

            || 

            !isNaN(x) && a*b == x  &&
            
            <Text style={styles.text}>
                P({a || 'a'} , {b || 'b'}) =  {x}
            </Text>

            
            }
            
            <TextInput placeholder='Digite o número do A' value={a} onChangeText={setA} style={styles.input} />
            <TextInput placeholder='Digite o número do B' value={b} onChangeText={setB} style={styles.input} />
            <TextInput placeholder='Resultado' value={x} style={styles.input} editable={false} focusable={false} />
            <TouchableOpacity style={styles.button} onPress={calcular}>
                <Text style={styles.text}>Calcular</Text>
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
    text: {
        fontSize: 20,

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'lightblue',
        width: 200,
        height: 50,
        borderRadius: 10,
        borderWidth: 1,

    },
    input: {
        width: 200,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: 'white'
    }
})