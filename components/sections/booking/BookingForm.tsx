import FormGroup from "@/components/form/FormGroup";
import "./booking-form.css";
export default function BookingForm() {
  return (
    <div className="booking-form-container">
      <div className="form-header">
        <h6 className="text-white serif">Boka privat spelning/lektion</h6>
        <p className="text-dark">
          Festivaler, bröllop, sessioner och privata evenemang. Skicka ett
          meddelande så svarar teamet inom 48 timmar.
        </p>
      </div>
      <form action="">
        <FormGroup label="namn" />
        <br />
        <FormGroup label="email" />
        <br />
        <FormGroup label="event datum" />
        <br />
        <FormGroup label="stad/plats" />
        <br />
        <button type="submit" className="letter-spacing">Skicka</button>
      </form>
    </div>
  );
}
