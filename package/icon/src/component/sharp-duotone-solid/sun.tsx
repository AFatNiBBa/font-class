
import { Icon, generic } from "../../index";

/**
 * A component that renders the `sun` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun?s=sharp-duotone-solid sun}
 * @preview ![sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/sun.svg)
 */
const Sun: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 150L73.1 256 0 362l126.7 23.3L150 512l106-73.1L362 512l23.3-126.7L512 362 438.9 256 512 150 385.3 126.7 362 0 256 73.1 150 0 126.7 126.7 0 150zM384 256a128 128 0 1 1 -256 0 128 128 0 1 1 256 0z" />
        <path d="M256 160a96 96 0 1 0 0 192 96 96 0 1 0 0-192z" />
    </Icon>
);

export default Sun;