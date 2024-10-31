
import { Icon, generic } from "../../index";

/**
 * A component that renders the `right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right?s=sharp-duotone-solid right}
 * @preview ![right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/right.svg)
 */
const Right: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 192L0 320l224 0 0-128L0 192z" />
        <path d="M224 448l32 0L448 256 256 64l-32 0 0 128 0 128 0 128z" />
    </Icon>
);

export default Right;