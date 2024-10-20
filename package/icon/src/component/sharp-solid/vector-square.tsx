
import { Icon } from "../../index";

/**
 * A component that renders the `vector-square` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-square?s=sharp-solid vector-square}
 * @preview ![vector-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/vector-square.svg)
 */
const VectorSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M400 80l0 32-32 0 0-32 32 0zM368 32l-48 0 0 32L128 64l0-32L80 32 48 32 0 32 0 80l0 32 0 48 32 0 0 192L0 352l0 48 0 32 0 48 48 0 32 0 48 0 0-32 192 0 0 32 48 0 32 0 48 0 0-48 0-32 0-48-32 0 0-192 32 0 0-48 0-32 0-48-48 0-32 0zM96 160l32 0 0-32 192 0 0 32 32 0 0 192-32 0 0 32-192 0 0-32-32 0 0-192zM80 400l0 32-32 0 0-32 32 0zm288 0l32 0 0 32-32 0 0-32zM48 80l32 0 0 32-32 0 0-32z" />
    </Icon>
);

export default VectorSquare;