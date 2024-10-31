
import { Icon } from "../../index";

/**
 * A component that renders the `up-long` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-long?s=sharp-light up-long}
 * @preview ![up-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/up-long.svg)
 */
const UpLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M120 160l0 32 0 288 80 0 0-288 0-32 32 0 42.7 0L160 45.3 45.3 160 88 160l32 0zM32 192L0 192l0-32L137.4 22.6 160 0l22.6 22.6L320 160l0 32-32 0-24 0-32 0 0 32 0 256 0 32-32 0-80 0-32 0 0-32 0-256 0-32-32 0-24 0z" />
    </Icon>
);

export default UpLong;