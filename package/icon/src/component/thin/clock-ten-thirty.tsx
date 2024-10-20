
import { Icon } from "../../index";

/**
 * A component that renders the `clock-ten-thirty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-ten-thirty?s=thin clock-ten-thirty}
 * @preview ![clock-ten-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clock-ten-thirty.svg)
 */
const ClockTenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 1 480 0A240 240 0 1 1 16 256zm496 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM264 408l0-152c0-2.7-1.3-5.2-3.6-6.7l-96-64c-3.7-2.5-8.6-1.5-11.1 2.2s-1.5 8.6 2.2 11.1L248 260.3 248 408c0 4.4 3.6 8 8 8s8-3.6 8-8z" />
    </Icon>
);

export default ClockTenThirty;