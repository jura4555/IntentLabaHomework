package com.intent.lesson10.task1;

public class Main {
    public static void main(String ...args){
        Double[] ar = {10.2, 0.1, 10.5, 3.3, 1.1, 2.8, 5.9};
        BubbleSort<Double> fff = new BubbleSort<>(ar);
        fff.sort();
        System.out.println(fff);
    }
}
