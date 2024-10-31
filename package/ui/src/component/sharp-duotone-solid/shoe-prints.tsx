
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shoe-prints` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shoe-prints?s=sharp-duotone-solid shoe-prints}
 * @preview ![shoe-prints](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/shoe-prints.svg)
 */
const ShoePrints: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352l96 0 0 128L0 480 0 352zm128 0l64 0 128-64 192 48 0 112L320 512 128 480l0-128z" />
        <path d="M256 160l64 0 128 64 192-48 0-112L448 0 256 32l0 128zM224 32l-96 0 0 128 96 0 0-128z" />
    </Icon>
);

export default ShoePrints;