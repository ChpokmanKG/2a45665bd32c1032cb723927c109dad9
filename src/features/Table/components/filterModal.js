import React, {useEffect, useState} from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  RadioGroup,
  FormControlLabel,
  DialogActions,
  Button,
  Checkbox
} from '@material-ui/core';
import CustomCheckbox from './checkbox';

const ModalWindow = ({open,cancel, data, checkedChange, ...other}) => {

  let indexes = [];

  const addItem = (id) => {
    const pos = indexes.indexOf(id);
    if(pos !== -1) {
      indexes.splice(pos, 1)
    }else {
      indexes.push(id)
    }
  }

  return (
    <Dialog
      draggable
      disableBackdropClick
      disableEscapeKeyDown
      maxWidth="xs"
      open={open}
      {...other}
    >
      {console.log("render")}
      <DialogTitle id="confirmation-dialog-title">Выберите поля для открытия доступа</DialogTitle>
      <DialogContent dividers>
        <RadioGroup>
          {(data.result && data.result.fields) && data.result.fields.map((option,index) => (
            <FormControlLabel
              value={option.fieldTitle}
              key={option.fieldName}
              onClick={() => addItem(index)}
              control={<CustomCheckbox check={option.checked}/>}
              label={option.fieldTitle}
            />
          ))}
        </RadioGroup>
        <DialogActions>
          <Button onClick={cancel} color="default">
            Отмена
          </Button>
          <Button color="primary" onClick={() => checkedChange(indexes)}>
            Сохранить
          </Button>
        </DialogActions>
      </DialogContent>
    </Dialog>
  )
};

export default ModalWindow;
