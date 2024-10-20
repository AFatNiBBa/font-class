
import { Icon } from "../../index";

/**
 * A component that renders the `phone-flip` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-flip?s=sharp-solid phone-flip}
 * @preview ![phone-flip](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/phone-flip.svg)
 */
const PhoneFlip: typeof Icon = x => (
    <Icon {...x}>
        <path d="M512 32L368 0 288 144l83.8 67c-36.1 68.4-92.3 124.6-160.8 160.8L144 288 0 368 32 512H64c247.4 0 448-200.6 448-448l0-32z" />
    </Icon>
);

export default PhoneFlip;