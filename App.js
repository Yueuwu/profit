import { StatusBar } from "expo-status-bar"
import { useState } from "react"
import { StyleSheet, Text, TextInput, View } from "react-native"

export default function App() {
	const [income, setIncome] = useState()

  const onSetIncome = (value) => {
    const isInputValid = isNaN(Number(value))
    if (isInputValid){
      return;
    }
    setIncome(value)
  }

	const date = new Date().toLocaleDateString()

	return (
		<View style={styles.container}>
			<Text style={styles.text}>
				Сколько ты заработала сегодня ({date}) {income}?
			</Text>
			<TextInput
				style={styles.input}
        value={income}
        onChangeText={value => onSetIncome(value)}
				placeholder="Введи сумму..."
			/>
			<StatusBar backgroundColor="#CEBBF5" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		height: 40,
		width: "70%",
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
})
