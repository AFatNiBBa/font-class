
import { Icon } from "../../index";

/**
 * A component that renders the `share` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share?s=sharp-light share}
 * @preview ![share](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/share.svg)
 */
const Share: typeof Icon = x => (
    <Icon {...x}>
        <path d="M71.8 446.6C101 469.9 128 480 128 480s-20.2-20.2-28.5-52.6C97.3 419 96 409.9 96 400c0-61.9 50.1-112 112-112l48 0 32 0 0 32 0 32 0 32 32 0L488.3 229.7 512 208l-23.7-21.7L320 32l-32 0 0 32 0 32 0 32-32 0-80 0C78.8 128 0 206.8 0 304c0 69.2 37.5 115.1 71.8 142.6zm-7.7-52.3C45.9 371.8 32 342.2 32 304c0-79.5 64.5-144 144-144l112 0 32 0 0-32 0-52.6L464.6 208 320 340.6l0-52.6 0-32-32 0-80 0c-77.6 0-140.9 61.4-143.9 138.3z" />
    </Icon>
);

export default Share;