
import { Icon, generic } from "../../index";

/**
 * A component that renders the `highlighter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/highlighter?s=sharp-duotone-solid highlighter}
 * @preview ![highlighter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/highlighter.svg)
 */
const Highlighter: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M48 400c4.2 4.2 8.5 8.5 12.7 12.7c23.5 23.5 47.1 47.1 70.6 70.6c4.2 4.2 8.5 8.5 12.7 12.7l80-80 96 0 40.1-55.9L183.9 183.9 128 224l0 96c-26.7 26.7-53.3 53.3-80 80z" />
        <path d="M544 104L360.1 360.1 183.9 183.9 440 0 544 104zM4.7 468.7l56-56 70.6 70.6-24 24-4.7 4.7L96 512l-80 0L0 512l0-16 0-16 0-6.6 4.7-4.7z" />
    </Icon>
);

export default Highlighter;