import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    width: '100%',
    backgroundColor: '#262626',
    alignItems: 'center',
    height: 64,
    marginBottom:10,
    borderRadius:8,
  },
  containerNameTask:{
    flex:1,
    alignContent:"center",
    justifyContent:"center",
    marginHorizontal:8
  },
  nameTask:{
    fontSize:14,
    color:"#F2F2F2",
  }
});

