import { ScrollView } from "react-native";
import { Card } from "react-native-elements";

const ContactScreen = () => {
    return (
        <ScrollView>
            <Card wrapperStyle={{margin: 20}}>
                <Card.Title>
                    Contact Information
                </Card.Title>
                <Card.Divider />
                <Text></Text>

                <Text style={{marginBottom: 10}}></Text>

            </Card>
        </ScrollView>
    );
}
 
export default ContactScreen;