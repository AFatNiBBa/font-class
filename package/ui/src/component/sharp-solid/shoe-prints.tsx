
import { Icon } from "../../index";

/**
 * A component that renders the `shoe-prints` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shoe-prints?s=sharp-solid shoe-prints}
 * @preview ![shoe-prints](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/shoe-prints.svg)
 */
const ShoePrints: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 160l-64 0 0-128L448 0 640 64l0 112L448 224 320 160zM128 32l96 0 0 128-96 0 0-128zm64 320l128-64 192 48 0 112L320 512 128 480l0-128 64 0zM0 480L0 352l96 0 0 128L0 480z" />
    </Icon>
);

export default ShoePrints;