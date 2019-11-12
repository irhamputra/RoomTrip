import React from 'react';
import { KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { saveRoom, updateDescription } from '../redux/actions/room';
import { useDispatch, useSelector } from 'react-redux';

const Description = ({ navigation }) => {
    const room = useSelector(state => state.room);

    const dispatch = useDispatch();
    const dispatchDescription = description => dispatch(updateDescription(description));
    const dispatchAddRoom = () => dispatch(saveRoom());
    
    // TODO: change all forms to formik
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
            <ScrollView>
                <View style={{ marginHorizontal: 15, marginTop: 30 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 24, marginBottom: 15 }}>3. Tell more about your space</Text>
                    <Text style={{ color: 'darkgray', marginBottom: 15 }}>
                        Tell more about your near space. Is it near a bus or station? Cafe? Supermarket? or maybe Döner?
                    </Text>
                </View>
                <Input
                    label="Description"
                    labelStyle={{ color: 'black' }}
                    containerStyle={{ marginBottom: 10, paddingHorizontal: 15 }}
                    value={room.description}
                    autoCorrect={false}
                    multiline={true}
                    numberOfLines={4}
                    keyboardType="default"
                    autoCompleteType="name"
                    autoCapitalize="none"
                    placeholder="Lokasinya dekat dengan halte kereta dan bisa ditempuh selama 3 menit ke universitas, supermarket hanya 3 menit"
                    onChangeText={description => {
                        dispatchDescription(description);
                    }}
                />
                <View style={{ paddingHorizontal: 15 }}>
                    <Button
                        title="Save Room"
                        onPress={() => {
                            if (room) {
                                dispatchAddRoom();
                                navigation.goBack()
                            }
                        }}
                    />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default Description;
