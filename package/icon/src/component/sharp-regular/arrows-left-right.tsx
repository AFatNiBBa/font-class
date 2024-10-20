
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-left-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-left-right?s=sharp-regular arrows-left-right}
 * @preview ![arrows-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrows-left-right.svg)
 */
const ArrowsLeftRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M493.8 273l17-17-17-17-96-96-17-17L346.9 160l17 17 55 55L93.1 232l55-55 17-17-33.9-33.9-17 17-96 96-17 17 17 17 96 96 17 17L165.1 352l-17-17-55-55 325.7 0-55 55-17 17 33.9 33.9 17-17 96-96z" />
    </Icon>
);

export default ArrowsLeftRight;