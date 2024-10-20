
import { Icon, generic } from "../../index";

/**
 * A component that renders the `truck-field` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/truck-field?s=sharp-duotone-solid truck-field}
 * @preview ![truck-field](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/truck-field.svg)
 */
const TruckField: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 400a80 80 0 1 0 160 0A80 80 0 1 0 96 400zm288 0a80 80 0 1 0 160 0 80 80 0 1 0 -160 0z" />
        <path d="M32 32l352 0 0 32 64 0 20.8 0 8.4 19 62.7 141 68.1 0 0 96 32 0 0 64-32 0-33.1 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96l-66.3 0c-7.8-54.3-54.4-96-110.9-96s-103.1 41.7-110.9 96L32 384 0 384l0-64 32 0 0-32L0 288 0 128l32 0 0-96zM384 224l85.9 0-42.7-96L384 128l0 96z" />
    </Icon>
);

export default TruckField;