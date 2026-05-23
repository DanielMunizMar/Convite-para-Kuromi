// COMPONENTES NATIVOS
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { styles } from './HomeStyles';
import kuromiLogo from './../../../assets/Images/kuromi-logo.png'
import kuromiInvite from './../../../assets/Images/kuromi-invite.png'
import kuromiInvite2 from './../../../assets/Images/kuromi-invite2.png'


export default function Home() {

    const [form, setForm] = useState(true);
    const [textName , setTextName] = useState<string>('');
    const [textTel , setTel] = useState<string>('');
    const [textEnder , setEnder] = useState<string>('');
    const [textMens , setMens] = useState<string>('');

    const hasText = (textName.length > 0 &&
        textTel.length > 0 &&
        textEnder.length > 0 &&
        textMens.length > 0 
    )

    function mostraForm() {
        setForm(!form)
        console.log(form)
    }

    function enviaForm() {
        if (hasText) {
            Alert.alert(
                'Completo',
                'Seu convite foi enviado.'
            );
            mostraForm()
        } else {
            Alert.alert(
                'Incompleto',
                'Preencha todos os dados antes de enviar o convite.'
            );

        }
    }


    return (
        <View style={styles.container}>

            {/**  KUROMI LOGO */}
            <View style={[styles.view2, { display: form ? 'flex' : 'none' }]}>
                <Image
                    style={styles.kuromiLogo}
                    source={kuromiLogo}>
                </Image>
            </View>

            {/**  KUROMI BUTTON */}
            <View style={[styles.butao, { display: form ? 'flex' : 'none' }]}>
                <TouchableOpacity
                    style={styles.viewButao}
                    onPress={mostraForm}
                >
                    <Text
                        style={styles.texto}
                    >🎀 KUROMI PARTY 🎀</Text>
                </TouchableOpacity>
            </View>

            {/** KUROMI FORMULÁRIO */}
            <View style={[styles.form, { display: form ? 'none' : 'flex' }]}>

                <View style={styles.kuromiInviteSpace}>
                    <Image
                        style={styles.kuromiInvite}
                        source={kuromiInvite2}>
                    </Image>
                </View>

                <View style={styles.ViewLabel}>
                    <Text style={styles.label}>Nome: </Text>
                </View>
                <View style={styles.containerTextInput}>
                    <TextInput
                        placeholder='Nome'
                        onChangeText={setTextName}
                        multiline={true}
                        style={styles.inputer}
                    ></TextInput>
                </View>

                <View style={styles.ViewLabel}>
                    <Text style={styles.label}>Telefone: </Text>
                </View>
                <View style={styles.containerTextInput}>
                    <TextInput
                        placeholder='Telefone'
                        onChangeText={setTel}
                        multiline={true}
                        style={styles.inputer}
                    ></TextInput>
                </View>

                <View style={styles.ViewLabel}>
                    <Text style={styles.label}>Endereço: </Text>
                </View>
                <View style={styles.containerTextInput}>
                    <TextInput
                        placeholder='Endereço'
                        onChangeText={setEnder}
                        multiline={true}
                        style={styles.inputer}
                    ></TextInput>
                </View>

                <View style={styles.ViewLabel}>
                    <Text style={styles.label}>Mensagem especial: </Text>
                </View>
                <View style={styles.containerTextInput}>
                    <TextInput
                        placeholder='Mensagem'
                        onChangeText={setMens}
                        multiline={true}
                        style={[styles.inputer, styles.inputerMens]}
                    ></TextInput>

                </View>

                <View style={styles.butaoEnviar}>
                    <TouchableOpacity
                        style={styles.viewButaoEnviar}
                        onPress={enviaForm}
                    >
                        <Text
                            style={styles.texto}
                        >🎀 ENVIAR 🎀</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <StatusBar style={'dark'} />
        </View>
    );
}