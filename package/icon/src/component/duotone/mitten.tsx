
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mitten` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mitten?s=duotone mitten}
 * @preview ![mitten](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mitten.svg)
 */
const Mitten: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 416l0 64c0 17.7 14.3 32 32 32l288 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32L64 384c-17.7 0-32 14.3-32 32z" />
        <path d="M314.7 234.7L283.2 108.9C267.2 44.9 209.7 0 143.8 0l-3.4 0C62.8 0 0 62.8 0 140.3c0 13 1.8 26 5.4 38.6L64 384l288 0 79.2-85.8c10.8-11.7 16.8-27 16.8-42.9c0-34.9-28.3-63.3-63.3-63.3l-2.8 0c-19 0-37.2 8.2-49.7 22.6l-17.6 20.1z" />
    </Icon>
);

export default Mitten;