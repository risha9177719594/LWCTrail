import { LightningElement, wire } from 'lwc';
import getTransactionList from 'data/wireGetTransactionListProvider';

export default class EventBubbling extends LightningElement {
    selectedTransaction;

    @wire(getTransactionList) transactions;

    handleTransactionSelect(event) {
        this.selectedTransaction = event.target.transaction;
    }
}
