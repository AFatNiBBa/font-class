
import { Icon } from "../../index";

/**
 * A component that renders the `cross` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cross?s=sharp-regular cross}
 * @preview ![cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/cross.svg)
 */
const Cross: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M136 0L112 0l0 24 0 88-88 0L0 112l0 24L0 248l0 24 24 0 88 0 0 216 0 24 24 0 112 0 24 0 0-24 0-216 88 0 24 0 0-24 0-112 0-24-24 0-88 0 0-88 0-24L248 0 136 0zm24 136l0-88 64 0 0 88 0 24 24 0 88 0 0 64-88 0-24 0 0 24 0 216-64 0 0-216 0-24-24 0-88 0 0-64 88 0 24 0 0-24z" />
    </Icon>
);

export default Cross;