package com.example.day04;

public class Exam05 {
    public static void main(String[] args) {
        //문제 5: 이차원 배열의 선언, 초기화 및 출력
        //int 타입의 이차원 배열 matrix를 선언하고, 다음과 같은 형태로 초기화하세요.
        //1 2 3
        //4 5 6
        //7 8 9
        //이차원 배열 matrix의 모든 요소를 for 루프를 사용하여 출력하는 코드를 작성하세요. 출력 형태는 위와 같아야 합니다.

        int[][] matrix = new int[3][];
        matrix[0] = new int[3];
        matrix[1] = new int[3];
        matrix[2] = new int[3];

        matrix[0][0] = 1;
        matrix[0][1] = 2;
        matrix[0][2] = 3;

        matrix[1][0] = 4;
        matrix[1][1] = 5;
        matrix[1][2] = 6;

        matrix[2][0] = 7;
        matrix[2][1] = 8;
        matrix[2][2] = 9;

        for ( int i = 0; i < matrix.length; i++) {
            for ( int j =0; j < matrix[i].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println();
        }

    }
}
