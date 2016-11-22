'use strict';

describe('todo.e2e', () => {
    const SUBMIT_TODO_BUTTON = '#submit-todo-button';
    const TODO_MODEL = 'todosCtrl.todo.todoMessage';
    const CLOSE_TODO = '.todo-done';

    beforeEach(() => {
        browser.get('/');
    })

    describe('creation', () => {
        it('should have the submit button disabled', () => {
            expect($(SUBMIT_TODO_BUTTON).isEnabled()).toBeFalsy();
        })

        it('should have the right title', () => {
            expect(browser.getTitle()).toEqual('Stuff Todo!');
        })
    })

    describe('addition', () => {
        it('should add a new todo - enter', () => {
            element(by.model(TODO_MODEL)).sendKeys(
                `This was added by Protractor :D (at ${String(new Date())})`
            );

            element(by.model(TODO_MODEL)).sendKeys(protractor.Key.ENTER);

            const _count = element.all(by.repeater('t in todosCtrl.todos')).count();
            expect(_count).toBeGreaterThan(0);
        })

        it('should add a new todo - click', () => {
            element(by.model(TODO_MODEL)).sendKeys(
                `Added by Protractor :D (at ${String(new Date())})`
            );

            $(SUBMIT_TODO_BUTTON).click().then(() => {
                element.all(by.repeater('t in todosCtrl.todos'))
                .count()
                .then((count) => {
                    expect(count).toBeGreaterThan(0);
                });
            });
        })
    })

    describe('deletion', () => {
        it('should delete a todo', () => {
            const _firstCount = element.all(by.repeater('t in todosCtrl.todos')).count();

            $$(CLOSE_TODO).get(0).click(() => {
                var _secondCount = element.all(by.repeater('t in todosCtrl.todos')).count();
                expect(_secondCount).toBeLessThan(_firstCount);
            });
        })
    })
})
