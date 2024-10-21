
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-cross` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-cross?s=sharp-solid arrows-cross}
 * @preview ![arrows-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/arrows-cross.svg)
 */
const ArrowsCross: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 32l-32 0 0 64 32 0 50.7 0L25.4 409.4 2.7 432 48 477.3l22.6-22.6L384 141.3l0 50.7 0 32 64 0 0-32 0-128 0-32-32 0L288 32zM70.6 57.4L48 34.7 2.7 80l22.6 22.6L156.1 233.4l45.3-45.3L70.6 57.4zM338.7 416L288 416l-32 0 0 64 32 0 128 0 32 0 0-32 0-128 0-32-64 0 0 32 0 50.7-92.1-92.1-45.3 45.3L338.7 416z" />
    </Icon>
);

export default ArrowsCross;