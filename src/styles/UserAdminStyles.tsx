import { StyleSheet } from 'react-native';

export const userAdminStyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    editInputContainer: {
      marginVertical: 10,
    },
    editInput: {
      height: 50,
      width: '100%',
      alignSelf: 'center',
      borderColor: '#cccccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 15,
      backgroundColor: '#f9f9f9',
      fontSize: 16,
      color: '#333',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 2,
    },
    scrollContainer: {
      flex: 1,
      paddingHorizontal: 20,
      paddingBottom: 50,
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
      textAlign: 'center',
      marginVertical: 20,
    },
    itemContainer: {
      marginBottom: 20,
      padding: 15,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      backgroundColor: '#fff'
    },
    paginationContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
    },
    pageNumber: {
      fontSize: 16,
    },
});