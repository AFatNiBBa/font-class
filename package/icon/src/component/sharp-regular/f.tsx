
import { Icon } from "../../index";

/**
 * A component that renders the `f` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/f?s=sharp-regular f}
 * @preview ![f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/f.svg)
 */
const F: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M24 32L0 32 0 56 0 248 0 456l0 24 48 0 0-24 0-184 184 0 24 0 0-48-24 0L48 224 48 80l248 0 24 0 0-48-24 0L24 32z" />
    </Icon>
);

export default F;