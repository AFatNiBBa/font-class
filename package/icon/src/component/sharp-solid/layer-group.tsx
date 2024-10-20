
import { Icon } from "../../index";

/**
 * A component that renders the `layer-group` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/layer-group?s=sharp-solid layer-group}
 * @preview ![layer-group](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/layer-group.svg)
 */
const LayerGroup: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M0 128L288 256 576 128 288 0 0 128zm104.6 81.5L0 256 288 384 576 256 471.4 209.5 288 291 104.6 209.5zM288 419L104.6 337.5 0 384 288 512 576 384 471.4 337.5 288 419z" />
    </Icon>
);

export default LayerGroup;