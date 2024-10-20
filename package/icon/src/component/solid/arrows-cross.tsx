
import { Icon } from "../../index";

/**
 * A component that renders the `arrows-cross` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrows-cross?s=solid arrows-cross}
 * @preview ![arrows-cross](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/arrows-cross.svg)
 */
const ArrowsCross: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M288 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l50.7 0L9.4 425.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 141.3l0 50.7c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L288 32zM54.6 41.4c-12.5-12.5-32.8-12.5-45.3 0S-3.1 74.1 9.4 86.6L156.1 233.4l45.3-45.3L54.6 41.4zM338.7 416L288 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 50.7-92.1-92.1-45.3 45.3L338.7 416z" />
    </Icon>
);

export default ArrowsCross;