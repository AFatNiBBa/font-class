
import { Icon } from "../../index";

/**
 * A component that renders the `paper-plane` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane?s=sharp-solid paper-plane}
 * @preview ![paper-plane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/paper-plane.svg)
 */
const PaperPlane: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 288L512 0 448 480 271.8 404.5 208 512l-48-16 0-80 0-32L384 160 133 345 0 288z" />
    </Icon>
);

export default PaperPlane;