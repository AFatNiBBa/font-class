
import { Icon } from "../../index";

/**
 * A component that renders the `unlock` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock?s=sharp-thin unlock}
 * @preview ![unlock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/unlock.svg)
 */
const Unlock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 128c0-61.9 50.1-112 112-112c51.5 0 94.9 34.8 108 82.1l15.4-4.3C332.5 39.8 282.9 0 224 0C153.3 0 96 57.3 96 128l0 64-80 0L0 192l0 16L0 496l0 16 16 0 416 0 16 0 0-16 0-288 0-16-16 0-320 0 0-64zM96 208l16 0 320 0 0 288L16 496l0-288 80 0z" />
    </Icon>
);

export default Unlock;