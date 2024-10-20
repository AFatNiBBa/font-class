
import { Icon } from "../../index";

/**
 * A component that renders the `vector-square` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-square?s=sharp-thin vector-square}
 * @preview ![vector-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/vector-square.svg)
 */
const VectorSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 48l0 64-64 0 0-64 64 0zM368 32l-16 0 0 16 0 24L96 72l0-24 0-16L80 32 16 32 0 32 0 48l0 64 0 16 16 0 24 0 0 256-24 0L0 384l0 16 0 64 0 16 16 0 64 0 16 0 0-16 0-24 256 0 0 24 0 16 16 0 64 0 16 0 0-16 0-64 0-16-16 0-24 0 0-256 24 0 16 0 0-16 0-64 0-16-16 0-64 0zM56 384l0-256 24 0 16 0 0-16 0-24 256 0 0 24 0 16 16 0 24 0 0 256-24 0-16 0 0 16 0 24L96 424l0-24 0-16-16 0-24 0zM16 400l64 0 0 64-64 0 0-64zm352 0l64 0 0 64-64 0 0-64zM16 48l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default VectorSquare;