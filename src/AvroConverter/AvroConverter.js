import React, {useState, Fragment} from 'react';
import {LocalDate, Instant, ChronoUnit} from '@js-joda/core';
import {Alert, Button, Row, Col} from 'react-bootstrap';

const AvroConverter = () => {

    const re = /^[0-9\b]+$/;
    const nowInstant = () => Instant.now().truncatedTo(ChronoUnit.MILLIS).toEpochMilli();
    const nowDateTime = () => LocalDate.now().toEpochDay();

    const styleAlert = {
        display: 'inline-block',
        padding: '5px',
        width: '250px',
        textAlign: 'center',
        margin: '5px',
    };

    const inline = {
        display: 'inline-block',
        margin: '5px',
    };

    const styleTextArea = {
        display: 'inline-block',
        width: '500px',
    };

    const ofEpochDay = () => {
        try {
            return <Alert style={styleAlert} variant='success'>{LocalDate.ofEpochDay(parseInt(epoch)).toString()}</Alert>;
        } catch(err) {
            console.log(err)
            return <Alert style={styleAlert} variant='danger'>Epoch day {epoch} not valid</Alert>;
        }
    }

    const ofEpochMilli = () => {
        try {
            return <Alert style={styleAlert} variant='success'>{Instant.ofEpochMilli(parseInt(millis)).toString()}</Alert>;
        } catch(err) {
            return <Alert style={styleAlert} variant='danger'>Epoch millis {millis} not valid</Alert>;
        }
    }

    const setDate = (event) => {
        if (event.target.value === '' || re.test(event.target.value)) {
            setEpoch(event.target.value);
        }
    }

    const setDateTime = (event) => {
        if (event.target.value === '' || re.test(event.target.value)) {
            setMillis(event.target.value);
        }
    }

    const [epoch, setEpoch] = useState(nowDateTime());
    const [millis, setMillis] = useState(nowInstant());

    return (
        <Fragment>
           <Row className="justify-content-md-center border">
               <Col style={styleTextArea} md="auto">
                  <input style={inline} value={epoch} onChange={setDate.bind(this)} />
                  epoch day is converted to date: 
                </Col>
                <Col>  
                  {ofEpochDay()}
                  <Button style={inline} variant="warning" onClick={() => setEpoch(nowDateTime())}>Reset</Button>
                </Col>
           </Row>
           <Row className="justify-content-md-center border">
               <Col style={styleTextArea} md="auto">
                  <input style={inline} value={millis} onChange={setDateTime.bind(this)}/>
                  epoch millis is converted to date-time:
                </Col>
                <Col>
                   {ofEpochMilli()}
                  <Button style={inline} variant="warning" onClick={() => setMillis(nowInstant())}>Reset</Button>
                </Col>
           </Row>
        </Fragment>
      );
}

export default AvroConverter;