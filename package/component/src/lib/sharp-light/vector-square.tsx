
import { Icon } from "../../index";

/**
 * A component that renders the `vector-square` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-square?s=sharp-light vector-square}
 * @preview ![vector-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/vector-square.svg)
 */
const VectorSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 64l0 64-64 0 0-64 64 0zM352 32l-32 0 0 32 0 16L128 80l0-16 0-32L96 32 32 32 0 32 0 64l0 64 0 32 32 0 16 0 0 192-16 0L0 352l0 32 0 64 0 32 32 0 64 0 32 0 0-32 0-16 192 0 0 16 0 32 32 0 64 0 32 0 0-32 0-64 0-32-32 0-16 0 0-192 16 0 32 0 0-32 0-64 0-32-32 0-64 0zM80 352l0-192 16 0 32 0 0-32 0-16 192 0 0 16 0 32 32 0 16 0 0 192-16 0-32 0 0 32 0 16-192 0 0-16 0-32-32 0-16 0zM32 384l64 0 0 64-64 0 0-64zm320 0l64 0 0 64-64 0 0-64zM32 64l64 0 0 64-64 0 0-64z" />
    </Icon>
);

export default VectorSquare;