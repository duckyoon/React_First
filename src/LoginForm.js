// components/LoginForm.jsx
export default function LoginForm() {
  return (
    // 최상위 form 만 반환됨. 불필요할 때는 리액트 프래그먼트 구문 사용 가능 <> </>
    // 명시적으로 /를 사용해서 닫아준다.
    <form>
      <input type="text" />
      <input type="password" />
      <button>Submit</button>
    </form>
  );
}
