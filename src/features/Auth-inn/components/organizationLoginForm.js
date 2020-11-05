import React, {useEffect, useState} from 'react';

const organizationLoginForm = ({onSubmit,name,getInnThunk,clearInn}) => {

  const [inn, setInn] = useState('');

  useEffect(() => {
    if (inn.length === 14) {
      return getInnThunk(inn)
    }
    clearInn();
  }, [inn]);

  return (
    <form onSubmit={e => onSubmit(e,inn)}>
      <label htmlFor="inn">
        ИНН ОРГАНИЗАЦИИ ИЛИ ФИЗ ЛИЦА
        <input
          value={inn}
          onChange={e => setInn(e.target.value)}
          type="text" id="inn"
          maxLength={14}
          minLength={14}/>

        <span>{name ? name : null}</span>

        {!!name.length && (
          <button type='submit'>
            Войти
          </button>
        )}

      </label>
    </form>
  )
}

export default organizationLoginForm;
