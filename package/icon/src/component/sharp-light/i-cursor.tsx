
import { Icon } from "../../index";

/**
 * A component that renders the `i-cursor` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i-cursor?s=sharp-light i-cursor}
 * @preview ![i-cursor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/i-cursor.svg)
 */
const ICursor: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M128 66C106.2 26.6 64.2 0 16 0L0 0 0 32l16 0c53 0 96 43 96 96l0 112-48 0-16 0 0 32 16 0 48 0 0 112c0 53-43 96-96 96L0 480l0 32 16 0c48.2 0 90.2-26.6 112-66c21.8 39.4 63.8 66 112 66l16 0 0-32-16 0c-53 0-96-43-96-96l0-112 48 0 16 0 0-32-16 0-48 0 0-112c0-53 43-96 96-96l16 0 0-32L240 0c-48.2 0-90.2 26.6-112 66z" />
    </Icon>
);

export default ICursor;