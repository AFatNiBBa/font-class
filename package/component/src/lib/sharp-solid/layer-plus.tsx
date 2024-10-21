
import { Icon } from "../../index";

/**
 * A component that renders the `layer-plus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/layer-plus?s=sharp-solid layer-plus}
 * @preview ![layer-plus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/layer-plus.svg)
 */
const LayerPlus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M488 24l0-24L440 0l0 24 0 32-32 0-24 0 0 48 24 0 32 0 0 32 0 24 48 0 0-24 0-32 32 0 24 0 0-48-24 0-32 0 0-32zM0 256L288 384 576 256 288 128 0 256zM288 419L104.6 337.5 0 384 288 512 576 384 471.4 337.5 288 419z" />
    </Icon>
);

export default LayerPlus;