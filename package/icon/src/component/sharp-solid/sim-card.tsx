
import { Icon } from "../../index";

/**
 * A component that renders the `sim-card` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-card?s=sharp-solid sim-card}
 * @preview ![sim-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sim-card.svg)
 */
const SimCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M0 0L32 0 256 0l13.3 0 9.4 9.4 96 96 9.4 9.4 0 13.3 0 352 0 32-32 0L32 512 0 512l0-32L0 32 0 0zM64 192l0 64 64 0 0-64-64 0zm0 160l80 0 96 0 80 0 0-64-80 0-96 0-80 0 0 64zM320 192l-64 0 0 64 64 0 0-64zm-160 0l0 64 64 0 0-64-64 0zm96 192l0 64 64 0 0-64-64 0zm-32 0l-64 0 0 64 64 0 0-64zm-96 0l-64 0 0 64 64 0 0-64z" />
    </Icon>
);

export default SimCard;