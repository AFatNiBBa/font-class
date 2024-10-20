
import { Icon } from "../../index";

/**
 * A component that renders the `unlock` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/unlock?s=thin unlock}
 * @preview ![unlock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/unlock.svg)
 */
const Unlock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M112 128c0-61.9 50.1-112 112-112c51.5 0 94.9 34.8 108 82.1c1.2 4.3 5.6 6.8 9.8 5.6s6.8-5.6 5.6-9.8C332.5 39.8 282.9 0 224 0C153.3 0 96 57.3 96 128l0 64-32 0c-35.3 0-64 28.7-64 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-272 0 0-64zM96 208l16 0 272 0c26.5 0 48 21.5 48 48l0 192c0 26.5-21.5 48-48 48L64 496c-26.5 0-48-21.5-48-48l0-192c0-26.5 21.5-48 48-48l32 0z" />
    </Icon>
);

export default Unlock;