package com.example.day04;

import java.util.Arrays;

public class Exam07 {
    public static void main(String[] args) {
        //문제 2: 최대값과 최소값 찾기
        //double 타입의 배열 doubles에서 최대값과 최소값을 찾아 출력하는 코드를 작성하세요.
        //double[] doubles = {1.5, 3.7, 2.4, 9.8, 7.6, 3.4};

        double[] doubles = {1.5, 3.7, 2.4, 9.8, 7.6, 3.4};

        Arrays.sort(doubles);

        double min = doubles[0];
        double max = doubles[doubles.length -1];

        System.out.println("최대값 : " + max);

        System.out.println("최소값 : " + min);

    }
}
