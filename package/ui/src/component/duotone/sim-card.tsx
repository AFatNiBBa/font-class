
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sim-card` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-card?s=duotone sim-card}
 * @preview ![sim-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/sim-card.svg)
 */
const SimCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-306.7c0-17-6.7-33.3-18.7-45.3L288 18.7C276 6.7 259.7 0 242.7 0L64 0C28.7 0 0 28.7 0 64zM64 224c0-17.7 14.3-32 32-32l32 0 32 0 64 0 32 0 32 0c17.7 0 32 14.3 32 32l0 32 0 32 0 64 0 32 0 32c0 17.7-14.3 32-32 32l-32 0-32 0-64 0-32 0-32 0c-17.7 0-32-14.3-32-32l0-32 0-32 0-64 0-32 0-32z" />
        <path d="M128 192l-32 0c-17.7 0-32 14.3-32 32l0 32 64 0 0-64zM64 288l0 64 80 0 96 0 80 0 0-64-80 0-96 0-80 0zm256-32l0-32c0-17.7-14.3-32-32-32l-32 0 0 64 64 0zm-96-64l-64 0 0 64 64 0 0-64zm96 192l-64 0 0 64 32 0c17.7 0 32-14.3 32-32l0-32zm-96 64l0-64-64 0 0 64 64 0zm-96 0l0-64-64 0 0 32c0 17.7 14.3 32 32 32l32 0z" />
    </Icon>
);

export default SimCard;