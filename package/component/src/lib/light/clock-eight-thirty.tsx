
import { Icon } from "../../index";

/**
 * A component that renders the `clock-eight-thirty` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eight-thirty?s=light clock-eight-thirty}
 * @preview ![clock-eight-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/clock-eight-thirty.svg)
 */
const ClockEightThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 0 448 0A224 224 0 1 0 32 256zm480 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM240 400l0-114.1-71.1 47.4c-7.4 4.9-17.3 2.9-22.2-4.4s-2.9-17.3 4.4-22.2l96-64c4.9-3.3 11.2-3.6 16.4-.8s8.5 8.2 8.5 14.1l0 144c0 8.8-7.2 16-16 16s-16-7.2-16-16z" />
    </Icon>
);

export default ClockEightThirty;