
import { Icon } from "../../index";

/**
 * A component that renders the `sim-cards` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-cards?s=light sim-cards}
 * @preview ![sim-cards](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/sim-cards.svg)
 */
const SimCards: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 368c0 17.7 14.3 32 32 32l240 0c17.7 0 32-14.3 32-32l0-213.5c0-8.5-3.4-16.6-9.4-22.6L316.1 41.4c-6-6-14.1-9.4-22.6-9.4L144 32c-17.7 0-32 14.3-32 32l0 304zM80 64c0-35.3 28.7-64 64-64L293.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L448 368c0 35.3-28.7 64-64 64l-240 0c-35.3 0-64-28.7-64-64L80 64zM16 96c8.8 0 16 7.2 16 16l0 272c0 53 43 96 96 96l240 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-240 0C57.3 512 0 454.7 0 384L0 112c0-8.8 7.2-16 16-16zm160 96l0 16 48 0 0-32-32 0c-8.8 0-16 7.2-16 16zm120 16l56 0 0-16c0-8.8-7.2-16-16-16l-40 0-40 0 0 32 40 0zm0 32l-56 0-64 0 0 32 56 0 40 0 80 0 0-32-56 0zm-8 64l0 32 48 0c8.8 0 16-7.2 16-16l0-16-64 0zm-56 0l-56 0 0 16c0 8.8 7.2 16 16 16l40 0 24 0 0-32-24 0zM192 144l48 0 56 0 40 0c26.5 0 48 21.5 48 48l0 32 0 64 0 32c0 26.5-21.5 48-48 48l-64 0-40 0-40 0c-26.5 0-48-21.5-48-48l0-32 0-64 0-32c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default SimCards;