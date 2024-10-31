
import { Icon, generic } from "../../index";

/**
 * A component that renders the `skull` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull?s=duotone skull}
 * @preview ![skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/skull.svg)
 */
const Skull: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 224c0 70.7 37.5 133.8 96 174.9c0 .4 0 .7 0 1.1l0 64c0 26.5 21.5 48 48 48l48 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 64 0 0-48c0-8.8 7.2-16 16-16s16 7.2 16 16l0 48 48 0c26.5 0 48-21.5 48-48l0-64c0-.4 0-.7 0-1.1c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224zm224 32A64 64 0 1 1 96 256a64 64 0 1 1 128 0zm192 0a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M160 320a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm192 0a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default Skull;