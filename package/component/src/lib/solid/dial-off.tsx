
import { Icon } from "../../index";

/**
 * A component that renders the `dial-off` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-off?s=solid dial-off}
 * @preview ![dial-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/dial-off.svg)
 */
const DialOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM448 288c0 80.2-59 146.6-136 158.2L312 288c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 158.2c-77-11.6-136-78-136-158.2c0-88.4 71.6-160 160-160s160 71.6 160 160zm64 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM32 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 96a32 32 0 1 1 64 0A32 32 0 1 1 64 96zM480 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM64 480a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm416-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default DialOff;