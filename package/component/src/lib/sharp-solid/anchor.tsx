
import { Icon } from "../../index";

/**
 * A component that renders the `anchor` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/anchor?s=sharp-solid anchor}
 * @preview ![anchor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/anchor.svg)
 */
const Anchor: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 96a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm21.1 80C367 158.8 384 129.4 384 96c0-53-43-96-96-96s-96 43-96 96c0 33.4 17 62.8 42.9 80L224 176l-32 0 0 64 32 0 32 0 0 208-128 0 0-96 64 0L96 256 0 352l64 0 0 128 0 32 32 0 192 0 192 0 32 0 0-32 0-128 64 0-96-96-96 96 64 0 0 96-128 0 0-208 32 0 32 0 0-64-32 0-10.9 0z" />
    </Icon>
);

export default Anchor;