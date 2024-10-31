
import { Icon } from "../../index";

/**
 * A component that renders the `question` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/question?s=thin question}
 * @preview ![question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/question.svg)
 */
const Question: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 152C32 94.6 78.6 48 136 48l48 0c57.4 0 104 46.6 104 104l0 6.3c0 28.6-13.9 55.4-37.3 71.9l-64.9 45.8c-21.2 15-33.9 39.4-33.9 65.4l0 26.7c0 4.4 3.6 8 8 8s8-3.6 8-8l0-26.7c0-20.8 10.1-40.3 27.1-52.3L260 243.2c27.6-19.5 44-51.2 44-85l0-6.3c0-66.3-53.7-120-120-120l-48 0C69.7 32 16 85.7 16 152l0 8c0 4.4 3.6 8 8 8s8-3.6 8-8l0-8zM160 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default Question;