
import { Icon } from "../../index";

/**
 * A component that renders the `vector-square` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-square?s=sharp-regular vector-square}
 * @preview ![vector-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/vector-square.svg)
 */
const VectorSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M408 72l0 48-48 0 0-48 48 0zM360 32l-40 0 0 40L128 72l0-40L88 32 40 32 0 32 0 72l0 48 0 40 40 0 0 192L0 352l0 40 0 48 0 40 40 0 48 0 40 0 0-40 192 0 0 40 40 0 48 0 40 0 0-40 0-48 0-40-40 0 0-192 40 0 0-40 0-48 0-40-40 0-48 0zM88 352l0-192 40 0 0-40 192 0 0 40 40 0 0 192-40 0 0 40-192 0 0-40-40 0zM40 392l48 0 0 48-48 0 0-48zm320 0l48 0 0 48-48 0 0-48zM40 72l48 0 0 48-48 0 0-48z" />
    </Icon>
);

export default VectorSquare;