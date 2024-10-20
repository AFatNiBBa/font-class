
import { Icon } from "../../index";

/**
 * A component that renders the `info` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=sharp-regular info}
 * @preview ![info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/info.svg)
 */
const Info: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M128 32l0 80-80 0 0-80 80 0zM16 176l24 0 56 0 24 0 0 24 0 264 48 0 24 0 0 48-24 0L24 512 0 512l0-48 24 0 48 0 0-240-32 0-24 0 0-48z" />
    </Icon>
);

export default Info;