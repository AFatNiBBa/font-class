
import { Icon, generic } from "../../index";

/**
 * A component that renders the `anchor` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor?s=duotone anchor}
 * @preview ![anchor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/anchor.svg)
 */
const Anchor: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M192 96c0 33.4 17 62.8 42.9 80L224 176c-17.7 0-32 14.3-32 32s14.3 32 32 32l32 0 64 0 32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-10.9 0C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96zm128 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M256 448l0-208 64 0 0 208 48 0c53 0 96-43 96-96l0-6.1-7 7c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l56-56c9.4-9.4 24.6-9.4 33.9 0l56 56c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-7-7 0 6.1c0 88.4-71.6 160-160 160l-80 0-80 0c-88.4 0-160-71.6-160-160l0-6.1-7 7c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l56-56c9.4-9.4 24.6-9.4 33.9 0l56 56c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-7-7 0 6.1c0 53 43 96 96 96l48 0z" />
    </Icon>
);

export default Anchor;