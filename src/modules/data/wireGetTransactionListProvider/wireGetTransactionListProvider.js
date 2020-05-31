import { register, ValueChangedEvent } from '@lwc/wire-service';
import { transactions } from 'data/transactions';

export default function getTransactionList() {
    // eslint-disable-next-line no-unused-vars
    return new Promise((resolve, reject) => {
        resolve();
    });
}

register(getTransactionList, (eventTarget) => {
    eventTarget.addEventListener('connect', () => {
        eventTarget.dispatchEvent(new ValueChangedEvent({ data: transactions }));
    });
});
