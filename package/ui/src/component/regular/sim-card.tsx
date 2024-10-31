
import { Icon } from "../../index";

/**
 * A component that renders the `sim-card` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-card?s=regular sim-card}
 * @preview ![sim-card](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sim-card.svg)
 */
const SimCard: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 64l0 384c0 8.8 7.2 16 16 16l256 0c8.8 0 16-7.2 16-16l0-293.5c0-4.2-1.7-8.3-4.7-11.3L240.8 52.7c-3-3-7.1-4.7-11.3-4.7L64 48c-8.8 0-16 7.2-16 16zM0 448L0 64C0 28.7 28.7 0 64 0L229.5 0c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3L384 448c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64zM128 240l16 0 0 80-64 0 0-32c0-26.5 21.5-48 48-48zM80 384l0-32 80 0 48 0 0 80-80 0c-26.5 0-48-21.5-48-48zm176 48l-16 0 0-80 64 0 0 32c0 26.5-21.5 48-48 48zm48-144l0 32-80 0-48 0 0-80 80 0c26.5 0 48 21.5 48 48z" />
    </Icon>
);

export default SimCard;