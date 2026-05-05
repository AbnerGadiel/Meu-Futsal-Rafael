import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#fff',
          height: Platform.OS === 'ios' ? 90 : 60,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
        }}
      />
    </Tabs>
  );
}