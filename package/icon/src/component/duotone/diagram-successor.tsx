
import { Icon, generic } from "../../index";

/**
 * A component that renders the `diagram-successor` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-successor?s=duotone diagram-successor}
 * @preview ![diagram-successor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/diagram-successor.svg)
 */
const DiagramSuccessor: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 96l0 64c0 35.3 28.7 64 64 64l160 0c35.3 0 64-28.7 64-64l0-64 80 0c8.8 0 16 7.2 16 16l0 16-38.1 0c-21.4 0-32.1 25.9-17 41L399 239c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7L503 169c4.9-4.9 7.1-10.9 7.1-16.8c0-12.3-9.6-24.2-24-24.2L448 128l0-16c0-44.2-35.8-80-80-80L224 32l-16 0L64 32C28.7 32 0 60.7 0 96z" />
        <path d="M448 480c35.3 0 64-28.7 64-64l0-64c0-35.3-28.7-64-64-64L64 288c-35.3 0-64 28.7-64 64l0 64c0 35.3 28.7 64 64 64l384 0z" />
    </Icon>
);

export default DiagramSuccessor;