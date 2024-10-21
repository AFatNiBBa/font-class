
import { Icon } from "../../index";

/**
 * A component that renders the `phone` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone?s=sharp-solid phone}
 * @preview ![phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/phone.svg)
 */
const Phone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32L144 0l80 144-83.8 67c36.1 68.4 92.3 124.6 160.8 160.8L368 288l144 80L480 512H448C200.6 512 0 311.4 0 64L0 32z" />
    </Icon>
);

export default Phone;