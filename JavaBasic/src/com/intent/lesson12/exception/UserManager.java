package com.intent.lesson12.exception;

import com.intent.lesson12.exception.customException.DuplicateUserException;
import com.intent.lesson12.exception.customException.InvalidUserDataException;
import com.intent.lesson12.exception.customException.UserNotFoundException;

import java.util.ArrayList;
import java.util.List;

public class UserManager {
    private List<User> userList;

    public UserManager() {
        this.userList = new ArrayList<>();
    }

    public void add(User user) {
        checkUserName(user.getName());
        checkUniqueUserName(user);
        userList.add(user);
    }

    public void remove(String username) {
        checkUserName(username);
        User user = getUserByUserName(username);
        userList.remove(user);
    }

    public void blockUser(String username) {
        User user = getUserByUserName(username);
        user.setBlocked(true);
    }

    public void unblockUser(String username) {
        User user = getUserByUserName(username);
        user.setBlocked(false);
    }

    public User getUserByUserName(String username) {
        checkUserName(username);

        for (User user : userList) {
            if (user.getName().equals(username)) {
                return user;
            }
        }
        throw new UserNotFoundException("User " + username + " not found");
    }

    private void checkUserName(String username) {
        if (username == null || username.isEmpty()) {
            throw new InvalidUserDataException("Username is not valid");
        }
    }

    private void checkUniqueUserName(User user) {
        for (User u : userList) {
            if (u.getName().equals(user.getName())) {
                throw new DuplicateUserException("User with name: " + user.getName() + " is already exist");
            }
        }
    }

    @Override
    public String toString() {
        StringBuilder stringBuilder = new StringBuilder();
        stringBuilder.append("UserManager: \n");
        for (User user : userList) {
            stringBuilder.append("Name: ").append(user.getName()).append(", ");
            stringBuilder.append("Blocked: ").append(user.isBlocked()).append("\n");
        }
        return stringBuilder.toString();
    }

}
