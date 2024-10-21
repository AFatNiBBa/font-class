
import { Icon } from "../../index";

/**
 * A component that renders the `sim-cards` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-cards?s=sharp-light sim-cards}
 * @preview ![sim-cards](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sim-cards.svg)
 */
const SimCards: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 400l304 0 0-258.7L306.7 32 112 32l0 368zM448 128l0 272 0 32-32 0-304 0-32 0 0-32L80 32 80 0l32 0L320 0 448 128zM32 96l0 16 0 368 336 0 16 0 0 32-16 0L16 512 0 512l0-16L0 112 0 96l32 0zm128 48l80 0 56 0 72 0 16 0 0 16 0 64 0 64 0 64 0 16-16 0-96 0-40 0-72 0-16 0 0-16 0-64 0-64 0-64 0-16 16 0zm16 64l48 0 0-32-48 0 0 32zm80 0l40 0 56 0 0-32-56 0-40 0 0 32zm40 32l-56 0-64 0 0 32 56 0 40 0 80 0 0-32-56 0zm-8 96l64 0 0-32-64 0 0 32zm-32-32l-24 0-56 0 0 32 56 0 24 0 0-32z" />
    </Icon>
);

export default SimCards;