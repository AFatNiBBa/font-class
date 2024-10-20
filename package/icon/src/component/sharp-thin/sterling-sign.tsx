
import { Icon } from "../../index";

/**
 * A component that renders the `sterling-sign` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sterling-sign?s=sharp-thin sterling-sign}
 * @preview ![sterling-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/sterling-sign.svg)
 */
const SterlingSign: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M80 142c0-51.9 42.1-94 94-94c11 0 21.8 1.9 32.1 5.7l71.1 25.9 7.5 2.7 5.5-15-7.5-2.7L211.6 38.6C199.6 34.2 186.8 32 174 32C113.3 32 64 81.3 64 142l0 114L0 256l0 16 64 0 0 54.2L.8 460.6 0 462.2 0 464l0 8 0 8 8 0 304 0 8 0 0-16-8 0L16.8 464 79.2 331.4l.8-1.6 0-1.8 0-56 176 0 0-16L80 256l0-114z" />
    </Icon>
);

export default SterlingSign;