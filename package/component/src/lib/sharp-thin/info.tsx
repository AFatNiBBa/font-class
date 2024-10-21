
import { Icon } from "../../index";

/**
 * A component that renders the `info` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/info?s=sharp-thin info}
 * @preview ![info](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/info.svg)
 */
const Info: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M96 64L64 64l0 32 32 0 0-32zM64 48l32 0 16 0 0 16 0 32 0 16-16 0-32 0-16 0 0-16 0-32 0-16 16 0zM32 176l8 0 56 0 8 0 0 8 0 280 80 0 8 0 0 16-8 0L8 480l-8 0 0-16 8 0 80 0 0-272-48 0-8 0 0-16z" />
    </Icon>
);

export default Info;