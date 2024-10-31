
import { Icon } from "../../index";

/**
 * A component that renders the `clock-seven-thirty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-seven-thirty?s=sharp-light clock-seven-thirty}
 * @preview ![clock-seven-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clock-seven-thirty.svg)
 */
const ClockSevenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 0 448 0A224 224 0 1 0 32 256zm480 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM240 400l0-91.2-34.7 52-8.9 13.3-26.6-17.8 8.9-13.3 64-96L272 256l0 144 0 16-32 0 0-16z" />
    </Icon>
);

export default ClockSevenThirty;