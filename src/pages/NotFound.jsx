import React from 'react';
import { useTranslation } from 'react-i18next';

const NotFound = () => {
  const { t } = useTranslation();
  return (
    <div className="text-center">
      <img
        alt="{t('notFound.title')}"
        className="img-fluid"
        src="https://cdn2.hexlet.io/assets/error-pages/404-34f20d4d98c81c575950c89d4c49027513d0bb3f6adbb3ed85ca0923496f65df.png"
      />
      <h1 className="h4 text-muted">{t('notFound.title')}</h1>
      <p className="text-muted">
        {t('notFound.text')}
        <a href="/">{t('notFound.link')}</a>
      </p>
    </div>
  );
};

export default NotFound;
