
import { Icon } from "../../index";

/**
 * A component that renders the `asterisk` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/asterisk?s=sharp-solid asterisk}
 * @preview ![asterisk](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/asterisk.svg)
 */
const Asterisk: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 32l0 32 0 135.5 95.5-57.3L347 125.7l32.9 54.9L352.5 197l-98.3 59 98.3 59 27.4 16.5L347 386.3l-27.4-16.5L224 312.5 224 448l0 32-64 0 0-32 0-135.5L64.5 369.8 37 386.3 4.1 331.4 31.5 315l98.3-59L31.5 197 4.1 180.6 37 125.7l27.4 16.5L160 199.5 160 64l0-32 64 0z" />
    </Icon>
);

export default Asterisk;