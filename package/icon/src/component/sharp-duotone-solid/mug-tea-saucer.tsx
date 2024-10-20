
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mug-tea-saucer` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-tea-saucer?s=sharp-duotone-solid mug-tea-saucer}
 * @preview ![mug-tea-saucer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mug-tea-saucer.svg)
 */
const MugTeaSaucer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 416l0 64 32 0 512 0 32 0 0-64-32 0L32 416 0 416zM160 144l0 112 128 0 0-112L240 96l0-64-32 0 0 64-48 48z" />
        <path d="M208 32l0 64-48 48 0 112 128 0 0-112L240 96l0-64 208 0 32 0 32 0c70.7 0 128 57.3 128 128s-57.3 128-128 128l-32 0 0 96L96 384 96 32l112 0zM480 224l32 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-32 0 0 128z" />
    </Icon>
);

export default MugTeaSaucer;