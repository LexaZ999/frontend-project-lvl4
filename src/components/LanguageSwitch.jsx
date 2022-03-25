import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

function LanguageSwitch() {
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <ButtonGroup size="sm" aria-label="language switch" className="ms-3">
      <Button variant="outline-secondary" onClick={() => changeLanguage('en')}>
        en
      </Button>
      <Button variant="outline-secondary" onClick={() => changeLanguage('ru')}>
        ru
      </Button>
    </ButtonGroup>
  );
}

export default LanguageSwitch;
