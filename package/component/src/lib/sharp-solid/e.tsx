
import { Icon } from "../../index";

/**
 * A component that renders the `e` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/e?s=sharp-solid e}
 * @preview ![e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/e.svg)
 */
const E: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M32 32L0 32 0 64 0 224l0 32 0 32L0 448l0 32 32 0 256 0 32 0 0-64-32 0L64 416l0-128 160 0 32 0 0-64-32 0L64 224 64 96l224 0 32 0 0-64-32 0L32 32z" />
    </Icon>
);

export default E;