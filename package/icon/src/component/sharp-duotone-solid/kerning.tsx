
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kerning` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kerning?s=sharp-duotone-solid kerning}
 * @preview ![kerning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/kerning.svg)
 */
const Kerning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M2.8 96L130.5 396.5l8.3 19.5 42.3 0 8.3-19.5L317.2 96l-69.5 0L160 302.2 72.4 96 2.8 96zm320 320l69.5 0 27.2-64 120.9 0 27.2 64 69.5 0L509.4 115.5 501.2 96l-42.3 0-8.3 19.5L322.8 416zM446.8 288L480 209.8 513.2 288l-66.5 0z" />
        <path d="M201.3 489.6l208-480 29.4 12.7-208 480-29.4-12.7z" />
    </Icon>
);

export default Kerning;