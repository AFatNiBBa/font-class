
import { Icon } from "../../index";

/**
 * A component that renders the `question` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/question?s=sharp-light question}
 * @preview ![question](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/question.svg)
 */
const Question: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M48 160c0-53 43-96 96-96l32 0c53 0 96 43 96 96c0 25.2-11.9 48.9-32 64l-89.6 67.2L144 296l0 8 0 48 0 16 32 0 0-16 0-40 83.2-62.4C287.4 228.4 304 195.3 304 160c0-70.7-57.3-128-128-128l-32 0C73.3 32 16 89.3 16 160l32 0zM184 424l-48 0 0 48 48 0 0-48z" />
    </Icon>
);

export default Question;