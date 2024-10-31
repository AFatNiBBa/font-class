
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paper-plane-top` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane-top?s=sharp-duotone-solid paper-plane-top}
 * @preview ![paper-plane-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/paper-plane-top.svg)
 */
const PaperPlaneTop: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32C27.8 96.9 55.6 161.7 83.4 226.6c73.6 9.8 147.1 19.6 220.6 29.4c-73.5 9.8-147.1 19.6-220.6 29.4C55.6 350.3 27.8 415.1 0 480l64 0L512 256 64 32 0 32z" />
        <path d="M83.4 226.6L96 256 83.4 285.4 304 256 83.4 226.6z" />
    </Icon>
);

export default PaperPlaneTop;