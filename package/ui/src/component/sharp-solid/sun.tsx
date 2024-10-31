
import { Icon } from "../../index";

/**
 * A component that renders the `sun` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sun?s=sharp-solid sun}
 * @preview ![sun](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sun.svg)
 */
const Sun: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 73.1L150 0 126.7 126.7 0 150 73.1 256 0 362l126.7 23.3L150 512l106-73.1L362 512l23.3-126.7L512 362 438.9 256 512 150 385.3 126.7 362 0 256 73.1zM352 256a96 96 0 1 0 -192 0 96 96 0 1 0 192 0zm-224 0a128 128 0 1 1 256 0 128 128 0 1 1 -256 0z" />
    </Icon>
);

export default Sun;