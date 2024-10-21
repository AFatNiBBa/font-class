
import { Icon } from "../../index";

/**
 * A component that renders the `sim-card` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-card?s=solid sim-card}
 * @preview ![sim-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/sim-card.svg)
 */
const SimCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 0L242.7 0c17 0 33.3 6.7 45.3 18.7L365.3 96c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0zM96 192c-17.7 0-32 14.3-32 32l0 32 64 0 0-64-32 0zM64 352l80 0 96 0 80 0 0-64-80 0-96 0-80 0 0 64zM320 224c0-17.7-14.3-32-32-32l-32 0 0 64 64 0 0-32zM160 192l0 64 64 0 0-64-64 0zM288 448c17.7 0 32-14.3 32-32l0-32-64 0 0 64 32 0zM160 384l0 64 64 0 0-64-64 0zM64 416c0 17.7 14.3 32 32 32l32 0 0-64-64 0 0 32z" />
    </Icon>
);

export default SimCard;