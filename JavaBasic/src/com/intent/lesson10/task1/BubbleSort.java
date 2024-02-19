package com.intent.lesson10.task1;

import java.util.Arrays;

public class BubbleSort <T extends Number> {
    T [] mass;

    public BubbleSort ( T [] m)
    {
        mass = m;
    }

    private void swap(T [] array, int ind1, int ind2) {
        T tmp = array[ind1];
        array[ind1] = array[ind2];
        array[ind2] = tmp;
    }

    void sort() {
        boolean needIteration = true;
        while(needIteration) {
            needIteration = false;
            for (int i = 1; i < mass.length; i++) {
                if (mass[i - 1].doubleValue() > mass[i].doubleValue()) {
                    swap(mass, i, i - 1);
                    needIteration = true;
                }
            }
        }
    }

    @Override
    public String toString() {
        return "BubbleSort {" +
                "mass = " + Arrays.toString(mass) +
                '}';
    }
}
