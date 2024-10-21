
import { Icon } from "../../index";

/**
 * A component that renders the `phone-arrow-right` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-arrow-right?s=sharp-thin phone-arrow-right}
 * @preview ![phone-arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/phone-arrow-right.svg)
 */
const PhoneArrowRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 512C200.6 512 0 311.4 0 64L0 32 144 0l80 144-83.8 67c36.1 68.4 92.3 124.6 160.8 160.8L368 288l144 80L480 512l-32 0zM16 64s0 0 0 0c0 238.6 193.4 432 432 432l19.2 0 26.6-119.8L372 308.6l-58.6 73.2-8.3 10.3-11.7-6.2C222.2 348.3 163.7 289.8 126 218.5l-6.2-11.7 10.3-8.3L203.4 140 135.8 18.2 16 44.8 16 64zM413.7 10.3l88 88 5.7 5.7-5.7 5.7-88 88-5.7 5.7L396.7 192l5.7-5.7L476.7 112 296 112l-8 0 0-16 8 0 180.7 0L402.3 21.7 396.7 16 408 4.7l5.7 5.7z" />
    </Icon>
);

export default PhoneArrowRight;