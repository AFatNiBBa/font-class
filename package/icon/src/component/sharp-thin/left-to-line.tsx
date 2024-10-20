
import { Icon } from "../../index";

/**
 * A component that renders the `left-to-line` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/left-to-line?s=sharp-thin left-to-line}
 * @preview ![left-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/left-to-line.svg)
 */
const LeftToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 440l0 8L0 448l0-8L0 72l0-8 16 0 0 8 0 368zM288 320l0 16 0 64 0 16-16 0-16 0L107.3 267.3 96 256l11.3-11.3L256 96l16 0 16 0 0 16 0 64 0 16 16 0 128 0 16 0 0 16 0 96 0 16-16 0-128 0-16 0zm-16 0l0-16 16 0 144 0 0-96-144 0-16 0 0-16 0-80-9.4 0-144 144 144 144 9.4 0 0-80z" />
    </Icon>
);

export default LeftToLine;