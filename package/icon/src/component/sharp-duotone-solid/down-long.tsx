
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-long` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-long?s=sharp-duotone-solid down-long}
 * @preview ![down-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/down-long.svg)
 */
const DownLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M96 0l0 320 128 0c0-42.7 0-85.3 0-128c0-64 0-128 0-192L96 0z" />
        <path d="M0 352L160 512 320 352l0-32s0 0 0 0l-96 0L96 320 0 320l0 32z" />
    </Icon>
);

export default DownLong;