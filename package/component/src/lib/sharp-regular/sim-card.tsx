
import { Icon } from "../../index";

/**
 * A component that renders the `sim-card` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-card?s=sharp-regular sim-card}
 * @preview ![sim-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sim-card.svg)
 */
const SimCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 48l0 416 288 0 0-316.1L236.1 48 48 48zM256 0L384 128l0 336 0 48-48 0L48 512 0 512l0-48L0 48 0 0 48 0 256 0zM80 240l64 0 0 80-64 0 0-80zm0 192l0-80 80 0 48 0 0 80L80 432zm224 0l-64 0 0-80 64 0 0 80zm0-192l0 80-80 0-48 0 0-80 128 0z" />
    </Icon>
);

export default SimCard;