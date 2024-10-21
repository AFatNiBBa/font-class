
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-left` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-left?s=sharp-light arrow-down-left}
 * @preview ![arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-down-left.svg)
 */
const ArrowDownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 416l-16 0 0-16 0-224 0-16 32 0 0 16 0 185.4L316.7 108.7 328 97.4 350.6 120l-11.3 11.3L86.6 384 272 384l16 0 0 32-16 0L48 416z" />
    </Icon>
);

export default ArrowDownLeft;