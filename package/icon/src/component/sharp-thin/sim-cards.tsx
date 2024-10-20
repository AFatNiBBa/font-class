
import { Icon } from "../../index";

/**
 * A component that renders the `sim-cards` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sim-cards?s=sharp-thin sim-cards}
 * @preview ![sim-cards](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sim-cards.svg)
 */
const SimCards: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 416L96 16l217.4 0L432 134.6 432 416 96 416zM448 128L320 0 96 0 80 0l0 16 0 400 0 16 16 0 336 0 16 0 0-16 0-288zM48 80L16 80 0 80 0 96 0 496l0 16 16 0 336 0 16 0 0-16 0-32-16 0 0 32L16 496 16 96l32 0 0-16zm112 64l-8 0 0 8 0 64 0 64 0 64 0 8 8 0 64 0 80 0 64 0 8 0 0-8 0-64 0-64 0-64 0-8-8 0-64 0-80 0-64 0zm8 64l0-48 48 0 0 48-48 0zm64 0l0-48 64 0 0 48-64 0zm80 0l0-48 48 0 0 48-48 0zm-8 16l56 0 0 48-56 0-80 0-56 0 0-48 56 0 80 0zm8 64l48 0 0 48-48 0 0-48zm-16 0l0 48-64 0 0-48 64 0zm-80 0l0 48-48 0 0-48 48 0z" />
    </Icon>
);

export default SimCards;