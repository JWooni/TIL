# 트라이 (Trie)

- 탐색 트리의 일종으로, 문자열이나 연관 배열을 저장하는 데 사용되는 트리 자료구조
- 트라이 특징
    - 문자열 검색에 특화된 자료구조
    - 문자열 길이가 M일 경우 O(M)의 시간 복잡도로 검색 가능
- 구현 메서드(method)
    - 데이터 추가 / 검색 / 삭제 : Trie.insert(), Trie.search(), Trie.delete()
    
- TrieNode(): 문자값과 단어 여부값 저장을 위한 노드 생성자

```jsx
function TrieNode() {
  this.children = {};
  this.endOfWord = false;
}
```

- Trie(): 노드의 시작인 루트 노드 저장을 위한 생성자

```jsx
function Trie() {
  this.root = new TrieNode();
}
```

- insert(): 문자열 추가

```jsx
Trie.prototype.insert = function (word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];
    if (node === undefined) {
      node = new TrieNode();
      current.children[ch] = node;
    }
    current = node;
  }
  current.endOfWord = true;
};
```

- 사용

```jsx
let trie = new Trie();
trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");
```

- search(): 문자열 검색

```jsx
Trie.prototype.search = function (word) {
  let current = this.root;
  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    let node = current.children[ch];
    if (node === undefined) {
      return false;
    }
    current = node;
  }
  return current.endOfWord;
};
```

- 사용

```jsx
let trie = new Trie();

trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");
console.log(trie.search("bear"));
console.log(trie.search("b"));
console.log(trie.search("bee"));
```

- delete(): 문자열 삭제

```jsx
Trie.prototype.delete = function (word, current = this.root, index = 0) {
  if (index === word.length) {
    if (!current.endOfWord) return false;
    current.endOfWord = false;
    return Object.keys(current.children).length === 0;
  }
  let ch = word[index];
  let node = current.children[ch];
  if (node === undefined) return false;
  let isDeleteNode = this.delete(word, node, index + 1) && !node.endOfWord;
  if (isDeleteNode) {
    delete current.children[ch];
    return Object.keys(current.children).length === 0;
  }
  return false;
};
```

- 사용

```jsx
let trie = new Trie();

trie.insert("be");
trie.insert("bee");
trie.insert("can");
trie.insert("cat");
trie.insert("cd");

console.log(trie.search("bee"));
trie.delete("bear");
console.log(trie.search("bee"));
trie.delete("b");
console.log(trie.search("bee"));
trie.delete("bee");
console.log(trie.search("bee"));
```
