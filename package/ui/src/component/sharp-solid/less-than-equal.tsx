
import { Icon } from "../../index";

/**
 * A component that renders the `less-than-equal` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/less-than-equal?s=sharp-solid less-than-equal}
 * @preview ![less-than-equal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/less-than-equal.svg)
 */
const LessThanEqual: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M413.3 33.8l2.7-1 0 67.9L159.5 192 416 283.2l0 67.9-2.7-1-360-128L32 214.6l0-45.2 21.3-7.6 360-128zM32 416l384 0 32 0 0 64-32 0L32 480 0 480l0-64 32 0z" />
    </Icon>
);

export default LessThanEqual;