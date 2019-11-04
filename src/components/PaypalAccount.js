import React from 'react';
import { ListItem } from 'react-native-elements';
import { useSelector } from 'react-redux';
import { withNavigation } from 'react-navigation';

const PaypalAccount = ({ navigation }) => {
    const { paypal } = useSelector(state => state.user);

    return (
        <ListItem
            key={1}
            checkmark={!!paypal}
            leftIcon={{ name: 'credit-card', type: 'font-awesome' }}
            title="PayPal Account"
            onPress={() => navigation.navigate('PayPalStack')}
            bottomDivider
            style={{ marginBottom: 20 }}
            topDivider
            chevron
        />
    );
};

export default withNavigation(PaypalAccount);
