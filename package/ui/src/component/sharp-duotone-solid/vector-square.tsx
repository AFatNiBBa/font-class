
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vector-square` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-square?s=sharp-duotone-solid vector-square}
 * @preview ![vector-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/vector-square.svg)
 */
const VectorSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 160l16 0 32 0 16 0 0 192-16 0-32 0-16 0 0-192zm96-96l192 0 0 16 0 32 0 16-192 0 0-16 0-32 0-16zm0 320l192 0 0 16 0 32 0 16-192 0 0-16 0-32 0-16zM352 160l16 0 32 0 16 0 0 192-16 0-32 0-16 0 0-192z" />
        <path d="M400 80l0 32-32 0 0-32 32 0zM368 32l-48 0 0 48 0 32 0 48 48 0 32 0 48 0 0-48 0-32 0-48-48 0-32 0zM48 400l32 0 0 32-32 0 0-32zM0 352l0 48 0 32 0 48 48 0 32 0 48 0 0-48 0-32 0-48-48 0-32 0L0 352zm368 48l32 0 0 32-32 0 0-32zm-48-48l0 48 0 32 0 48 48 0 32 0 48 0 0-48 0-32 0-48-48 0-32 0-48 0zM48 80l32 0 0 32-32 0 0-32zM0 32L0 80l0 32 0 48 48 0 32 0 48 0 0-48 0-32 0-48L80 32 48 32 0 32z" />
    </Icon>
);

export default VectorSquare;