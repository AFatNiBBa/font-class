
import { Icon } from "../../index";

/**
 * A component that renders the `clock-ten-thirty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-ten-thirty?s=sharp-light clock-ten-thirty}
 * @preview ![clock-ten-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clock-ten-thirty.svg)
 */
const ClockTenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 1 448 0A224 224 0 1 1 32 256zm480 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM272 400l0-144 0-8.6-7.1-4.8-96-64-13.3-8.9-17.8 26.6 13.3 8.9L240 264.6 240 400l0 16 32 0 0-16z" />
    </Icon>
);

export default ClockTenThirty;