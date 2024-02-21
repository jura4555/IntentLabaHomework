package com.intent.lesson11;

import java.util.ArrayList;
import java.util.LinkedList;

public class CompareListSpeed {

    public void addingToStart(long size) {
        ArrayList<Integer> arrayList = new ArrayList<>();
        LinkedList<Integer> linkedList = new LinkedList<>();
        long startTimeArrayList = System.nanoTime();
        for (int i = 0; i < size; i++) {
            arrayList.add(0, i);
        }
        long endTimeArrayList = System.nanoTime();
        long durationArrayListStart = endTimeArrayList - startTimeArrayList;

        long startTimeLinkedList = System.nanoTime();
        for (int i = 0; i < size; i++) {
            linkedList.addFirst(i);
        }
        long endTimeLinkedList = System.nanoTime();
        long durationLinkedListStart = endTimeLinkedList - startTimeLinkedList;
        System.out.println("Insertion time for ArrayList at start: " + durationArrayListStart + " nanoseconds");
        System.out.println("Insertion time for LinkedList at start: " + durationLinkedListStart + " nanoseconds");
    }

    public void addingToMiddle(long size) {
        ArrayList<Integer> arrayList = new ArrayList<>();
        LinkedList<Integer> linkedList = new LinkedList<>();
        long startTimeArrayList = System.nanoTime();
        for (int i = 0; i < size; i++) {
            arrayList.add(arrayList.size() / 2, i);
        }
        long endTimeArrayList = System.nanoTime();
        long durationArrayListMiddle = endTimeArrayList - startTimeArrayList;

        long startTimeLinkedList = System.nanoTime();
        for (int i = 0; i < size; i++) {
            linkedList.add(linkedList.size() / 2, i);
        }
        long endTimeLinkedList = System.nanoTime();
        long durationLinkedListMiddle = endTimeLinkedList - startTimeLinkedList;
        System.out.println("Insertion time for ArrayList at middle: " + durationArrayListMiddle + " nanoseconds");
        System.out.println("Insertion time for LinkedList at middle: " + durationLinkedListMiddle + " nanoseconds");
    }

    public void addingToEnd(long size) {
        ArrayList<Integer> arrayList = new ArrayList<>();
        LinkedList<Integer> linkedList = new LinkedList<>();
        long startTimeArrayList = System.nanoTime();
        for (int i = 0; i < size; i++) {
            arrayList.add(i);
        }
        long endTimeArrayList = System.nanoTime();
        long durationArrayListEnd = endTimeArrayList - startTimeArrayList;

        long startTimeLinkedList = System.nanoTime();
        for (int i = 0; i < size; i++) {
            linkedList.addLast(i);
        }
        long endTimeLinkedList = System.nanoTime();
        long durationLinkedListEnd = endTimeLinkedList - startTimeLinkedList;
        System.out.println("Insertion time for ArrayList at middle: " + durationArrayListEnd + " nanoseconds");
        System.out.println("Insertion time for LinkedList at middle: " + durationLinkedListEnd + " nanoseconds");
    }

}
