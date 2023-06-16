import { Text, View } from "react-native"
import useHomeController from "../viewcontrollers/useHomeController";
import Task from "../models/Task";
import globalStyles from "../style";

const HomeView = (): JSX.Element => {
    const { getToDoList } = useHomeController();
    const tasks = getToDoList();
    return (
        <>
            <Text>Home Screen</Text>
            <View>{tasks ? tasks.map((task: Task, indice: number) => {
                return (
                    <View key={indice} style={globalStyles.task}>
                        <Text style={globalStyles.title}>{task.title}</Text>
                        <Text>{task.endDate}</Text>
                    </View>
                )
            }) : null}</View>
        </>
    )
}
export default HomeView;