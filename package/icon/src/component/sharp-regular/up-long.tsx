
import { Icon } from "../../index";

/**
 * A component that renders the `up-long` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-long?s=sharp-regular up-long}
 * @preview ![up-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/up-long.svg)
 */
const UpLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M128 160l0 48 0 256 64 0 0-256 0-48 48 0 12.1 0L160 67.9 67.9 160 80 160l48 0zM126.1 33.9L160 0l33.9 33.9L320 160l0 48-32 0-16 0-32 0 0 48 0 208 0 48-48 0-64 0-48 0 0-48 0-208 0-48-32 0-16 0L0 208l0-48L126.1 33.9z" />
    </Icon>
);

export default UpLong;