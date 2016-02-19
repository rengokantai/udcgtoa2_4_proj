/**
 * Created by Hernan Y.Ke on 2016/2/19.
 */
import {Component} from 'angular2/core';
import {NewComponent} from "./new.component";

@Component({
    selector:'list',
    template:`
    <section>
    <new-item (itemadd)="onAdd($event)"></new-item>
    </section>
    <section>
    list
    <div class="list">
    <ul><li *ngFor="#item of listItems">
    {{item.name}}{{item.amount}}
    </li></ul></div>
    </section>
    <section>
    edit</section>
    `,
    directives:[NewComponent]
})

export class ListComponent{
    listItems = new Array<{name:string,amount:string}>();
    onAdd(item:{name:string,amount:string}){
        this.listItems.push({name:item.name,amount:item.amount});
    }
}