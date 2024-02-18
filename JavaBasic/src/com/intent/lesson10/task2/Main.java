package com.intent.lesson10.task2;

public class Main {
    public static void main(String ...args){
        Double[] ar = {10.2, 2.7, 10.5, 3.3, 1.1, 2.8, 5.9};
        InsertSort<Double> fff = new InsertSort<>(ar);
        fff.sort();
        System.out.println(fff);
    }
}
