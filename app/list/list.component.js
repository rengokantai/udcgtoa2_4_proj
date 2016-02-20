System.register(['angular2/core', "./new.component", "./item.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, new_component_1, item_component_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (new_component_1_1) {
                new_component_1 = new_component_1_1;
            },
            function (item_component_1_1) {
                item_component_1 = item_component_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent() {
                    this.listItems = new Array();
                }
                ListComponent.prototype.onAdd = function (item) {
                    this.listItems.push({ name: item.name, amount: item.amount });
                };
                ListComponent.prototype.onSelect = function (item) {
                    this.selectItem = item;
                };
                ListComponent.prototype.onRemove = function (item) {
                    this.listItems.splice(this.listItems.indexOf(item), 1);
                    this.selectItem = null;
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'list',
                        template: "\n    <section>\n    <new-item (itemadd)=\"onAdd($event)\"></new-item>\n    </section>\n    <section>\n    list\n    <div class=\"list\">\n    <ul><li *ngFor=\"#item of listItems\" (click)=\"onSelect(item)\">\n    {{item.name}}{{item.amount}}\n    </li></ul></div>\n    </section>\n    <section *ngIf=\"selectItem !=null\">\n    <items [item]=\"selectItem\" (removed)=\"onRemove($event)\">\n\n    </items></section>\n    ",
                        directives: [new_component_1.NewComponent, item_component_1.ItemComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListComponent);
                return ListComponent;
            })();
            exports_1("ListComponent", ListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QvbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiTGlzdENvbXBvbmVudCIsIkxpc3RDb21wb25lbnQuY29uc3RydWN0b3IiLCJMaXN0Q29tcG9uZW50Lm9uQWRkIiwiTGlzdENvbXBvbmVudC5vblNlbGVjdCIsIkxpc3RDb21wb25lbnQub25SZW1vdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQVFBO2dCQUFBQTtvQkFzQklDLGNBQVNBLEdBQUdBLElBQUlBLEtBQUtBLEVBQVlBLENBQUNBO2dCQVl0Q0EsQ0FBQ0E7Z0JBVkdELDZCQUFLQSxHQUFMQSxVQUFNQSxJQUFhQTtvQkFDZkUsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBQ0EsSUFBSUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsSUFBSUEsRUFBQ0EsTUFBTUEsRUFBQ0EsSUFBSUEsQ0FBQ0EsTUFBTUEsRUFBQ0EsQ0FBQ0EsQ0FBQ0E7Z0JBQzdEQSxDQUFDQTtnQkFDREYsZ0NBQVFBLEdBQVJBLFVBQVNBLElBQWFBO29CQUNsQkcsSUFBSUEsQ0FBQ0EsVUFBVUEsR0FBQ0EsSUFBSUEsQ0FBQ0E7Z0JBQ3pCQSxDQUFDQTtnQkFDREgsZ0NBQVFBLEdBQVJBLFVBQVNBLElBQWFBO29CQUNsQkksSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsU0FBU0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsRUFBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7b0JBQ3REQSxJQUFJQSxDQUFDQSxVQUFVQSxHQUFDQSxJQUFJQSxDQUFDQTtnQkFDekJBLENBQUNBO2dCQWpDTEo7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsUUFBUUEsRUFBQ0EsTUFBTUE7d0JBQ2ZBLFFBQVFBLEVBQUNBLHVhQWVSQTt3QkFDREEsVUFBVUEsRUFBQ0EsQ0FBQ0EsNEJBQVlBLEVBQUNBLDhCQUFhQSxDQUFDQTtxQkFDMUNBLENBQUNBOztrQ0FlREE7Z0JBQURBLG9CQUFDQTtZQUFEQSxDQWxDQSxBQWtDQ0EsSUFBQTtZQWxDRCx5Q0FrQ0MsQ0FBQSIsImZpbGUiOiJsaXN0L2xpc3QuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVybmFuIFkuS2Ugb24gMjAxNi8yLzE5LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge05ld0NvbXBvbmVudH0gZnJvbSBcIi4vbmV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge2xpc3RJdGVtfSBmcm9tIFwiLi4vaXRlbXR5cGVcIjtcclxuaW1wb3J0IHtJdGVtQ29tcG9uZW50fSBmcm9tIFwiLi9pdGVtLmNvbXBvbmVudFwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjonbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICA8c2VjdGlvbj5cclxuICAgIDxuZXctaXRlbSAoaXRlbWFkZCk9XCJvbkFkZCgkZXZlbnQpXCI+PC9uZXctaXRlbT5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDxzZWN0aW9uPlxyXG4gICAgbGlzdFxyXG4gICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cclxuICAgIDx1bD48bGkgKm5nRm9yPVwiI2l0ZW0gb2YgbGlzdEl0ZW1zXCIgKGNsaWNrKT1cIm9uU2VsZWN0KGl0ZW0pXCI+XHJcbiAgICB7e2l0ZW0ubmFtZX19e3tpdGVtLmFtb3VudH19XHJcbiAgICA8L2xpPjwvdWw+PC9kaXY+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbiAqbmdJZj1cInNlbGVjdEl0ZW0gIT1udWxsXCI+XHJcbiAgICA8aXRlbXMgW2l0ZW1dPVwic2VsZWN0SXRlbVwiIChyZW1vdmVkKT1cIm9uUmVtb3ZlKCRldmVudClcIj5cclxuXHJcbiAgICA8L2l0ZW1zPjwvc2VjdGlvbj5cclxuICAgIGAsXHJcbiAgICBkaXJlY3RpdmVzOltOZXdDb21wb25lbnQsSXRlbUNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50e1xyXG4gICAgbGlzdEl0ZW1zID0gbmV3IEFycmF5PGxpc3RJdGVtPigpO1xyXG4gICAgc2VsZWN0SXRlbTogbGlzdEl0ZW07XHJcbiAgICBvbkFkZChpdGVtOmxpc3RJdGVtKXtcclxuICAgICAgICB0aGlzLmxpc3RJdGVtcy5wdXNoKHtuYW1lOml0ZW0ubmFtZSxhbW91bnQ6aXRlbS5hbW91bnR9KTtcclxuICAgIH1cclxuICAgIG9uU2VsZWN0KGl0ZW06bGlzdEl0ZW0pe1xyXG4gICAgICAgIHRoaXMuc2VsZWN0SXRlbT1pdGVtO1xyXG4gICAgfVxyXG4gICAgb25SZW1vdmUoaXRlbTpsaXN0SXRlbSl7XHJcbiAgICAgICAgdGhpcy5saXN0SXRlbXMuc3BsaWNlKHRoaXMubGlzdEl0ZW1zLmluZGV4T2YoaXRlbSksMSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RJdGVtPW51bGw7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
