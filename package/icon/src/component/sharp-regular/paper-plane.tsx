
import { Icon } from "../../index";

/**
 * A component that renders the `paper-plane` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/paper-plane?s=sharp-regular paper-plane}
 * @preview ![paper-plane](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/paper-plane.svg)
 */
const PaperPlane: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 288l55.6 23.8L192 370.3l0 5.7 0 64 0 56 48 16 73.3-89.7 88.9 38.1L448 480l6.6-49.4L504.1 59.5 512 0 459.6 29.4 52.7 258.4 0 288zM408.8 411L268.4 350.8 444.9 140.2 408.8 411zM222.3 331.1L108.3 282.2 401.5 117.2 222.3 331.1z" />
    </Icon>
);

export default PaperPlane;