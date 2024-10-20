
import { Icon } from "../../index";

/**
 * A component that renders the `info` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=regular info}
 * @preview ![info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/info.svg)
 */
const Info: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M56 72a40 40 0 1 1 80 0A40 40 0 1 1 56 72zM16 200c0-13.3 10.7-24 24-24l56 0c13.3 0 24 10.7 24 24l0 264 48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0 0-240-32 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Info;