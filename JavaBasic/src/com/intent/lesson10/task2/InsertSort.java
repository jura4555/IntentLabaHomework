package com.intent.lesson10.task2;

import java.util.Arrays;

public class InsertSort <T extends Number> {
    T [] mass;
    InsertSort ( T [] m)
    {
        mass = m;
    }

    private void swap(T [] array, int ind1, int ind2) {
        T tmp = array[ind1];
        array[ind1] = array[ind2];
        array[ind2] = tmp;
    }

    void sort(){
        for(int i = 1; i < mass.length; i++)
            for(int j = i; j > 0 && mass[j-1].doubleValue() > mass[j].doubleValue(); j--)
                swap(mass, j - 1, j);
    }

    @Override
    public String toString() {
        return "InsertSort {" +
                "mass = " + Arrays.toString(mass) +
                '}';
    }
}
