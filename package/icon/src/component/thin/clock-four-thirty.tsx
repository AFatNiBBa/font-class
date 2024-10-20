
import { Icon } from "../../index";

/**
 * A component that renders the `clock-four-thirty` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-four-thirty?s=thin clock-four-thirty}
 * @preview ![clock-four-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/clock-four-thirty.svg)
 */
const ClockFourThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 256a240 240 0 1 1 480 0A240 240 0 1 1 16 256zm496 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM264 408l0-137.1 83.6 55.7c3.7 2.5 8.6 1.5 11.1-2.2s1.5-8.6-2.2-11.1l-96-64c-2.5-1.6-5.6-1.8-8.2-.4s-4.2 4.1-4.2 7.1l0 152c0 4.4 3.6 8 8 8s8-3.6 8-8z" />
    </Icon>
);

export default ClockFourThirty;