interface InputProps {
  placeholder: string;
  onChange: any;
}

const numbersOnly = (e: any) => {
  const re = /[0-9A-F:]+/g;
  if (!re.test(e.key)) {
    e.preventDefault();
  }
};

const InputField = ({ placeholder, onChange }: InputProps) => {
  return (
    <>
      <input
        className="numbers-input"
        type="text"
        placeholder={placeholder}
        onKeyDown={(e) => {
          numbersOnly(e);
        }}
        onChange={onChange}
      />
    </>
  );
};

export default InputField;
