
import { Icon, generic } from "../../index";

/**
 * A component that renders the `crosshairs-simple` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/crosshairs-simple?s=sharp-duotone-solid crosshairs-simple}
 * @preview ![crosshairs-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/crosshairs-simple.svg)
 */
const CrosshairsSimple: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm64 0c0-10.9 .9-21.6 2.7-32C80.1 143.6 143.6 80.1 224 66.7c10.4-1.7 21.1-2.7 32-2.7s21.6 .9 32 2.7C368.4 80.1 431.9 143.6 445.3 224c1.7 10.4 2.7 21.1 2.7 32s-.9 21.6-2.7 32C431.9 368.4 368.4 431.9 288 445.3c-10.4 1.7-21.1 2.7-32 2.7s-21.6-.9-32-2.7C143.6 431.9 80.1 368.4 66.7 288c-1.7-10.4-2.7-21.1-2.7-32z" />
        <path d="M288 445.3c-10.4 1.7-21.1 2.7-32 2.7s-21.6-.9-32-2.7l0-61.3 0-32 64 0 0 32 0 61.3zM445.3 224c1.7 10.4 2.7 21.1 2.7 32s-.9 21.6-2.7 32l-7.3 0L384 288l-32 0 0-64 32 0 54.1 0 7.3 0zM224 66.7c10.4-1.7 21.1-2.7 32-2.7s21.6 .9 32 2.7l0 61.3 0 32-64 0 0-32 0-61.3zM66.7 288c-1.7-10.4-2.7-21.1-2.7-32s.9-21.6 2.7-32l61.3 0 32 0 0 64-32 0-61.3 0z" />
    </Icon>
);

export default CrosshairsSimple;