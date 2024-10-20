
import { Icon } from "../../index";

/**
 * A component that renders the `clock-eleven-thirty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-eleven-thirty?s=sharp-light clock-eleven-thirty}
 * @preview ![clock-eleven-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clock-eleven-thirty.svg)
 */
const ClockElevenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 0 448 0A224 224 0 1 0 32 256zm480 0A256 256 0 1 1 0 256a256 256 0 1 1 512 0zM240 400l0-139.2-61.3-92-8.9-13.3 26.6-17.8 8.9 13.3 64 96 2.7 4 0 4.8 0 144 0 16-32 0 0-16z" />
    </Icon>
);

export default ClockElevenThirty;