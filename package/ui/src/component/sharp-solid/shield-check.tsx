
import { Icon } from "../../index";

/**
 * A component that renders the `shield-check` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-check?s=sharp-solid shield-check}
 * @preview ![shield-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shield-check.svg)
 */
const ShieldCheck: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 5.7l11.5 4.4L475 90.2l19.2 7.4 1.2 20.6c2.9 49.7-4.9 125.6-37.3 199.8C425.4 392.8 367 467.1 268.6 509.4L256 514.8l-12.6-5.4C145 467.1 86.6 392.8 53.9 318C21.4 243.7 13.6 167.8 16.6 118.1l1.2-20.6L37 90.2l207.5-80L256 5.7zM369 209l17-17L352 158.1l-17 17-111 111-47-47-17-17L126.1 256l17 17 64 64 17 17 17-17L369 209z" />
    </Icon>
);

export default ShieldCheck;