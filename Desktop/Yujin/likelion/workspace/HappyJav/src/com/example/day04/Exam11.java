package com.example.day04;

public class Exam11 {
    // 문제 6: 이차원 배열에서의 대각선 요소 합계
    // int 타입의 이차원 배열 matrix가 주어졌을 때, 두 대각선의 요소 합계를 구하는 코드를 작성하세요.
    // 배열은 정사각형 배열이라고 가정합니다.
    // int[][] matrix = {
    //     {1, 2, 3},
    //     {4, 5, 6},
    //     {7, 8, 9}
    // };
    // 대각선 요소의 합계를 각각 구하고, 그 결과를 출력하세요.

    public static void main(String[] args) {
        int[][] matrix = {
                {1, 2, 3},
                {4, 5, 6},
                {7, 8, 9}
        };

        int a = 0; // 주 대각선 요소의 합계
        int b = 0; // 부 대각선 요소의 합계

        // 주 대각선 요소의 합계 구하기
        for (int i = 0; i < matrix.length; i++) {
            a += matrix[i][i];
        }

        // 부 대각선 요소의 합계 구하기
        for (int i = 0; i < matrix.length; i++) {
            b += matrix[i][matrix.length - 1 - i];
        }

        // 결과 출력
        System.out.println("주 대각선 요소의 합계: " + a);
        System.out.println("부 대각선 요소의 합계: " + b);
    }
}
