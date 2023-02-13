interface InputProps {
  placeholder: string;
  onChange: any;
}

const InputField = ({ placeholder, onChange }: InputProps) => {
  return (
    <>
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        onChange={onChange}
      />
    </>
  );
};

export default InputField;
