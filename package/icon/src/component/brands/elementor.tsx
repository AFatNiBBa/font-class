
import { Icon } from "../../index";

/**
 * A component that renders the `elementor` icon from the `brands` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/elementor?s=brands elementor}
 * @preview ![elementor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/brands/elementor.svg)
 */
const Elementor: typeof Icon = x => (
    <Icon {...x}>
        <path d="M.361 256C.361 397 114 511 255 511C397 511 511 397 511 256C511 116 397 2.05 255 2.05C114 2.05 .361 116 .361 256zM192 150V363H149V150H192zM234 150H362V193H234V150zM362 235V278H234V235H362zM234 320H362V363H234V320z" />
    </Icon>
);

export default Elementor;