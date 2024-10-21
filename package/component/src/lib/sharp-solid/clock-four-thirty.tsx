
import { Icon } from "../../index";

/**
 * A component that renders the `clock-four-thirty` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-four-thirty?s=sharp-solid clock-four-thirty}
 * @preview ![clock-four-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/clock-four-thirty.svg)
 */
const ClockFourThirty: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 1 256 0a256 256 0 1 1 0 512zm24-120l0-91.2L338.7 340l20 13.3 26.6-39.9-20-13.3-96-64L232 211.2l0 44.8 0 136 0 24 48 0 0-24z" />
    </Icon>
);

export default ClockFourThirty;