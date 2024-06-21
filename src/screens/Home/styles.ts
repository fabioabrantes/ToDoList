import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  content: {
    marginHorizontal: 24,
    marginTop: -34,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
    gap: 4,
  },
  input: {
    flex: 1,
    height: 54,
    borderRadius: 6,
    backgroundColor: "#262626",
    paddingHorizontal: 16,
    paddingVertical: 16,
    fontSize: 16,
    color: "#F2F2F2"
  },
  button: {
    height: 54,
    width: 54,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
  },
  tasks: {
    width: "100%",
  },
  tasksInfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 80,
    marginBottom:30
  },


});

