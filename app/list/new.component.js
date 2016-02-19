System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var NewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NewComponent = (function () {
                function NewComponent() {
                    this.item = { name: '', amount: 0 };
                    this.itemadd = new core_1.EventEmitter();
                }
                NewComponent.prototype.onItemAdd = function () {
                    this.itemadd.emit(this.item);
                };
                NewComponent = __decorate([
                    core_1.Component({
                        selector: 'new-item',
                        template: "\n        <label for=\"name\">name</label>\n    <input type=\"text\" id=\"name\" [(ngModel)]=\"item.name\">\n    <label for=\"amount\">amount</label>\n    <input type=\"text\" id=\"amount\" [(ngModel)]=\"item.amount\">\n    <button (click)=\"onItemAdd()\">add</button>\n    ",
                        outputs: ['itemadd']
                    }), 
                    __metadata('design:paramtypes', [])
                ], NewComponent);
                return NewComponent;
            })();
            exports_1("NewComponent", NewComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QvbmV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6WyJOZXdDb21wb25lbnQiLCJOZXdDb21wb25lbnQuY29uc3RydWN0b3IiLCJOZXdDb21wb25lbnQub25JdGVtQWRkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFNQTtnQkFBQUE7b0JBYUlDLFNBQUlBLEdBQUNBLEVBQUNBLElBQUlBLEVBQUNBLEVBQUVBLEVBQUNBLE1BQU1BLEVBQUNBLENBQUNBLEVBQUNBLENBQUNBO29CQUN4QkEsWUFBT0EsR0FBQ0EsSUFBSUEsbUJBQVlBLEVBQStCQSxDQUFDQTtnQkFJNURBLENBQUNBO2dCQUhHRCxnQ0FBU0EsR0FBVEE7b0JBQ0lFLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNqQ0EsQ0FBQ0E7Z0JBakJMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxVQUFVQTt3QkFDbkJBLFFBQVFBLEVBQUNBLG9SQU1SQTt3QkFDREEsT0FBT0EsRUFBQ0EsQ0FBQ0EsU0FBU0EsQ0FBQ0E7cUJBQ3RCQSxDQUFDQTs7aUNBUURBO2dCQUFEQSxtQkFBQ0E7WUFBREEsQ0FsQkEsQUFrQkNBLElBQUE7WUFsQkQsdUNBa0JDLENBQUEiLCJmaWxlIjoibGlzdC9uZXcuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgSGVybmFuIFkuS2Ugb24gMjAxNi8yLzE5LlxyXG4gKi9cclxuaW1wb3J0IHtDb21wb25lbnQsRXZlbnRFbWl0dGVyfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiduZXctaXRlbScsXHJcbiAgICB0ZW1wbGF0ZTpgXHJcbiAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5uYW1lPC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIFsobmdNb2RlbCldPVwiaXRlbS5uYW1lXCI+XHJcbiAgICA8bGFiZWwgZm9yPVwiYW1vdW50XCI+YW1vdW50PC9sYWJlbD5cclxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYW1vdW50XCIgWyhuZ01vZGVsKV09XCJpdGVtLmFtb3VudFwiPlxyXG4gICAgPGJ1dHRvbiAoY2xpY2spPVwib25JdGVtQWRkKClcIj5hZGQ8L2J1dHRvbj5cclxuICAgIGAsXHJcbiAgICBvdXRwdXRzOlsnaXRlbWFkZCddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgTmV3Q29tcG9uZW50e1xyXG4gICAgaXRlbT17bmFtZTonJyxhbW91bnQ6MH07XHJcbiAgICBpdGVtYWRkPW5ldyBFdmVudEVtaXR0ZXI8e25hbWU6c3RyaW5nLGFtb3VudDpudW1iZXJ9PigpO1xyXG4gICAgb25JdGVtQWRkKCl7XHJcbiAgICAgICAgdGhpcy5pdGVtYWRkLmVtaXQodGhpcy5pdGVtKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
