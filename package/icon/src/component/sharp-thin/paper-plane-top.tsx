
import { Icon } from "../../index";

/**
 * A component that renders the `paper-plane-top` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane-top?s=sharp-thin paper-plane-top}
 * @preview ![paper-plane-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/paper-plane-top.svg)
 */
const PaperPlaneTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M110 248L24.3 48l36 0 400 200L110 248zm350.2 16L60.2 464l-36 0L110 264l350.2 0zM0 32L6.9 48 96 256 6.9 464 0 480l17.4 0L64 480 494.1 264.9 512 256l-17.9-8.9L64 32 17.4 32 0 32z" />
    </Icon>
);

export default PaperPlaneTop;