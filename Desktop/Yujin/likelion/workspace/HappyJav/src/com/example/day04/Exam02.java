package com.example.day04;

public class Exam02 {
    //문제 2: 배열의 값 출력
    //double 타입의 배열 doubles가 다음과 같이 초기화되어 있습니다.
    //double[] doubles = {1.0, 2.5, 3.7, 4.4};
    //배열의 모든 요소를 출력하는 코드를 for 루프를 사용하여 작성하세요.

    public static void main(String[] args) {
        double[] doubles = {1.0, 2.5, 3.7, 4.4};

        for (int i = 0; i < doubles.length; i++) {
            System.out.println(doubles[i]);
        }
    }
}
