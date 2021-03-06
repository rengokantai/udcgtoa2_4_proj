/**
 * Created by Hernan Y.Ke on 2016/2/19.
 */
import {Component,EventEmitter} from 'angular2/core';
import {NewComponent} from "./new.component";
import {listItem} from "../itemtype";

@Component({
    selector:'items',
    template:`
        <label for="name">name</label>
    <input type="text" id="name" [(ngModel)]="item.name">
    <label for="amount">amount</label>
    <input type="text" id="amount" [(ngModel)]="item.amount">
    <button (click)="onItemDelete()">remove</button>
    `,
    inputs:['item'],
    outputs:['removed']
})


export class ItemComponent{
    item = {name:'',amount:0};
    removed=new EventEmitter<listItem>();
    onItemDelete(){
        this.removed.emit(this.item);
    }

}