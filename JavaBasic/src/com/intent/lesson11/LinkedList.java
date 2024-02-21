package com.intent.lesson11;


public interface LinkedList {
    void clear();

    int size();

    void addFirst(Object element);

    void addLast(Object element);

    void add(int index, Object element);

    boolean removeFirst();

    boolean removeLast();

    boolean remove(Object element);

    Object getFirst();

    Object getLast();

    Object get(int index);

    boolean contains(Object element);
}
