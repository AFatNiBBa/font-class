
import { Icon } from "../../index";

/**
 * A component that renders the `clock-nine-thirty` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-nine-thirty?s=light clock-nine-thirty}
 * @preview ![clock-nine-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/clock-nine-thirty.svg)
 */
const ClockNineThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 1 448 0A224 224 0 1 1 32 256zm480 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM272 400l0-144c0-8.8-7.2-16-16-16l-112 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l96 0 0 128c0 8.8 7.2 16 16 16s16-7.2 16-16z" />
    </Icon>
);

export default ClockNineThirty;