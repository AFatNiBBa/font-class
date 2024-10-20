
import { Icon } from "../../index";

/**
 * A component that renders the `shield-xmark` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-xmark?s=sharp-solid shield-xmark}
 * @preview ![shield-xmark](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shield-xmark.svg)
 */
const ShieldXmark: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 5.7l11.5 4.4L475 90.2l19.2 7.4 1.2 20.6c2.9 49.7-4.9 125.6-37.3 199.8C425.4 392.8 367 467.1 268.6 509.4L256 514.8l-12.6-5.4C145 467.1 86.6 392.8 53.9 318C21.4 243.7 13.6 167.8 16.6 118.1l1.2-20.6L37 90.2l207.5-80L256 5.7zM353.9 192L320 158.1l-17 17-47 47-47-47-17-17L158.1 192l17 17 47 47-47 47-17 17L192 353.9l17-17 47-47 47 47 17 17L353.9 320l-17-17-47-47 47-47 17-17z" />
    </Icon>
);

export default ShieldXmark;