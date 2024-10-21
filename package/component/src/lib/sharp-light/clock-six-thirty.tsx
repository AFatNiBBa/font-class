
import { Icon } from "../../index";

/**
 * A component that renders the `clock-six-thirty` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-six-thirty?s=sharp-light clock-six-thirty}
 * @preview ![clock-six-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/clock-six-thirty.svg)
 */
const ClockSixThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 256a224 224 0 1 1 448 0A224 224 0 1 1 32 256zm480 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM272 400l0-144 0-16-32 0 0 16 0 144 0 16 32 0 0-16z" />
    </Icon>
);

export default ClockSixThirty;