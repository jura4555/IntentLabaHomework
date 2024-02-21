package com.intent.lesson12.annotation;

public class Main {
    public static void main(String... args) throws IllegalAccessException {
        MyClass myClass = new MyClass("Ihor", 11);
        MyClass myClass1 = new MyClass("Yurii", 10);

        myClass.validateData(); // ok
        myClass1.validateData(); // ok

//        MyClass myClassError1 = new MyClass("Andriy", 1001);
//        myClassError1.validateData(); // error with NUMERIC_RANGE
//
//        MyClass myClassError2 = new MyClass("A", 11);
//        myClassError2.validateData(); // error with STRING_LENGTH
    }
}
