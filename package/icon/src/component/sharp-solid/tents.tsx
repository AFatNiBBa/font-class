
import { Icon } from "../../index";

/**
 * A component that renders the `tents` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tents?s=sharp-solid tents}
 * @preview ![tents](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/tents.svg)
 */
const Tents: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M640 352l-182.5 0-9.8-68.5-2-14.2-11.9-7.9-192-128-12.9-8.6L416 0 608 128l32 224zM0 512L32 288 224 160 416 288l32 224-128 0L224 352l0 160L0 512z" />
    </Icon>
);

export default Tents;