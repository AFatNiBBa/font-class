
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right-long` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right-long?s=sharp-light arrow-right-long}
 * @preview ![arrow-right-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/arrow-right-long.svg)
 */
const ArrowRightLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M500.7 267.3L512 256l-11.3-11.3-144-144L345.4 89.4 322.7 112l11.3 11.3L450.7 240 16 240 0 240l0 32 16 0 434.7 0L334.1 388.7 322.7 400l22.6 22.6 11.3-11.3 144-144z" />
    </Icon>
);

export default ArrowRightLong;