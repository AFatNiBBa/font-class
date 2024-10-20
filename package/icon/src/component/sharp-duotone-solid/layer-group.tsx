
import { Icon, generic } from "../../index";

/**
 * A component that renders the `layer-group` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/layer-group?s=sharp-duotone-solid layer-group}
 * @preview ![layer-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/layer-group.svg)
 */
const LayerGroup: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 256L288 384 576 256 471.4 209.5 288 291 104.6 209.5 0 256z" />
        <path d="M288 256L0 128 288 0 576 128 288 256zm0 163l183.4-81.5L576 384 288 512 0 384l104.6-46.5L288 419z" />
    </Icon>
);

export default LayerGroup;