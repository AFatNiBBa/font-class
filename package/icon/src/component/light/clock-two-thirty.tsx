
import { Icon } from "../../index";

/**
 * A component that renders the `clock-two-thirty` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-two-thirty?s=light clock-two-thirty}
 * @preview ![clock-two-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/clock-two-thirty.svg)
 */
const ClockTwoThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 0 448 0A224 224 0 1 0 32 256zm480 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM240 400l0-144c0-5.3 2.7-10.3 7.1-13.3l96-64c7.4-4.9 17.3-2.9 22.2 4.4s2.9 17.3-4.4 22.2L272 264.6 272 400c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
    </Icon>
);

export default ClockTwoThirty;