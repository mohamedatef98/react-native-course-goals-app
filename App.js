import React, { useState, useCallback } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';

import { GoalItem, GoalInput } from './components'

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)
  
  const cancelAddModeHandler = useCallback(
    () => setIsAddMode(false),
    []
  )
  
  const addGoalHandler = useCallback(
    goal => { 
      goal && setCourseGoals(courseGoals => [...courseGoals, { id: `${(new Date()).getTime()}`, value: goal }])
      cancelAddModeHandler()
    },
    [courseGoals]
  )

  const deleteGoal = useCallback(
    (id) => setCourseGoals(courseGoals => courseGoals.filter(courseGoal => courseGoal.id !== id)),
    [courseGoals]
  )

  const goalInputHandler = useCallback(
    () => setIsAddMode(true),
    []
  )


  return (
    <View style={styles.root}>
      <Button title="Add new Goal" onPress={goalInputHandler} />
      <GoalInput onAddGoal={addGoalHandler} visible={isAddMode} onCancel={cancelAddModeHandler} />
      <FlatList
        data={courseGoals}
        renderItem={({ item }) => <GoalItem goal={item} deleteGoal={deleteGoal} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    padding: 50
  }
});
