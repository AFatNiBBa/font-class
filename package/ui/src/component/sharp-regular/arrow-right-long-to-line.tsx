
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-long-to-line` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-long-to-line?s=sharp-regular arrow-right-long-to-line}
 * @preview ![arrow-right-long-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-right-long-to-line.svg)
 */
const ArrowRightLongToLine: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 88l0 336 0 24-48 0 0-24 0-336 0-24 48 0 0 24zM512 256l-17 17L359 409l-17 17L308.1 392l17-17 95-95L24 280 0 280l0-48 24 0 396.1 0-95-95-17-17 33.9-33.9 17 17L495 239l17 17z" />
    </Icon>
);

export default ArrowRightLongToLine;