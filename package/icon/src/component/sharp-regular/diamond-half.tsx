
import { Icon } from "../../index";

/**
 * A component that renders the `diamond-half` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/diamond-half?s=sharp-regular diamond-half}
 * @preview ![diamond-half](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/diamond-half.svg)
 */
const DiamondHalf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M222.1 33.9L256 0l0 48 0 19.9 0 376.2 0 19.9 0 48-33.9-33.9L208 464 33.9 289.9 0 256l33.9-33.9L208 48l14.1-14.1zM208 115.9L67.9 256 208 396.1l0-280.2z" />
    </Icon>
);

export default DiamondHalf;