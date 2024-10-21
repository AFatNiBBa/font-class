
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-to-line` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-to-line?s=sharp-regular arrow-right-to-line}
 * @preview ![arrow-right-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-right-to-line.svg)
 */
const ArrowRightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 88l0-24-48 0 0 24 0 336 0 24 48 0 0-24 0-336zM312.4 273.5L331 256l-18.6-17.5-136-128L159 94.1l-32.9 35 17.5 16.4L235.5 232 152 232 24 232 0 232l0 48 24 0 128 0 83.5 0-91.9 86.5L126.1 383l32.9 35 17.5-16.4 136-128z" />
    </Icon>
);

export default ArrowRightToLine;