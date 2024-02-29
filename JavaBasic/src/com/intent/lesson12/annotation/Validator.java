package com.intent.lesson12.annotation;

import java.lang.reflect.Field;

public class Validator {

    public static void validate(Object object) throws IllegalAccessException {
        Class<?> myClass = object.getClass();
        Field[] fields = myClass.getDeclaredFields();
        for (Field field : fields) {
            field.setAccessible(true);
            Object value = field.get(object);
            DataValidation annotation = field.getAnnotation(DataValidation.class);
            if (annotation != null) {
                if (annotation.type().equals(ValidationType.STRING_LENGTH)) {
                    validateStringLength(annotation, field, value);
                } else if (annotation.type().equals(ValidationType.NUMERIC_RANGE)) {
                    validateNumericValues(annotation, field, value);
                }
            } else {
                System.out.println("Field " + field.getName() + " does not have corresponding DataValidation annotation");
            }
        }

    }

    private static void validateStringLength(DataValidation annotation, Field field, Object value) {
        if (value instanceof String) {
            String strValue = (String) value;
            if (strValue.length() < annotation.min() || strValue.length() > annotation.max()) {
                throw new IllegalArgumentException("Validation failed for field " + field.getName()
                        + ": String length should be between " + annotation.min() + " and " + annotation.max()
                        + " but I have length = " + strValue.length());
            }
        } else {
            throw new IllegalArgumentException("Validation failed for field " + field.getName()
                    + ": Expected a String value, but received " + value.getClass().getSimpleName());
        }
    }

    private static void validateNumericValues(DataValidation annotation, Field field, Object value) {
        if (value instanceof Number) {
            Number numValue = (Number) value;
            if (numValue.doubleValue() < annotation.min() || numValue.doubleValue() > annotation.max()) {
                throw new IllegalArgumentException("Validation failed for field " + field.getName()
                        + ": Numeric value should be between " + annotation.min() + " and " + annotation.max()
                        + " but I have " + numValue.doubleValue());
            }
        } else {
            throw new IllegalArgumentException("Validation failed for field " + field.getName()
                    + ": Expected a Number value, but received " + value.getClass().getSimpleName());
        }
    }
}
