
import { Icon } from "../../index";

/**
 * A component that renders the `clock-three-thirty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-three-thirty?s=thin clock-three-thirty}
 * @preview ![clock-three-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clock-three-thirty.svg)
 */
const ClockThreeThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 0 480 0A240 240 0 1 0 16 256zm496 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM248 408l0-152c0-4.4 3.6-8 8-8l120 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-112 0 0 144c0 4.4-3.6 8-8 8s-8-3.6-8-8z" />
    </Icon>
);

export default ClockThreeThirty;