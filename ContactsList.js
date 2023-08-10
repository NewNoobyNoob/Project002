import { FlatList, StyleSheet, SectionList, Text } from 'react-native';
import React from 'react';
import Row from './Row';

const renderItem = ({item}) => <Row name={item.name} phone={item.phone} />

const renderSectionHeader = (obj) => <Text>{obj.section.title}</Text>

const ContactsList = ({ contacts }) => {
    const contactsByLetters = contacts.reduce((obj, contact) => {
        const firstLetter = contact.name[0].toUpperCase();
        return {
            ...obj,
            [firstLetter]: [...(obj[firstLetter] || []), contact],
        };
    }, {});

    const sections = Object.keys(contactsByLetters)
        .sort()
        .map((letter) => ({
            title: letter,
            data: contactsByLetters[letter],
        }));

  return (
   <SectionList
     sections={sections}
     renderItem={renderItem} 
     renderSectionHeader={renderSectionHeader} 
    />
  );
};

export default ContactsList;

const styles = StyleSheet.create({});