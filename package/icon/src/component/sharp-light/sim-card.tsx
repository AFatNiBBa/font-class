
import { Icon } from "../../index";

/**
 * A component that renders the `sim-card` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-card?s=sharp-light sim-card}
 * @preview ![sim-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sim-card.svg)
 */
const SimCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M32 32l0 448 320 0 0-338.7L242.7 32 32 32zM256 0L384 128l0 352 0 32-32 0L32 512 0 512l0-32L0 32 0 0 32 0 256 0zM64 280l0-56 0-32 32 0 64 0 16 0 16 0 40 0 56 0 32 0 0 32 0 56 0 80 0 56 0 32-32 0-64 0-16 0-16 0-96 0-32 0 0-32 0-56 0-80zm32 96l0 40 96 0 0-40-40 0-56 0zm192 0l-64 0 0 40 64 0 0-40zm-80-32l80 0 0-48-56 0-56 0-80 0 0 48 56 0 56 0zm80-120l-56 0-40 0 0 40 40 0 56 0 0-40zm-128 0l-64 0 0 40 64 0 0-40z" />
    </Icon>
);

export default SimCard;