import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  containerTitle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "center",
    gap: 8,
  },
  textTitle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  containerCount: {
    borderRadius: 999,
    width: 25,
    height: 20,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textCount: {
    fontSize: 12,
    fontWeight: 'bold',
    color: "#D9D9D9",
  }
});

