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
    var ItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ItemComponent = (function () {
                function ItemComponent() {
                    this.item = { name: '', amount: 0 };
                    this.removed = new core_1.EventEmitter();
                }
                ItemComponent.prototype.onItemDelete = function () {
                    this.removed.emit(this.item);
                };
                ItemComponent = __decorate([
                    core_1.Component({
                        selector: 'items',
                        template: "\n        <label for=\"name\">name</label>\n    <input type=\"text\" id=\"name\" [(ngModel)]=\"item.name\">\n    <label for=\"amount\">amount</label>\n    <input type=\"text\" id=\"amount\" [(ngModel)]=\"item.amount\">\n    <button (click)=\"onItemDelete()\">remove</button>\n    ",
                        inputs: ['item'],
                        outputs: ['removed']
                    }), 
                    __metadata('design:paramtypes', [])
                ], ItemComponent);
                return ItemComponent;
            })();
            exports_1("ItemComponent", ItemComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QvaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiSXRlbUNvbXBvbmVudCIsIkl0ZW1Db21wb25lbnQuY29uc3RydWN0b3IiLCJJdGVtQ29tcG9uZW50Lm9uSXRlbURlbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBT0E7Z0JBQUFBO29CQWVJQyxTQUFJQSxHQUFHQSxFQUFDQSxJQUFJQSxFQUFDQSxFQUFFQSxFQUFDQSxNQUFNQSxFQUFDQSxDQUFDQSxFQUFDQSxDQUFDQTtvQkFDMUJBLFlBQU9BLEdBQUNBLElBQUlBLG1CQUFZQSxFQUFZQSxDQUFDQTtnQkFLekNBLENBQUNBO2dCQUpHRCxvQ0FBWUEsR0FBWkE7b0JBQ0lFLElBQUlBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLENBQUNBO2dCQUNqQ0EsQ0FBQ0E7Z0JBbkJMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxRQUFRQSxFQUFDQSxPQUFPQTt3QkFDaEJBLFFBQVFBLEVBQUNBLDBSQU1SQTt3QkFDREEsTUFBTUEsRUFBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0E7d0JBQ2ZBLE9BQU9BLEVBQUNBLENBQUNBLFNBQVNBLENBQUNBO3FCQUN0QkEsQ0FBQ0E7O2tDQVVEQTtnQkFBREEsb0JBQUNBO1lBQURBLENBckJBLEFBcUJDQSxJQUFBO1lBckJELHlDQXFCQyxDQUFBIiwiZmlsZSI6Imxpc3QvaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBIZXJuYW4gWS5LZSBvbiAyMDE2LzIvMTkuXHJcbiAqL1xyXG5pbXBvcnQge0NvbXBvbmVudCxFdmVudEVtaXR0ZXJ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xyXG5pbXBvcnQge05ld0NvbXBvbmVudH0gZnJvbSBcIi4vbmV3LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge2xpc3RJdGVtfSBmcm9tIFwiLi4vaXRlbXR5cGVcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6J2l0ZW1zJyxcclxuICAgIHRlbXBsYXRlOmBcclxuICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPm5hbWU8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgWyhuZ01vZGVsKV09XCJpdGVtLm5hbWVcIj5cclxuICAgIDxsYWJlbCBmb3I9XCJhbW91bnRcIj5hbW91bnQ8L2xhYmVsPlxyXG4gICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJhbW91bnRcIiBbKG5nTW9kZWwpXT1cIml0ZW0uYW1vdW50XCI+XHJcbiAgICA8YnV0dG9uIChjbGljayk9XCJvbkl0ZW1EZWxldGUoKVwiPnJlbW92ZTwvYnV0dG9uPlxyXG4gICAgYCxcclxuICAgIGlucHV0czpbJ2l0ZW0nXSxcclxuICAgIG91dHB1dHM6WydyZW1vdmVkJ11cclxufSlcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgSXRlbUNvbXBvbmVudHtcclxuICAgIGl0ZW0gPSB7bmFtZTonJyxhbW91bnQ6MH07XHJcbiAgICByZW1vdmVkPW5ldyBFdmVudEVtaXR0ZXI8bGlzdEl0ZW0+KCk7XHJcbiAgICBvbkl0ZW1EZWxldGUoKXtcclxuICAgICAgICB0aGlzLnJlbW92ZWQuZW1pdCh0aGlzLml0ZW0pO1xyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
