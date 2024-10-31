
import { Icon } from "../../index";

/**
 * A component that renders the `clock-six-thirty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-six-thirty?s=thin clock-six-thirty}
 * @preview ![clock-six-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clock-six-thirty.svg)
 */
const ClockSixThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 1 480 0A240 240 0 1 1 16 256zm496 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM264 408l0-152c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 152c0 4.4 3.6 8 8 8s8-3.6 8-8z" />
    </Icon>
);

export default ClockSixThirty;