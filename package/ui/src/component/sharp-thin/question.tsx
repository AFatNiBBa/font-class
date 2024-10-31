
import { Icon } from "../../index";

/**
 * A component that renders the `question` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/question?s=sharp-thin question}
 * @preview ![question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/question.svg)
 */
const Question: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 152C32 94.6 78.6 48 136 48l48 0c57.4 0 104 46.6 104 104l0 6.3c0 28.6-13.9 55.4-37.3 71.9l-95.4 67.3-3.4 2.4 0 4.1 0 64 0 8 16 0 0-8 0-59.9 92-64.9c27.6-19.5 44-51.2 44-85l0-6.3c0-66.3-53.7-120-120-120l-48 0C69.7 32 16 85.7 16 152l0 8 16 0 0-8zM176 432l-32 0 0 32 32 0 0-32z" />
    </Icon>
);

export default Question;