
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shish-kebab` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shish-kebab?s=sharp-duotone-solid shish-kebab}
 * @preview ![shish-kebab](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shish-kebab.svg)
 */
const ShishKebab: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M1.4 465.4l45.3 45.3 80-80c-15.1-15.1-30.2-30.2-45.3-45.3l-80 80zm168-168l45.3 45.3 24-24c-15.1-15.1-30.2-30.2-45.3-45.3l-24 24zm112-112l45.3 45.3 66.7-66.7L416 141.3l-22.6-22.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c10.4 10.4 12.2 26.4 5.1 38.6l55.4 32c8.6-14.8 12.8-31.4 12.8-48c0-24.6-9.4-49.1-28.1-67.9c-37.5-37.5-98.3-37.5-135.8 0c-29.6 29.6-35.8 73.6-18.8 109.3l-48 48z" />
        <path d="M216 120l-88 88L304 384l88-88L216 120zM104 232L16 320 192 496l88-88L104 232z" />
    </Icon>
);

export default ShishKebab;