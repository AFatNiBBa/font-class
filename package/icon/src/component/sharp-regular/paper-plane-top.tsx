
import { Icon } from "../../index";

/**
 * A component that renders the `paper-plane-top` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane-top?s=sharp-regular paper-plane-top}
 * @preview ![paper-plane-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/paper-plane-top.svg)
 */
const PaperPlaneTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M137.9 280l218.7 0L78.3 419.2 137.9 280zm218.7-48l-218.7 0L78.3 92.8 356.7 232zm101.7-2.8L64 32 52.2 32 0 32 20.6 80 96 256 20.6 432 0 480l52.2 0L64 480 458.3 282.8 512 256l-53.7-26.8z" />
    </Icon>
);

export default PaperPlaneTop;