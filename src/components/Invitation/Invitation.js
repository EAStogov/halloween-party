import "./Invitation.css";

function Invitation() {
  return (
    <section className="invitation">
      <h2 className="page__title invitation__title">WHAT'S NEXT?</h2>
      <p className="invitation__desc">
        ЕСЛИ ИДЕШЬ НА ВЕЧЕРИНКУ,<br/>ВСТУПАЙ В ГРУППУ ПО&nbsp;
        <a
          href="https://t.me/+J11m4YHmfnQyNDAy"
          target="blank"
          className="invitation__link"
        >
          ССЫЛКЕ
        </a>
      </p>
      <div className="invitation__image" />
    </section>
  );
}

export default Invitation;
