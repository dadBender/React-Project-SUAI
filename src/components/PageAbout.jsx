import { useState } from "react";
import Button from "./Button";
import modalIcon from "./aboutIcon.svg";

const inputError = {
  border: "2px solid green",
};
const input = {
  border: "2px solid red",
};

export default function PageAbout() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [reason, setReason] = useState("help");
  const [hasError, setHasError] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function handleNameChange(event) {
    setName(event.target.value);
    setHasError(event.target.value.trim().length === 0);
  }
  function handleTextChange(event) {
    setText(event.target.value);
    setHasError(
      name.trim().length === 0 ?? event.target.value.trim().length === 0
    );
  }
  const handleSubmit = (event) => {
    event.preventDefault();

    handleOpen();
  };
  return (
    <section id="aboutUs">
      <form action="" className="form">
        <div className="title_about">Пожалуйста пройдите маленький опрос</div>

        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          style={hasError ? input : inputError}
          className="input"
          placeholder="Ваше имя"
        />

        <select
          id="reasons"
          value={reason}
          onChange={(event) => setReason(event.target.value)}
          className="input"
        >
          <option selected="true" disabled="disabled" value="inaccuracies">
            Ваше мнение о проекте
          </option>
          <option value="inaccuracies">Понравилось</option>
          <option value="suggest">так себе</option>
          <option value="communication">все плохо</option>
        </select>
        <select
          id="reasons"
          value={text}
          onChange={(event) => setText(event.target.value)}
          className="input"
        >
          <option selected="true" disabled="disabled" value="inaccuracies">
            Причина замечаний
          </option>
          <option value="communication">все супер</option>
          <option value="suggest">мало информации</option>
          <option value="inaccuracies">неточности</option>
        </select>

        <div className="title_about">Наши ссылки</div>
        <div className="login-with">
          <a
            href="https://vk.com/efimov696"
            target="_blank"
            className="button-log"
          >
            A
          </a>
          <a
            href="https://vk.com/fevveking"
            target="_blank"
            className="button-log"
          >
            I
          </a>
          <a
            href="https://vk.com/makssk8"
            target="_blank"
            className="button-log"
          >
            M
          </a>
          <a href="https://vk.com/irk51" target="_blank" className="button-log">
            S
          </a>
        </div>
        <Button
          disabled={hasError}
          onClick={handleSubmit}
          className="button-confirm"
        >
          Отправить
        </Button>
      </form>
      <article
        id="Dialog"
        style={{
          display: open ? "flex" : "none",
        }}
      >
        <div className="DialogWindow">
          <div className="card">
            <div className="card__img">
              <svg
                viewBox="0 0 128 128"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  class="st1"
                  height="78.6"
                  transform="matrix(0.9761 0.2175 -0.2175 0.9761 15.4391 -12.3278)"
                  width="101.2"
                  x="13.1"
                  y="24.7"
                ></rect>
                <rect
                  className="st53"
                  height="78.6"
                  transform="matrix(0.9761 0.2175 -0.2175 0.9761 15.4391 -12.3278)"
                  width="101.2"
                  x="13.1"
                  y="24.7"
                ></rect>
                <polygon
                  className="st16"
                  points="116,62 116,35.4 38.1,18 22.1,18 5.8,91.3 76.2,107 106,107"
                ></polygon>
                <polygon
                  className="st1"
                  points="97.2,23 10,23 10,102 111,102 111,36.8"
                ></polygon>
                <polygon
                  className="st53"
                  points="97.2,23 10,23 10,102 111,102 111,36.8"
                ></polygon>
                <g>
                  <rect
                    className="st7"
                    height="58"
                    width="80"
                    x="20"
                    y="34"
                  ></rect>
                  <g>
                    <polygon
                      class="st9"
                      points="100.2,92 73.1,44.2 51.2,75.5 40,58.7 20.2,92 39.7,92"
                    ></polygon>
                    <circle className="st18" cx="57" cy="52" r="11"></circle>
                    <polygon
                      className="st1"
                      points="40,58.5 31.6,72.6 34.6,78.2 37.9,75.2 43.5,79.9 47,78.2 51,75.2"
                    ></polygon>
                    <path
                      className="st1"
                      d="M57.7,66c0,0,4.1,7.2,4.3,6.6c0.2-0.6,6.1-5.6,6.1-5.6l6.9,3.6l1.5-10.3L88.9,72L73.1,44.1L57.7,66z"
                    ></path>
                    <polygon
                      className="st15"
                      points="73.1,44.2 83.6,92 100.2,92"
                    ></polygon>
                    <polyline
                      className="st2"
                      points="100.2,91.9 73.1,44.1 39.7,91.9"
                    ></polyline>
                    <polyline
                      className="st2"
                      points="51.2,75.4 40,58.5 20.2,91.9"
                    ></polyline>
                    <polygon
                      className="st15"
                      points="51.2,75.4 40,58.5 47,81.3"
                    ></polygon>
                    <polyline
                      className="st2"
                      points="51.5,91.9 67.1,70.5 80.4,91.9"
                    ></polyline>
                    <polygon
                      className="st15"
                      points="72.3,92 67.1,70.7 80.4,92"
                    ></polygon>
                  </g>
                  <rect
                    className="st53"
                    height="58"
                    width="80"
                    x="20"
                    y="34"
                  ></rect>
                </g>
                <polygon className="st18" points="111,37 97,37 97,23"></polygon>
                <polygon className="st53" points="111,37 97,37 97,23"></polygon>
              </svg>
            </div>
            <div className="card__subtitle">На этом все</div>
            <div className="card__wrapper">
              <div className="card__title">Спасибо за внимание</div>
            </div>
          </div>
          <Button className="dialog__close" onClick={handleClose}>Закрыть</Button>
        </div>
      </article>
    </section>
  );
}
