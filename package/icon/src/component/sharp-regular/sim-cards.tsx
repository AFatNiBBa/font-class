
import { Icon } from "../../index";

/**
 * A component that renders the `sim-cards` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-cards?s=sharp-regular sim-cards}
 * @preview ![sim-cards](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/sim-cards.svg)
 */
const SimCards: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M144 368l256 0 0-236.1L316.1 48 144 48l0 320zM448 112l0 256 0 48-48 0-256 0-48 0 0-48L96 48 96 0l48 0L336 0 448 112zM48 96l0 24 0 344 312 0 24 0 0 48-24 0L24 512 0 512l0-24L0 120 0 96l48 0zm128 80l96 0 0 64-16 0-80 0 0-64zm0 160l0-64 64 0 0 64-64 0zm192 0l-96 0 0-64 16 0 80 0 0 64zm0-160l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default SimCards;