import React, {FC} from "react";
import "./Contacts.scss";
import YandexMap from "./YandexMap";

const Contacts: FC = () => {
  return (
    <div className={"main"}>
      <div className="container">
        <div className="contacts__body">
          <h1 className="contacts__body-title root__title">CONTACTS</h1>
          <p>Oil Promotion LTD.</p>
          <p>
            Telephone: <a href="tel:89876543210">8-987-654-32-10</a>
          </p>
          <p>
            Email: <a href="mailto:mail@mail.ru">mail@mail.ru</a>
          </p>
        </div>
      </div>
      <YandexMap />
    </div>
  );
};

export default Contacts;
