import React, { FC } from "react";
import "./Contacts.scss";
import YandexMap from "./YandexMap";
import Page from "../../components/Page/Page";

const Contacts: FC = () => {
  return (
        <Page
          title={'CONTACTS'}
          titleClass={'contacts__body-title'}
        >
          <div className="contacts__body">
            <p>Oil Promotion LTD.</p>
            <p>
              Telephone: <a href="tel:89876543210">8-987-654-32-10</a>
            </p>
            <p>
              Email: <a href="mailto:mail@mail.ru">mail@mail.ru</a>
            </p>
          </div>
          <YandexMap />
        </Page>
  );
};

export default Contacts;
