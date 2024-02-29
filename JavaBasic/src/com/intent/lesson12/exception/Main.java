package com.intent.lesson12.exception;

public class Main {
    public static void main(String... args) {

        UserManager userManager = new UserManager();
        userManager.add(new User("Valyl"));
        userManager.add(new User("Oleh"));
        userManager.add(new User("Yurii"));
        userManager.add(new User("Danulo"));

        System.out.println(userManager.toString());

        userManager.remove("Danulo");
        System.out.println(userManager.toString());

        userManager.blockUser("Yurii");
        userManager.blockUser("Oleh");
        System.out.println(userManager.toString());

        userManager.unblockUser("Oleh");
        System.out.println(userManager.toString());

        System.out.println(userManager.getUserByUserName("Oleh"));

        //userManager.getUserByUserName("new String()"); // user was not found

        //userManager.add(new User("Yurii")); // User with this name is already exist

        //userManager.unblockUser("rojitbh"); // user was not found
    }
}
