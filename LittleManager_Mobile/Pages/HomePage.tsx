import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default function HomePage() {
  const [tasks, setTasks] = useState([
    { id: 1, task: 'Take out the trash', status: 'pending' },
    { id: 2, task: 'Do the dishes', status: 'pending' },
    { id: 3, task: 'Go for a run', status: 'pending' },
  ]);
  const [selectedDate, setSelectedDate] = useState('');

  const handleDone = (taskId) => {
    setTasks((prevTasks) => prevTasks.map((task) => {
      if (task.id === taskId) {
        task.status = 'done';
      }
      return task;
    }));
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={styles.taskText}>{item.task}</Text>
            <TouchableOpacity
              style={styles.doneButton}
              onPress={() => handleDone(item.id)}
            >
              <Text>Done</Text>
            </TouchableOpacity>
          </View>
        )}
      />
       <View>
      <Calendar
        onDayPress={handleDayPress}
        style={styles.calendar}
        theme={{
          selectedDayBackgroundColor: '#6e3b6e',
          todayTextColor: '#6e3b6e',
          arrowColor: 'white',
        }}
      />
      {selectedDate && (
        <View style={styles.taskListContainer}>
          <FlatList
            data={tasks[selectedDate]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View >
                <Text style={styles.taskText}>{item.task}</Text>
                <TouchableOpacity
                  style={styles.doneButton}
                  onPress={() => handleDone(item.id)}
                >
                  <Text >Done</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
    </View>
    </View>
  );
};

const styles = {
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  taskText: {
    fontSize: 18,
  },
  doneButton: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 4,
  },
  doneText: {
    color: 'white',
    fontWeight: 'bold',
  },
  calendar: {
    marginBottom: 10,
  },
  taskListContainer: {
    padding: 10,
  },
};

//export default TaskScheduler;


/**
 * import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

const TaskScheduler = () => {
  const [tasks, setTasks] = useState({});
  const [selectedDate, setSelectedDate] = useState('');

  const handleDone = (taskId) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      updatedTasks[selectedDate] = updatedTasks[selectedDate].map((task) => {
        if (task.id === taskId) {
          task.status = 'done';
        }
        return task;
      });
      return updatedTasks;
    });
  };

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  return (
    <View>
      <Calendar
        onDayPress={handleDayPress}
        style={styles.calendar}
        theme={{
          selectedDayBackgroundColor: '#6e3b6e',
          todayTextColor: '#6e3b6e',
          arrowColor: 'white',
        }}
      />
      {selectedDate && (
        <View style={styles.taskListContainer}>
          <FlatList
            data={tasks[selectedDate]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.taskContainer}>
                <Text style={styles.taskText}>{item.task}</Text>
                <TouchableOpacity
                  style={styles.doneButton}
                  onPress={() => handleDone(item.id)}
                >
                  <Text style={styles.doneText}>Done</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10,
  },
  taskListContainer: {
    padding: 10,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  taskText: {
    fontSize: 18,
  },
  doneButton: {
    backgroundColor: 'green',
    padding: 8,
    borderRadius: 4,
  },
  doneText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TaskScheduler;

 * 
 * 
 */