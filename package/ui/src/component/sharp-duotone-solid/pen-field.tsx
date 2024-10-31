
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-field` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-field?s=sharp-duotone-solid pen-field}
 * @preview ![pen-field](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pen-field.svg)
 */
const PenField: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128l32 0 224 0 32 0 0 64-32 0L64 192l0 256 448 0 0-128 0-32 64 0 0 32 0 160 0 32-32 0L32 512 0 512l0-32L0 160l0-32z" />
        <path d="M288 352l16-112L468.7 75.3l96 96L400 336 288 352zM587.3 148.7l-96-96L544 0l96 96-52.7 52.7zM96 288l64 0 0 64-64 0 0-64zm160 0l0 64-64 0 0-64 64 0z" />
    </Icon>
);

export default PenField;