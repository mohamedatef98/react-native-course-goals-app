import React, { useCallback } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const GoalItem = ({ goal, deleteGoal }) => {
    const pressHandler = useCallback(
        () => deleteGoal(goal.id),
        [deleteGoal, goal.id]
    )
    return <TouchableOpacity activeOpacity={0.5} onPress={pressHandler}>
        <View style={styles.item}>
            <Text>{goal.value}</Text>
        </View>
    </TouchableOpacity>
}


const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        backgroundColor: '#ccc'
    }
})

export default GoalItem