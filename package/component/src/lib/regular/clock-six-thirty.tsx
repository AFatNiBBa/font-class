
import { Icon } from "../../index";

/**
 * A component that renders the `clock-six-thirty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-six-thirty?s=regular clock-six-thirty}
 * @preview ![clock-six-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/clock-six-thirty.svg)
 */
const ClockSixThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM280 392l0-136c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 136c0 13.3 10.7 24 24 24s24-10.7 24-24z" />
    </Icon>
);

export default ClockSixThirty;