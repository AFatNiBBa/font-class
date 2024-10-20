
import { Icon, generic } from "../../index";

/**
 * A component that renders the `paper-plane` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane?s=sharp-duotone-solid paper-plane}
 * @preview ![paper-plane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/paper-plane.svg)
 */
const PaperPlane: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 288l160 64L384 160 225.9 381.3l61.6 27.4L448 480 512 0 0 288z" />
        <path d="M384 160L160 352l0 32 0 32 0 80 48 16 79.5-103.3-61.6-27.4L384 160z" />
    </Icon>
);

export default PaperPlane;