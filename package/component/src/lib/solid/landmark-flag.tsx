
import { Icon } from "../../index";

/**
 * A component that renders the `landmark-flag` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/landmark-flag?s=solid landmark-flag}
 * @preview ![landmark-flag](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/landmark-flag.svg)
 */
const LandmarkFlag: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 0l80 0c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16l-80 0 0 32 192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L48 192c-17.7 0-32-14.3-32-32s14.3-32 32-32l192 0 0-112c0-8.8 7.2-16 16-16l16 0zM64 224l64 0 0 192 40 0 0-192 64 0 0 192 48 0 0-192 64 0 0 192 40 0 0-192 64 0 0 196.3c.6 .3 1.2 .7 1.8 1.1l48 32c11.7 7.8 17 22.4 12.9 35.9S494.1 512 480 512L32 512c-14.1 0-26.5-9.2-30.6-22.7s1.1-28.1 12.9-35.9l48-32c.6-.4 1.2-.7 1.8-1.1L64 224z" />
    </Icon>
);

export default LandmarkFlag;