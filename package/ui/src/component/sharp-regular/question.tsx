
import { Icon } from "../../index";

/**
 * A component that renders the `question` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/question?s=sharp-regular question}
 * @preview ![question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/question.svg)
 */
const Question: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M144 80c-44.2 0-80 35.8-80 80l0 16-48 0 0-16C16 89.3 73.3 32 144 32l32 0c70.7 0 128 57.3 128 128l0 7.4c0 38.2-18.2 74.2-49 96.8l-71 52 0 11.8 0 24-48 0 0-24 0-24 0-12.2 9.8-7.2 80.8-59.2c18.5-13.6 29.4-35.1 29.4-58.1l0-7.4c0-44.2-35.8-80-80-80l-32 0zm48 336l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default Question;