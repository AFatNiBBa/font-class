
import { Icon } from "../../index";

/**
 * A component that renders the `down-long` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-long?s=sharp-solid down-long}
 * @preview ![down-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/down-long.svg)
 */
const DownLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 512L0 352l0-32 96 0L96 0 224 0l0 320 96 0 0 32L160 512z" />
    </Icon>
);

export default DownLong;