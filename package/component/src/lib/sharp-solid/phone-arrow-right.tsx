
import { Icon } from "../../index";

/**
 * A component that renders the `phone-arrow-right` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-arrow-right?s=sharp-solid phone-arrow-right}
 * @preview ![phone-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/phone-arrow-right.svg)
 */
const PhoneArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 0L0 32 0 64C0 311.4 200.6 512 448 512l32 0 32-144L368 288l-67 83.8C232.5 335.7 176.3 279.5 140.2 211L224 144 144 0zM413.8 23l-17-17L362.9 40l17 17 39 39L312 96l-24 0 0 48 24 0 106.9 0-39 39-17 17 33.9 33.9 17-17 80-80 17-17-17-17-80-80z" />
    </Icon>
);

export default PhoneArrowRight;