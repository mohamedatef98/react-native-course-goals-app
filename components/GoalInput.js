import React, { useCallback, useState } from 'react'
import { View, TextInput, Button, StyleSheet, Modal, TouchableWithoutFeedback } from 'react-native'


const GoalInput = ({ onAddGoal, visible, onCancel }) => {
    const [courseGoal, setCourseGoal] = useState('')
    const addHandler = useCallback(
        () => {
            onAddGoal(courseGoal)
            setCourseGoal('')
        },
        [onAddGoal, courseGoal]
    )
    return <Modal visible={visible} animationType="fade" hardwareAccelerated transparent>
        <TouchableWithoutFeedback onPress={onCancel}>
            <View style={styles.modalView}>
                <TouchableWithoutFeedback onPress={() => {}} touchSoundDisabled>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Course Goal"
                            style={styles.input}
                            value={courseGoal}
                            onChangeText={text => setCourseGoal(text)}
                            onSubmitEditing={addHandler}
                        />
                        <View style={styles.controlsContainer}>
                            <View style={styles.control}>
                                <Button title="Cancel" color="tomato" onPress={onCancel} />
                            </View>
                            <View style={styles.control}>
                                <Button title="Add" onPress={addHandler} />
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </TouchableWithoutFeedback>
    </Modal>
}

const styles = StyleSheet.create({
    modalView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        backgroundColor: 'rgba(0,0,0, 0.5)'
    },
    inputContainer: {
        width: '80%',
        height: 160,
        justifyContent: 'space-around',
        backgroundColor: 'white',
        padding: 20
    },
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    control: {
        width: '40%'
    }
})

export default GoalInput
