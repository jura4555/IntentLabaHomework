package com.intent.lesson11;

public class Main {
    public static void main(String ...args) {
        testLinkedListImplFunctionality();
        CompareListSpeed compareListSpeed = new CompareListSpeed();
        compareListSpeed.addingToStart(10_000);
        compareListSpeed.addingToMiddle(10_000);
        compareListSpeed.addingToEnd(10_000);
    }

    private static void testLinkedListImplFunctionality(){
        LinkedListImpl li = new LinkedListImpl();
        System.out.print("Додвання елементів в початок масиву:");
        li.addFirst(5);
        li.addFirst(6);
        System.out.println(li);
        System.out.print("Додвання елементів в кінець масиву:");
        li.addLast(null);
        li.addLast(7);
        System.out.println(li);
        System.out.print("Додвання елементів в середину масиву:");
        li.add(li.size()/2, "Middle1");
        li.add(li.size()/2, "Middle2");
        System.out.println(li);

        System.out.println("Перевірка чи присутній елемент null: " + li.contains(null));
        System.out.println("Перевірка чи присутній елемент 7: "+ li.contains(7));
        System.out.println("Перевірка чи присутній елемент 48652147: " + li.contains(48652147));

        System.out.println("Масив: " + li);
        System.out.println("Видалення першого елемента: " + li.removeFirst());
        System.out.println("Масив після видалення першого елемента: " + li);

        System.out.println("Видалення останнього елемента: " + li.removeLast());
        System.out.println("Масив після видалення останнього елемента: " + li);

        System.out.println("Видалення середнього елемента по значенню: " + li.remove("Middle1"));
        System.out.println("Масив після видалення середнього елемента: " + li);

        System.out.println("Отримання першого елемента: " + li.getFirst());
        System.out.println("Отримання останнього елемента: " + li.getLast());
        System.out.println("Отримання елемета по індексу: " + li.get(1));

        li.clear();
        System.out.println("Очищення масиву: " + li);
    }
}
