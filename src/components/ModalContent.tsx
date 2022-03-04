import Modal from 'react-modal';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';
import Swt from 'sweetalert2'
import {useState, ChangeEvent, useContext, useEffect } from 'react';
import { customStyles } from '../helpers';
import { useForm } from '../hooks/useForm';


import '../css/modal.css'
import { UiContext } from '../context/uiContext/UiContext';
import { CalendarContext } from '../context/calendarContext/CalendarContext';
import { Events } from '../interfaces/Events';

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1 , 'hours')
const nowPlus1 = now.clone().add(1 , 'hours')

interface Form extends Events{
    title: string;
    start: Date;
    end: Date;
    notes: string;
}

export const ModalContent = () => {

  const [dateStart, setDateStart] = useState(now.toDate())
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate())
  const [errorInput, setErrorInput] = useState(true)

  const {closeModal ,state} = useContext(UiContext)
  const {addEvent , state: stateCalendar , updateEvent} = useContext(CalendarContext)
  const {active} = stateCalendar
  const {openOrCloseModal} = state

  const {form,handlenChange , setForm , clearForm} = useForm<Form>({
    id: 1,
    title: '',
    start: now.toDate(),
    end: nowPlus1.toDate(),
    notes: '',
    user: {
      name: 'juan',
      id: 1
    }
  })

  const {end,notes,start,title} = form

  useEffect(() => {
    if (active) {
      setForm(active)
    }
    if(active===undefined){
       clearForm()
    }
  }, [active , setForm])

  const handlenChangeDateInit = (value: Date) => {
    setDateStart(value)
    setForm({
      ...form,
      start: value
    })
  }

  const handlenChangeDateEnd = (value: Date) => {
    setDateEnd(value)
    setForm({
      ...form,
      end: value
    })
  }

  const handlenOnSubmit = (e: ChangeEvent<HTMLFormElement>) =>{
    e.preventDefault()
    const startDate = moment(start)
    const EndDate = moment(end)

    if(startDate.isSameOrAfter(EndDate)) {
        Swt.fire('Error' , 'La fecha final debe de ser mayor a la de inicio' , 'error')
        return
    }
    if (title.trim().length < 2) {
      setErrorInput(false)
      return
    }
    setErrorInput(true)

    if(active) {
      updateEvent(form)
    }else{
      addEvent([form])
    }

    closeModal()
    clearForm()
  }



return (
<div>
  <Modal 
      isOpen={openOrCloseModal} 
      style={customStyles} 
      contentLabel="Example Modal"
      closeTimeoutMS={200}
      onRequestClose= {closeModal}
    >
    <h1>{active ? 'Editar evento' : 'Nuevo evento'}</h1>
    <hr />
    <form 
      className="container"
      onSubmit={handlenOnSubmit}
      >

      <div className="form-group">
        <label>Fecha y hora inicio</label>
        <DateTimePicker 
          onChange={handlenChangeDateInit} 
          value={dateStart} 
          className="form-control" 
          />
      </div>

      <div className="form-group">
        <label>Fecha y hora fin</label>
        <DateTimePicker 
          onChange={handlenChangeDateEnd} 
          value={dateEnd} 
          className="form-control"
          minDate={dateStart}
          />
      </div>

      <hr />
      <div className="form-group">
        <label>Titulo y notas</label>
        <input 
          type="text" 
          className={`form-control ${!errorInput && 'is-invalid'}`} 
          placeholder="Título del evento" 
          name="title" 
          autoComplete="off"
          value={title}
          onChange={handlenChange}
          />
        <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
      </div>

      <div className="form-group">
        <textarea 
          className="form-control" 
          placeholder="Notas" rows={5} 
          name="notes"
          value={notes}
          onChange={handlenChange}
        ></textarea>
        <small id="emailHelp" className="form-text text-muted">Información adicional</small>
      </div>

      <button className="btn btn-outline-primary btn-block">
        <i className="far fa-save"></i>
        <span> Guardar</span>
      </button>

    </form>
  </Modal>
</div>
)
}