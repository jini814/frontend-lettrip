package com.example.day04;

import java.util.Arrays;

public class Exam10 {
    public static void main(String[] args) {
        // 문제 5: 두 배열의 합집합 구하기
        // int 타입의 두 배열 array1과 array2가 주어졌을 때, 두 배열의 합집합을 구하여 새 배열에 저장하고,
        // 결과 배열을 출력하는 코드를 작성하세요. 합집합 배열에는 중복된 요소가 없어야 합니다.
        // int[] array1 = {1, 3, 5, 7, 9};
        // int[] array2 = {0, 2, 4, 6, 8, 10, 3, 5};

        int[] array1 = {1, 3, 5, 7, 9};
        int[] array2 = {0, 2, 4, 6, 8, 10, 3, 5};

        // 새로운 배열을 만들기 위해 배열의 길이를 먼저 계산합니다.
        int unionLength = array1.length + array2.length;

        // 합집합 배열 생성
        int[] union = new int[unionLength];

        // 첫 번째 배열 복사
        System.arraycopy(array1, 0, union, 0, array1.length);

        // 두 번째 배열 추가
        int index = array1.length;
        for (int i = 0; i < array2.length; i++) {
            // 중복된 요소인지 확인
            boolean isDuplicate = false;
            for (int j = 0; j < array1.length; j++) {
                if (array2[i] == array1[j]) {
                    isDuplicate = true;
                    break;
                }
            }
            if (!isDuplicate) {
                union[index++] = array2[i];
            }
        }

        // 합집합 배열 출력
        System.out.println("합집합 배열: " + Arrays.toString(union));
    }
}
