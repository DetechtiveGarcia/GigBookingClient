import './form-group.css'
type FormGroupProps = {
  label: string;
  isMessage?: boolean;
};
export default function FormGroup({
  label,
  isMessage = false,
}: FormGroupProps) {
  return (
    <>
      <label htmlFor="" className="text-dark uppercase letter-spacing">
        {label}
      </label>
      <input type="text" className='text-white' />
    </>
  );
}
