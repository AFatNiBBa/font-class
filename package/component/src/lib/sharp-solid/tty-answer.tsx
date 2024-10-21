
import { Icon } from "../../index";

/**
 * A component that renders the `tty-answer` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tty-answer?s=sharp-solid tty-answer}
 * @preview ![tty-answer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tty-answer.svg)
 */
const TtyAnswer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 0L0 32 0 64C0 311.4 200.6 512 448 512l32 0 32-144L368 288l-67 83.8C232.5 335.7 176.3 279.5 140.2 211L224 144 144 0zM352 64l-64 0 0 64 64 0 0-64zm0 96l-64 0 0 64 64 0 0-64zm32-96l0 64 64 0 0-64-64 0zm160 0l-64 0 0 64 64 0 0-64zm32 0l0 64 64 0 0-64-64 0zm64 96l-64 0 0 64 64 0 0-64zm-256 0l0 64 160 0 0-64-160 0z" />
    </Icon>
);

export default TtyAnswer;