package com.intent.lesson12.exception;

public class User {
    private String name;
    private boolean blocked;

    public User(String name) {
        this.name = name;
        this.blocked = false;
    }

    public String getName() {
        return name;
    }

    public boolean isBlocked() {
        return blocked;
    }

    public void setBlocked(boolean blocked) {
        this.blocked = blocked;
    }

    @Override
    public String toString() {
        return "User: \n" +
                "Name: " + name +
                ", Blocked: " + blocked+ "\n";
    }
}
