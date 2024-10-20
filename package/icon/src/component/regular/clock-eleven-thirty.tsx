
import { Icon } from "../../index";

/**
 * A component that renders the `clock-eleven-thirty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eleven-thirty?s=regular clock-eleven-thirty}
 * @preview ![clock-eleven-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/clock-eleven-thirty.svg)
 */
const ClockElevenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 0 416 0A208 208 0 1 0 48 256zm464 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM232 392l0-128.7-60-90c-7.4-11-4.4-25.9 6.7-33.3s25.9-4.4 33.3 6.7l64 96c2.6 3.9 4 8.6 4 13.3l0 136c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
    </Icon>
);

export default ClockElevenThirty;