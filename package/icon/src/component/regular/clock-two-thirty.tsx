
import { Icon } from "../../index";

/**
 * A component that renders the `clock-two-thirty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-two-thirty?s=regular clock-two-thirty}
 * @preview ![clock-two-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/clock-two-thirty.svg)
 */
const ClockTwoThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 0 416 0A208 208 0 1 0 48 256zm464 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM232 392l0-136c0-8 4-15.5 10.7-20l96-64c11-7.4 25.9-4.4 33.3 6.7s4.4 25.9-6.7 33.3L280 268.8 280 392c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
    </Icon>
);

export default ClockTwoThirty;