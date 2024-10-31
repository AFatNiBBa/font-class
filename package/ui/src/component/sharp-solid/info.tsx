
import { Icon } from "../../index";

/**
 * A component that renders the `info` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=sharp-solid info}
 * @preview ![info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/info.svg)
 */
const Info: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M128 32l0 80-80 0 0-80 80 0zM0 192l32 0 64 0 32 0 0 32 0 224 32 0 32 0 0 64-32 0-32 0-64 0-32 0L0 512l0-64 32 0 32 0 0-192-32 0L0 256l0-64z" />
    </Icon>
);

export default Info;