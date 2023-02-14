import Button from "../../../Components/common/Button";
import { appConfig } from "../../../configs/index";
// const { timeValues } = appConfig;
import { MIN, HOURS } from "../../../configs/variables";

const minutes = [1, 2, 5, 10, 15, 30].map((item) => `${item} ${MIN}`);
const hours = [1, 2, 3, 6, 12, 24].map((item) => `${item} ${HOURS}`);

const timeValues = [...minutes, ...hours];
// change
const TimeOperator = () => {
  return (
    <>
      {timeValues.map((item, index) => (
        <Button title={item} key={index} />
      ))}
    </>
  );
};

export default TimeOperator;
