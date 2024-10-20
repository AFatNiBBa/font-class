
import { Icon } from "../../index";

/**
 * A component that renders the `clock-eight-thirty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eight-thirty?s=sharp-regular clock-eight-thirty}
 * @preview ![clock-eight-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clock-eight-thirty.svg)
 */
const ClockEightThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 0 416 0A208 208 0 1 0 48 256zm464 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM232 392l0-91.2L173.3 340l-20 13.3-26.6-39.9 20-13.3 96-64L280 211.2l0 44.8 0 136 0 24-48 0 0-24z" />
    </Icon>
);

export default ClockEightThirty;