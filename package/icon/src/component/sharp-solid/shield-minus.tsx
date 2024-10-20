
import { Icon } from "../../index";

/**
 * A component that renders the `shield-minus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-minus?s=sharp-solid shield-minus}
 * @preview ![shield-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shield-minus.svg)
 */
const ShieldMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 5.7l11.5 4.4L475 90.2l19.2 7.4 1.2 20.6c2.9 49.7-4.9 125.6-37.3 199.8C425.4 392.8 367 467.1 268.6 509.4L256 514.8l-12.6-5.4C145 467.1 86.6 392.8 53.9 318C21.4 243.7 13.6 167.8 16.6 118.1l1.2-20.6L37 90.2l207.5-80L256 5.7zM184 232l-24 0 0 48 24 0 144 0 24 0 0-48-24 0-144 0z" />
    </Icon>
);

export default ShieldMinus;