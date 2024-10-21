
import { Icon } from "../../index";

/**
 * A component that renders the `i-cursor` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i-cursor?s=sharp-thin i-cursor}
 * @preview ![i-cursor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/i-cursor.svg)
 */
const ICursor: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M128 76.8C110.7 31.9 67.1 0 16 0L8 0 0 0 0 16l8 0 8 0c57.4 0 104 46.6 104 104l0 128-56 0-8 0 0 16 8 0 56 0 0 128c0 57.4-46.6 104-104 104l-8 0-8 0 0 16 8 0 8 0c51.1 0 94.7-31.9 112-76.8c17.3 44.9 60.9 76.8 112 76.8l8 0 8 0 0-16-8 0-8 0c-57.4 0-104-46.6-104-104l0-128 56 0 8 0 0-16-8 0-56 0 0-128c0-57.4 46.6-104 104-104l8 0 8 0 0-16-8 0-8 0c-51.1 0-94.7 31.9-112 76.8z" />
    </Icon>
);

export default ICursor;