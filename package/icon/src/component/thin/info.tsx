
import { Icon } from "../../index";

/**
 * A component that renders the `info` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=thin info}
 * @preview ![info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/info.svg)
 */
const Info: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm0-64a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM32 184c0-4.4 3.6-8 8-8l56 0c4.4 0 8 3.6 8 8l0 280 80 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L8 480c-4.4 0-8-3.6-8-8s3.6-8 8-8l80 0 0-272-48 0c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default Info;