
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vector-square` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vector-square?s=duotone vector-square}
 * @preview ![vector-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/vector-square.svg)
 */
const VectorSquare: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 160l64 0 0 192-64 0 0-192zm96-96l192 0 0 64-192 0 0-64zm0 320l192 0 0 64-192 0 0-64zM352 160l64 0 0 192-64 0 0-192z" />
        <path d="M368 80l32 0 0 32-32 0 0-32zM352 32c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0zM48 432l0-32 32 0 0 32-32 0zM0 384l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zm368 48l0-32 32 0 0 32-32 0zm-48-48l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32 14.3-32 32zM48 112l0-32 32 0 0 32-32 0zM0 64l0 64c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L32 32C14.3 32 0 46.3 0 64z" />
    </Icon>
);

export default VectorSquare;