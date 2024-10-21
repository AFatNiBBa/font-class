
import { Icon } from "../../index";

/**
 * A component that renders the `clock-six-thirty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-six-thirty?s=sharp-regular clock-six-thirty}
 * @preview ![clock-six-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clock-six-thirty.svg)
 */
const ClockSixThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM280 392l0-136 0-24-48 0 0 24 0 136 0 24 48 0 0-24z" />
    </Icon>
);

export default ClockSixThirty;