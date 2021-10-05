# 연결리스트 문제

- 열차 연결
    - 문제 설명
        - 새로운 지하철 노선이 신설되어, 이를 위한 열차가 새로 반입되었다. 하지만 이 열차들은 서로 연결되어 있지 않아 현재 운행이 어려운 상태이다. 열차 운행을 위해 열차 찻간을 이어주는 프로그램을 작성하시오.
        - 열차 별로 고유의 식별번호가 있어, 이를 기준으로 반입된 순서대로 열차 찻간을 이어주도록 한다.
        - 입력은 배열 형태로 열차 식별변호가 주어지며, 열차 찻간을 이어주어 Linked List 형태로 반환한다.
        - 열차 연결 및 반환을 위해 사용해야 할 Train 객체와 Linked List객체는 템플릿 코드를 참고한다.
    
    ```jsx
    function Train(number) {
      this.number = number;
      this.next = null;
    }
    
    function LinkedList() {
      this.head = null;
    }
    
    function answer(nums) {
      let ll = new LinkedList();
    
      let current, prev;
    
      for (let i = 0; i < nums.length; i++) {
        current = new Train(nums[i]);
    
        if (i === 0) {
          ll.head = current;
        } else {
          prev.next = current;
        }
    
        prev = current;
      }
    
      return ll;
    }
    ```
    

- 서류 정리
    - 문제 풀이
        - 동생에게 전달해준 서류를 순서대로 서랍에 정리해달라고 부탁했더니, 서류를 반대 순서로 넣어두었다.
        - 다시 제대로 정렬하기 위해, 이미 정리된 순서의 반대로 서류를 역 정렬시키는 프로그램 제작하시오.
        - 만약 서류가 1 → 2 → 3 순으로 들어가 있다면 3 → 2 → 1로 역 정렬시켜야 한다.
        - 입력은 동생의 가공을 통해 역 정렬된 서류가 저장되어 있는 Linked List 객체가 주어지며, 포인트 조작을 통해 파일 순서만 변경하여 Linked List 객체를 반환한다.
    
    ```jsx
    function File(number) {
      this.number = number;
      this.next = null;
    }
    
    function LinkedList() {
      this.head = null;
    }
    
    function answer(ll) {
      let current = ll.head,
        prev = null,
        next;
    
      while (current != null) {
        next = current.next;
        current.next = prev;
        prev = current;
    
        current = next;
      }
    
      ll.head = prev;
    
      return ll;
    }
    ```
    
- 대표 선출
    - 문제 설명
        - 네카라쿠배 마을에 대표를 선출해야 한다. 모두 자신이 대표가 되고 싶어하여, 아래 규칙을 통해 대표를 선출하기로 하였다. 규칙은 먼저 원탁에 둘러 앉아 시계 방향으로 1번부터 n번까지 번호를 부여한다. 그리고 주사위를 통해 굴려 나온 숫자 m의 사람을 제외하고, 그 다음으로 나온 주사위 숫자 k만큼 이동해가며 대표 후보에서 제외시킨다. 이렇게 순회하며 1명이 남을 때 까지 반복해 마을의 대표를 선출하기로 하였다. n, m, k가 주어졌을 때 대표 후보에서 제외되는 번호를 출력해주는 프로그램을 제작하시오.
        - 입력은 n, m, k의 자연수가 주어지며, 대표 후보에서 제외되는 번호를 순차적으로 배열로 반환한다.
    
    ```jsx
    function Node(data) {
      this.data = data;
      this.next = null;
    }
    function LinkedList() {
      this.head = null;
    }
    function answer(n, m, k) {
      let result = [];
    
      // make circular linked list 
    	let ll = new LinkedList(); 
    	let current, prev;
    
      for (let i = 1; i <= n; i++) {
        current = new Node(i);
        if (i === 1) {
          ll.head = current;
        } else {
          prev.next = current;
        }
        prev = current;
      }
      current.next = ll.head;
    
      // find first node
      current = ll.head;
      while (--m) {
        prev = current;
        current = current.next;
      }
      // remove representative 
    	
    	let count;
      while (current.next != current) {
        result.push(current.data);
        prev.next = current.next;
        count = k;
        while (count--) {
          prev = current;
          current = current.next;
        }
      }
      result.push(current.data);
      return result;
    }
    ```
