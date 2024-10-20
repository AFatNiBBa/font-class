
import { Icon } from "../../index";

/**
 * A component that renders the `e` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/e?s=sharp-regular e}
 * @preview ![e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/e.svg)
 */
const E: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M24 32L0 32 0 56 0 256 0 456l0 24 24 0 272 0 24 0 0-48-24 0L48 432l0-160 184 0 24 0 0-48-24 0L48 224 48 80l248 0 24 0 0-48-24 0L24 32z" />
    </Icon>
);

export default E;