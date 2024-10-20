
import { Icon } from "../../index";

/**
 * A component that renders the `clock-three-thirty` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-three-thirty?s=regular clock-three-thirty}
 * @preview ![clock-three-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/clock-three-thirty.svg)
 */
const ClockThreeThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 256a208 208 0 1 0 416 0A208 208 0 1 0 48 256zm464 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM232 392l0-136c0-13.3 10.7-24 24-24l104 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0 0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
    </Icon>
);

export default ClockThreeThirty;