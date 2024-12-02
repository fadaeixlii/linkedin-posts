class Cook {
    mixAndBake() {
        /* ... */
    }
}

class AssistantCook {
    pourIngredients() {
        /* ... */
    }
    chillCake() {
        /* ... */
    }
}

const chef = new Cook();
const assistant = new AssistantCook();

assistant.pourIngredients();
chef.mixAndBake();
assistant.chillCake();