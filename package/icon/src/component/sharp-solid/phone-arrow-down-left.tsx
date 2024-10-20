
import { Icon } from "../../index";

/**
 * A component that renders the `phone-arrow-down-left` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-arrow-down-left?s=sharp-solid phone-arrow-down-left}
 * @preview ![phone-arrow-down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/phone-arrow-down-left.svg)
 */
const PhoneArrowDownLeft: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 0L0 32 0 64C0 311.4 200.6 512 448 512l32 0 32-144L368 288l-67 83.8C232.5 335.7 176.3 279.5 140.2 211L224 144 144 0zM489 57l17-17L472 6.1 455 23l-119 119L336 88l0-24-48 0 0 24 0 112 0 24 24 0 112 0 24 0 0-48-24 0-54.1 0L489 57z" />
    </Icon>
);

export default PhoneArrowDownLeft;