System.register(['angular2/core', "./new.component"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, new_component_1;
    var ListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (new_component_1_1) {
                new_component_1 = new_component_1_1;
            }],
        execute: function() {
            ListComponent = (function () {
                function ListComponent() {
                    this.listItems = new Array();
                }
                ListComponent.prototype.onAdd = function (item) {
                    this.listItems.push({ name: item.name, amount: item.amount });
                };
                ListComponent = __decorate([
                    core_1.Component({
                        selector: 'list',
                        template: "\n    <section>\n    <new-item (itemadd)=\"onAdd($event)\"></new-item>\n    </section>\n    <section>\n    list\n    <div class=\"list\">\n    <ul><li *ngFor=\"#item of listItems\">\n    {{item.name}}{{item.amount}}\n    </li></ul></div>\n    </section>\n    <section>\n    edit</section>\n    ",
                        directives: [new_component_1.NewComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], ListComponent);
                return ListComponent;
            })();
            exports_1("ListComponent", ListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QvbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiTGlzdENvbXBvbmVudCIsIkxpc3RDb21wb25lbnQuY29uc3RydWN0b3IiLCJMaXN0Q29tcG9uZW50Lm9uQWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQUE7b0JBb0JJQyxjQUFTQSxHQUFHQSxJQUFJQSxLQUFLQSxFQUErQkEsQ0FBQ0E7Z0JBSXpEQSxDQUFDQTtnQkFIR0QsNkJBQUtBLEdBQUxBLFVBQU1BLElBQWdDQTtvQkFDbENFLElBQUlBLENBQUNBLFNBQVNBLENBQUNBLElBQUlBLENBQUNBLEVBQUNBLElBQUlBLEVBQUNBLElBQUlBLENBQUNBLElBQUlBLEVBQUNBLE1BQU1BLEVBQUNBLElBQUlBLENBQUNBLE1BQU1BLEVBQUNBLENBQUNBLENBQUNBO2dCQUM3REEsQ0FBQ0E7Z0JBdkJMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxNQUFNQTt3QkFDZkEsUUFBUUEsRUFBQ0Esd1NBYVJBO3dCQUNEQSxVQUFVQSxFQUFDQSxDQUFDQSw0QkFBWUEsQ0FBQ0E7cUJBQzVCQSxDQUFDQTs7a0NBT0RBO2dCQUFEQSxvQkFBQ0E7WUFBREEsQ0F4QkEsQUF3QkNBLElBQUE7WUF4QkQseUNBd0JDLENBQUEiLCJmaWxlIjoibGlzdC9saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEhlcm5hbiBZLktlIG9uIDIwMTYvMi8xOS5cclxuICovXHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtOZXdDb21wb25lbnR9IGZyb20gXCIuL25ldy5jb21wb25lbnRcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J2xpc3QnLFxyXG4gICAgdGVtcGxhdGU6YFxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICA8bmV3LWl0ZW0gKGl0ZW1hZGQpPVwib25BZGQoJGV2ZW50KVwiPjwvbmV3LWl0ZW0+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICA8c2VjdGlvbj5cclxuICAgIGxpc3RcclxuICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XHJcbiAgICA8dWw+PGxpICpuZ0Zvcj1cIiNpdGVtIG9mIGxpc3RJdGVtc1wiPlxyXG4gICAge3tpdGVtLm5hbWV9fXt7aXRlbS5hbW91bnR9fVxyXG4gICAgPC9saT48L3VsPjwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICAgPHNlY3Rpb24+XHJcbiAgICBlZGl0PC9zZWN0aW9uPlxyXG4gICAgYCxcclxuICAgIGRpcmVjdGl2ZXM6W05ld0NvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50e1xyXG4gICAgbGlzdEl0ZW1zID0gbmV3IEFycmF5PHtuYW1lOnN0cmluZyxhbW91bnQ6c3RyaW5nfT4oKTtcclxuICAgIG9uQWRkKGl0ZW06e25hbWU6c3RyaW5nLGFtb3VudDpzdHJpbmd9KXtcclxuICAgICAgICB0aGlzLmxpc3RJdGVtcy5wdXNoKHtuYW1lOml0ZW0ubmFtZSxhbW91bnQ6aXRlbS5hbW91bnR9KTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
