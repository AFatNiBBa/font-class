
import { Icon } from "../../index";

/**
 * A component that renders the `clock-eleven-thirty` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eleven-thirty?s=sharp-regular clock-eleven-thirty}
 * @preview ![clock-eleven-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/clock-eleven-thirty.svg)
 */
const ClockElevenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 0 416 0A208 208 0 1 0 48 256zm464 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM232 392l0-128.7-60-90-13.3-20 39.9-26.6 13.3 20 64 96 4 6 0 7.3 0 136 0 24-48 0 0-24z" />
    </Icon>
);

export default ClockElevenThirty;