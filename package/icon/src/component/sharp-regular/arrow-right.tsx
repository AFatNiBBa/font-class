
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-right` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-right?s=sharp-regular arrow-right}
 * @preview ![arrow-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/arrow-right.svg)
 */
const ArrowRight: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.9 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z" />
    </Icon>
);

export default ArrowRight;