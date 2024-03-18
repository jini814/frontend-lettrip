package com.example.day04;

public class Exam06 {
    public static void main(String[] args) {
        //문제 1: 배열 역순 출력
        //int 타입의 배열 numbers가 주어졌을 때, 배열의 요소를 역순으로 출력하는 코드를 작성하세요.
        //int[] numbers = {3, 6, 9, 12, 15};

        int[] numbers = {3, 6, 9, 12, 15};

        for (int i = numbers.length -1 ; i>=0; i--) {
            System.out.println(numbers[i]);
        }
    }
}
