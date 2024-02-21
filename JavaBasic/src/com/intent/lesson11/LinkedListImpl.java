package com.intent.lesson11;

import java.util.Iterator;
import java.util.NoSuchElementException;

public class LinkedListImpl implements LinkedList {
    private Node first;
    private Node last;
    private int size;

    public LinkedListImpl() {
        this.size = 0;
    }

    private static class Node {
        private Object item;
        private Node next;
        private Node prev;

        public Node(Node var1, Object item, Node var3) {
            this.item = item;
            this.next = var3;
            this.prev = var1;
        }
    }

    @Override
    public void clear() {
        Node var2;
        for (Node var1 = first; var1 != null; var1 = var2) {
            var2 = var1.next;
            var1.item = null;
            var1.next = null;
            var1.prev = null;
        }
        first = last = null;
        size = 0;
    }

    @Override
    public int size() {
        return size;
    }


    public Iterator<Object> iterator() {
        return new IteratorImpl();
    }


    private class IteratorImpl implements Iterator<Object> {
        private Node currentNode = null;

        @Override
        public boolean hasNext() {
            return currentNode != last;
        }

        @Override
        public Object next() {
            if (currentNode == null) {
                currentNode = first;
                return currentNode.item;
            }
            if (currentNode.next == null) {
                throw new NoSuchElementException();
            }
            currentNode = currentNode.next;
            return currentNode.item;
        }
    }

    private Object unlinkNode(Node var1) {
        Object var2 = var1.item;
        Node var3 = var1.next;
        Node var4 = var1.prev;
        if (var4 == null) {
            first = var3;
        } else {
            var4.next = var3;
            var1.prev = null;
        }
        if (var3 == null) {
            this.last = var4;
        } else {
            var3.prev = var4;
            var1.next = null;
        }

        var1.item = null;
        --size;
        return var2;
    }

    @Override
    public void addFirst(Object element) {
        Node nodeBefore = first;
        Node nodeAfter = new Node(null, element, nodeBefore);
        first = nodeAfter;
        if (nodeBefore == null) {
            last = nodeAfter;
        } else {
            nodeBefore.prev = nodeAfter;
        }
        ++size;
    }

    @Override
    public void addLast(Object element) {
        Node var2 = last;
        Node var3 = new Node(var2, element, null);
        last = var3;
        if (var2 == null) {
            first = var3;
        } else {
            var2.next = var3;
        }
        ++size;
    }

    @Override
    public boolean removeFirst() {
        Node var1 = first;
        if (var1 == null) {
            return false;
        } else {
            unlinkFirst(var1);
            return true;
        }
    }

    private Object unlinkFirst(Node var1) {
        Object var2 = var1.item;
        Node var3 = var1.next;
        var1.item = null;
        var1.next = null;
        first = var3;
        if (var3 == null) {
            last = null;
        } else {
            var3.prev = null;
        }
        --size;
        return var2;
    }

    @Override
    public boolean removeLast() {
        Node var1 = last;
        if (var1 == null) {
            return false;
        } else {
            unlinkLast(var1);
            return true;
        }
    }

    private Object unlinkLast(Node var1) {
        Object var2 = var1.item;
        Node var3 = var1.prev;
        var1.item = null;
        var1.prev = null;
        last = var3;
        if (var3 == null) {
            first = null;
        } else {
            var3.next = null;
        }
        --size;
        return var2;
    }

    @Override
    public Object getFirst() {
        Object result = null;
        if (first != null) {
            result = first.item;
        }
        return result;
    }

    @Override
    public Object getLast() {
        Object result = null;
        if (last != null) {
            result = last.item;
        }
        return result;
    }

    @Override
    public boolean contains(Object element) {
        Node currentNode = first;
        while (currentNode != null) {
            if (element == null) {
                if (currentNode.item == null) {
                    return true;
                }
            } else {
                if (element.equals(currentNode.item)) {
                    return true;
                }
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    @Override
    public boolean remove(Object element) {
        Node var2;
        if (element == null) {
            for (var2 = first; var2 != null; var2 = var2.next) {
                if (var2.item == null) {
                    unlinkNode(var2);
                    return true;
                }
            }
        } else {
            for (var2 = first; var2 != null; var2 = var2.next) {
                if (element.equals(var2.item)) {
                    unlinkNode(var2);
                    return true;
                }
            }
        }
        return false;
    }

    @Override
    public void add(int index, Object element) {
        if (index < 0 || index > size) {
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        }
        if (index == 0) {
            addFirst(element);
        } else if (index == size) {
            addLast(element);
        } else {
            Node currentNode = getNode(index - 1);
            Node newNode = new Node(currentNode, element, currentNode.next);
            currentNode.next.prev = newNode;
            currentNode.next = newNode;
            size++;
        }
    }

    @Override
    public Object get(int index) {
        Node currentNode = getNode(index);
        return currentNode.item;
    }

    @Override
    public String toString() {
        Iterator<Object> it = iterator();
        if (!it.hasNext())
            return "[]";

        StringBuilder sb = new StringBuilder();
        sb.append('[');
        for (; ; ) {
            Object e = it.next();
            sb.append(e);
            if (!it.hasNext())
                return sb.append(']').toString();
            sb.append(", ");
        }
    }

    private Node getNode(int index) {
        if (index < 0 || index >= size) {
            throw new IndexOutOfBoundsException("Index: " + index + ", Size: " + size);
        }
        Node currentNode = first;
        for (int i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
}
