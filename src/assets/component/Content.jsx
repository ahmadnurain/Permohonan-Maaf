import { useTypewriter, Cursor } from "react-simple-typewriter";

export default function Content() {
  const [text] = useTypewriter({
    words: ["Aku mohon maaf soal perkataan aku yang kemarin terlalu berlebihan dan aku minta maaf banget udah negebuat kamu sampe marah kaya gini semoga permintaan maaf ini bisa kamu terima dan kita bisa biakan dan chatan kaya biasannya."],
    loop: 1,
    typeSpeed: 100,
  });

  const handleClick = () => {
    const url = "https://api.whatsapp.com/send/?phone=6283101252445&text=iyaa+aku+udah+gak+marah+lagi+%3E%3C&type=phone_number&app_absent=0";
    window.open(url, "_blank");
  };
  return (
    <div className="content">
      <p>
        {text}
        <Cursor cursorStyle="|" />
      </p>
      <button onClick={handleClick}>Iya Aku Maafin</button>
    </div>
  );
}
