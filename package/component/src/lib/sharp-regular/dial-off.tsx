
import { Icon } from "../../index";

/**
 * A component that renders the `dial-off` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dial-off?s=sharp-regular dial-off}
 * @preview ![dial-off](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dial-off.svg)
 */
const DialOff: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M320 0L256 0l0 64 64 0 0-64zM128 64L64 64l0 64 64 0 0-64zm384 0l-64 0 0 64 64 0 0-64zm0 192l0 64 64 0 0-64-64 0zm0 192l-64 0 0 64 64 0 0-64zM64 448l0 64 64 0 0-64-64 0zM0 256l0 64 64 0 0-64L0 256zm264 32l0 109.4c-50.3-11-88-55.8-88-109.4c0-61.9 50.1-112 112-112s112 50.1 112 112c0 53.6-37.7 98.4-88 109.4L312 288l0-24-48 0 0 24zm24 160a160 160 0 1 0 0-320 160 160 0 1 0 0 320z" />
    </Icon>
);

export default DialOff;