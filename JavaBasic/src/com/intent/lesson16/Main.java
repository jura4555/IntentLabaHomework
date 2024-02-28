package com.intent.lesson16;

import java.util.Scanner;

public class Main {
    public static void main(String... args) {
        ProductCatalog catalog = new ProductCatalog();
        while (true) {
            printMenu();
            performOperation(catalog);
        }
    }

    private static void printMenu() {
        System.out.println("\nMenu:");
        System.out.println("1. Create catalog");
        System.out.println("2. Add Product");
        System.out.println("3. Remove Product by id");
        System.out.println("4. Remove Product by name");
        System.out.println("5. Display Products");
        System.out.println("6. Sort Products");
        System.out.println("7. Filter Products");
        System.out.println("8. Delete Catalog");
        System.out.println("9. Exit");
    }

    private static void performOperation(ProductCatalog catalog) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter your choice: ");
        if (scanner.hasNextInt()) {
            int choice = scanner.nextInt();
            scanner.nextLine();
            switch (choice) {
                case 1:
                    catalog.createCatalog();
                    break;
                case 2:
                    if (catalog.catalogNotExist()) {
                        System.err.println("Product catalog does not exist. Please create a new product catalog.\n");
                        break;
                    }
                    System.out.print("Enter product name: ");
                    String name = scanner.nextLine();
                    catalog.addProduct(name);
                    break;
                case 3:
                    if (catalog.catalogNotExist()) {
                        System.err.println("Product catalog does not exist. Please create a new product catalog.\n");
                        break;
                    }
                    System.out.print("Enter product id: ");
                    int index = scanner.nextInt();
                    catalog.removeProductByIndex(index);
                    break;
                case 4:
                    if (catalog.catalogNotExist()) {
                        System.err.println("Product catalog does not exist. Please create a new product catalog.\n");
                        break;
                    }
                    System.out.print("Enter product name: ");
                    String productName = scanner.nextLine();
                    catalog.removeProductByName(productName);
                    break;
                case 5:
                    if (catalog.catalogNotExist()) {
                        System.err.println("Product catalog does not exist. Please create a new product catalog.\n");
                        break;
                    }
                    catalog.displayProducts();
                    break;
                case 6:
                    if (catalog.catalogNotExist()) {
                        System.err.println("Product catalog does not exist. Please create a new product catalog.\n");
                        break;
                    }
                    catalog.sortProduct();
                    break;
                case 7:
                    if (catalog.catalogNotExist()) {
                        System.err.println("Product catalog does not exist. Please create a new product catalog.\n");
                        break;
                    }
                    System.out.print("Enter keyword to filter: ");
                    String key = scanner.nextLine();
                    catalog.filterProduct(key);
                    break;
                case 8:
                    if (catalog.catalogNotExist()) {
                        System.err.println("Product catalog does not exist. Please create a new product catalog and then we can remove it.\n");
                        break;
                    }
                    catalog.removeCatalog();
                    break;
                case 9:
                    System.out.println("Exiting...");
                    System.exit(0);
                    break;
                default:
                    System.err.println("Invalid choice. Please select a value from 1 to 9\n");
            }
        } else {
            System.err.println("Invalid input! Please enter an integer value \n");
            scanner.nextLine();
        }
    }


}
