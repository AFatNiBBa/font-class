
import { Icon, generic } from "../../index";

/**
 * A component that renders the `font` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/font?s=sharp-duotone-solid font}
 * @preview ![font](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/font.svg)
 */
const Font: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M194 52.8L201.8 32l44.4 0L254 52.8 390.2 416l25.8 0 32 0 0 64-32 0-96 0-32 0 0-64 32 0 1.8 0-18-48-159.6 0-18 48 1.8 0 32 0 0 64-32 0-96 0L0 480l0-64 32 0 25.8 0L194 52.8zM168.2 304l111.6 0L224 155.1 168.2 304z" />
    </Icon>
);

export default Font;