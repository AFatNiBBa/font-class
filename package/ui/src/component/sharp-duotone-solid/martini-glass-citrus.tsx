
import { Icon, generic } from "../../index";

/**
 * A component that renders the `martini-glass-citrus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/martini-glass-citrus?s=sharp-duotone-solid martini-glass-citrus}
 * @preview ![martini-glass-citrus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/martini-glass-citrus.svg)
 */
const MartiniGlassCitrus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 128l288.9 0 48.4 0 78.7 0 0 32c-17.3 17.3-34.6 34.6-51.9 51.9l-33.9 33.9c-32.7 32.7-65.4 65.4-98.2 98.2l0 120 88 0 0 48-88 0-24 0L96 512l0-48 88 0 0-120L0 160l0-32z" />
        <path d="M528 144c0 53-43 96-96 96c-26.5 0-50.5-10.7-67.9-28.1l-33.9 33.9C356.2 271.9 392.2 288 432 288c79.5 0 144-64.5 144-144S511.5 0 432 0C357.9 0 296.8 56 288.9 128l48.4 0c7.6-45.4 47.1-80 94.7-80c53 0 96 43 96 96z" />
    </Icon>
);

export default MartiniGlassCitrus;