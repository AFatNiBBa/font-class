
import { Icon } from "../../index";

/**
 * A component that renders the `paper-plane-top` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane-top?s=sharp-light paper-plane-top}
 * @preview ![paper-plane-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/paper-plane-top.svg)
 */
const PaperPlaneTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M124 272l284.5 0L56.4 448l-7.9 0L124 272zm284.5-32L124 240 48.5 64l7.9 0 352 176zM0 32L13.7 64 96 256 13.7 448 0 480l34.8 0L64 480 476.2 273.9 512 256l-35.8-17.9L64 32 34.8 32 0 32z" />
    </Icon>
);

export default PaperPlaneTop;