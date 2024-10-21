
import { Icon, generic } from "../../index";

/**
 * A component that renders the `layer-plus` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/layer-plus?s=sharp-duotone-solid layer-plus}
 * @preview ![layer-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/layer-plus.svg)
 */
const LayerPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256L288 384 576 256 288 128 0 256zM0 384L288 512 576 384 471.4 337.5 288 419 104.6 337.5 0 384z" />
        <path d="M488 24l0-24L440 0l0 24 0 32-32 0-24 0 0 48 24 0 32 0 0 32 0 24 48 0 0-24 0-32 32 0 24 0 0-48-24 0-32 0 0-32z" />
    </Icon>
);

export default LayerPlus;