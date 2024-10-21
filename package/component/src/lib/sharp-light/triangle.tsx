
import { Icon } from "../../index";

/**
 * A component that renders the `triangle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle?s=sharp-light triangle}
 * @preview ![triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/triangle.svg)
 */
const Triangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 480l18.3-32L237.6 64.2 256 32l18.4 32.2L493.7 448 512 480l-36.9 0L36.9 480 0 480zM256 96.5L55.1 448l401.7 0L256 96.5z" />
    </Icon>
);

export default Triangle;