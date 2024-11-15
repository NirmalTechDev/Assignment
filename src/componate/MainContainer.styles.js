import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  list: {
    padding: 20,
    paddingBottom: 20,
  },
  postContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 4,
  },
  postContent: {
    flex: 1,
  },
  id: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
    color: '#333',
  },
  body: {
    fontSize: 15,
    color: '#555',
  },
  deleteButton: {
    marginLeft: 16,
  },
  endMessage: {
    fontSize: 16,
    color: '#808080',
    textAlign: 'center',
    paddingVertical: 10,
  },
  
});

export default styles;
