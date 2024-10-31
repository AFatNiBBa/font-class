
import { Icon } from "../../index";

/**
 * A component that renders the `paper-plane-top` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane-top?s=sharp-solid paper-plane-top}
 * @preview ![paper-plane-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/paper-plane-top.svg)
 */
const PaperPlaneTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M83.4 226.6L304 256 83.4 285.4 0 480l64 0L512 256 64 32 0 32 83.4 226.6z" />
    </Icon>
);

export default PaperPlaneTop;