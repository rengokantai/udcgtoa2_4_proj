/**
 * Created by Hernan Y.Ke on 2016/2/19.
 */
import {Component} from 'angular2/core';
import {NewComponent} from "./new.component";
import {listItem} from "../itemtype";
import {ItemComponent} from "./item.component";

@Component({
    selector:'list',
    template:`
    <section>
    <new-item (itemadd)="onAdd($event)"></new-item>
    </section>
    <section>
    list
    <div class="list">
    <ul><li *ngFor="#item of listItems" (click)="onSelect(item)">
    {{item.name}}{{item.amount}}
    </li></ul></div>
    </section>
    <section *ngIf="selectItem !=null">
    <items [item]="selectItem" (removed)="onRemove($event)">

    </items></section>
    `,
    directives:[NewComponent,ItemComponent]
})

export class ListComponent{
    listItems = new Array<listItem>();
    selectItem: listItem;
    onAdd(item:listItem){
        this.listItems.push({name:item.name,amount:item.amount});
    }
    onSelect(item:listItem){
        this.selectItem=item;
    }
    onRemove(item:listItem){
        this.listItems.splice(this.listItems.indexOf(item),1);
        this.selectItem=null;
    }
}