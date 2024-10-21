
import { Icon } from "../../index";

/**
 * A component that renders the `vector-square` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-square?s=regular vector-square}
 * @preview ![vector-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/vector-square.svg)
 */
const VectorSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M360 72l48 0 0 48-48 0 0-48zm-8-40c-17.7 0-32 14.3-32 32l0 8L128 72l0-8c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64l0 64c0 17.7 14.3 32 32 32l8 0 0 192-8 0c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-8 192 0 0 8c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-8 0 0-192 8 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0zM88 352l0-192 8 0c17.7 0 32-14.3 32-32l0-8 192 0 0 8c0 17.7 14.3 32 32 32l8 0 0 192-8 0c-17.7 0-32 14.3-32 32l0 8-192 0 0-8c0-17.7-14.3-32-32-32l-8 0zM40 440l0-48 48 0 0 48-48 0zm320 0l0-48 48 0 0 48-48 0zM40 120l0-48 48 0 0 48-48 0z" />
    </Icon>
);

export default VectorSquare;