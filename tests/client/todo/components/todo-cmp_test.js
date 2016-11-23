/// <reference path="../../../../typings/index.d.ts" />
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var testing_1 = require('@angular/core/testing');
var Observable_1 = require('rxjs/Observable');
var todo_cmp_1 = require('../../../../client/dev/todo/components/todo-cmp');
var todo_service_1 = require('../../../../client/dev/todo/services/todo-service');
var MockTodoService = (function (_super) {
    __extends(MockTodoService, _super);
    function MockTodoService() {
        _super.apply(this, arguments);
    }
    MockTodoService.prototype.getAll = function () {
        return new Observable_1.Observable(function (o) {
            o.next([]);
        });
    };
    MockTodoService.prototype.add = function (message) {
        return new Observable_1.Observable(function (o) {
            o.next(message);
        });
    };
    MockTodoService.prototype.remove = function (id) {
        return new Observable_1.Observable(function (o) {
            o.next(id);
        });
    };
    return MockTodoService;
}(todo_service_1.TodoService));
describe('todo_component', function () {
    describe('creation', function () {
        it('should create the component correctly', testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(todo_cmp_1.TodoCmp);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled).toBeDefined();
        }));
        it('should inicialize the cmp correctly', testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(todo_cmp_1.TodoCmp);
            var instance = fixture.debugElement.componentInstance;
            spyOn(instance, '_getAll').and.callFake(function () { });
            fixture.detectChanges();
            expect(instance._getAll).toHaveBeenCalled();
        }));
        it('should call add correctly', testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(todo_cmp_1.TodoCmp);
            fixture.detectChanges();
            var instance = fixture.debugElement.componentInstance;
            var _todoMsg = 'yo';
            instance.add(_todoMsg);
        }));
        it('should call remove correctly', testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(todo_cmp_1.TodoCmp);
            fixture.detectChanges();
            var instance = fixture.debugElement.componentInstance;
            var _id = 'abc123';
            instance.remove(_id);
        }));
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby1jbXBfdGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRvZG8tY21wX3Rlc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdURBQXVEOzs7Ozs7O0FBRXZELHdCQUdPLHVCQUF1QixDQUFDLENBQUE7QUFFL0IsMkJBRU8saUJBQWlCLENBQUMsQ0FBQTtBQUV6Qix5QkFBc0IsaURBQWlELENBQUMsQ0FBQTtBQUN4RSw2QkFBMEIsbURBQW1ELENBQUMsQ0FBQTtBQUU5RTtJQUE4QixtQ0FBVztJQUF6QztRQUE4Qiw4QkFBVztJQWtCekMsQ0FBQztJQWpCQyxnQ0FBTSxHQUFOO1FBQ0UsTUFBTSxDQUFDLElBQUksdUJBQVUsQ0FBQyxVQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDZCQUFHLEdBQUgsVUFBSSxPQUFlO1FBQ2pCLE1BQU0sQ0FBQyxJQUFJLHVCQUFVLENBQUMsVUFBQyxDQUFDO1lBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFPLEVBQVU7UUFDZixNQUFNLENBQUMsSUFBSSx1QkFBVSxDQUFDLFVBQUMsQ0FBQztZQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsc0JBQUM7QUFBRCxDQUFDLEFBbEJELENBQThCLDBCQUFXLEdBa0J4QztBQUVELFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUN6QixRQUFRLENBQUMsVUFBVSxFQUFFO1FBQ25CLEVBQUUsQ0FBQyx1Q0FBdUMsRUFBRSxlQUFLLENBQUM7WUFDaEQsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsa0JBQU8sQ0FBQyxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUV4QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQztZQUVsRCxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVKLEVBQUUsQ0FBQyxxQ0FBcUMsRUFBRSxlQUFLLENBQUM7WUFDOUMsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsa0JBQU8sQ0FBQyxDQUFDO1lBQ2xELElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUM7WUFFdEQsS0FBSyxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEQsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ3hCLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRUosRUFBRSxDQUFDLDJCQUEyQixFQUFFLGVBQUssQ0FBQztZQUNwQyxJQUFJLE9BQU8sR0FBRyxpQkFBTyxDQUFDLGVBQWUsQ0FBQyxrQkFBTyxDQUFDLENBQUM7WUFDbEQsT0FBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBRXhCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUM7WUFFdEQsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQ3BCLFFBQVEsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVKLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRSxlQUFLLENBQUM7WUFDdkMsSUFBSSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsa0JBQU8sQ0FBQyxDQUFDO1lBQ2xELE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUV4QixJQUFJLFFBQVEsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDO1lBQ3RELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQztZQUVuQixRQUFRLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDTixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=