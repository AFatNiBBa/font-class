
import { Icon } from "../../index";

/**
 * A component that renders the `triangle` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/triangle?s=sharp-regular triangle}
 * @preview ![triangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/triangle.svg)
 */
const Triangle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 480l27.4-48L228.4 80.4 256 32l27.6 48.4L484.6 432 512 480l-55.3 0L55.3 480 0 480zM256 128.7L82.7 432l346.6 0L256 128.7z" />
    </Icon>
);

export default Triangle;