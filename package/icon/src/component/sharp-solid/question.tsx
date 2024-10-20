
import { Icon } from "../../index";

/**
 * A component that renders the `question` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/question?s=sharp-solid question}
 * @preview ![question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/question.svg)
 */
const Question: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M80 160c0-35.3 28.7-64 64-64l32 0c35.3 0 64 28.7 64 64l0 9.3c0 19.6-9 38.2-24.5 50.3l-75.3 59.2L128 288.4l0 15.6 0 48 64 0 0-32.4L255.1 270C286 245.7 304 208.6 304 169.3l0-9.3c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160l0 16 64 0 0-16zM200 400l-80 0 0 80 80 0 0-80z" />
    </Icon>
);

export default Question;