package com.example.day03;

import java.util.Scanner;

public class IfExam03 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int age = scanner.nextInt();

        if (age >= 20) {
            System.out.println("성인입니다.");
        }
        else {
            System.out.println("당신은" + (20-age) + "년 후에 성인이 됩니다.");
        }
    }
}
