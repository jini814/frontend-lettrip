package com.example.day04;

public class Exam01 {
    public static void main(String[] args) {
        //문제 1: 기본형 배열 선언과 초기화
        //int 타입의 배열 numbers를 선언하고, 크기가 10인 배열로 초기화하세요.
        //배열의 모든 요소를 0부터 9까지의 숫자로 초기화하는 코드를 작성하세요.

        int[] numbers = new int[10];

        for (int i = 0; i < numbers.length; i++) {
            numbers[i] = i; // 각 요소를 배열 인덱스로 초기화
        }

        // 배열의 각 요소 출력
        for (int i = 0; i < numbers.length; i++) {
            System.out.println(numbers[i]);
        }
    }
}
