
import { Icon } from "../../index";

/**
 * A component that renders the `triangle` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle?s=sharp-thin triangle}
 * @preview ![triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/triangle.svg)
 */
const Triangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 480l9.1-16L246.8 48.1 256 32l9.2 16.1L502.9 464l9.1 16-18.4 0L18.4 480 0 480zM256 64.2L27.6 464l456.9 0L256 64.2z" />
    </Icon>
);

export default Triangle;