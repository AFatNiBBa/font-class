
import { Icon } from "../../index";

/**
 * A component that renders the `layer-minus` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/layer-minus?s=sharp-solid layer-minus}
 * @preview ![layer-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/layer-minus.svg)
 */
const LayerMinus: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M384 56l0 48 24 0 112 0 24 0 0-48-24 0L408 56l-24 0zM0 256L288 384 576 256 288 128 0 256zM288 419L104.6 337.5 0 384 288 512 576 384 471.4 337.5 288 419z" />
    </Icon>
);

export default LayerMinus;