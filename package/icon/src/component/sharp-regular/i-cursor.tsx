
import { Icon } from "../../index";

/**
 * A component that renders the `i-cursor` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i-cursor?s=sharp-regular i-cursor}
 * @preview ![i-cursor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/i-cursor.svg)
 */
const ICursor: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M128 48C106.1 18.9 71.3 0 32 0L16 0l0 48 16 0c39.8 0 72 32.2 72 72l0 112-40 0-24 0 0 48 24 0 40 0 0 112c0 39.8-32.2 72-72 72l-16 0 0 48 16 0c39.3 0 74.1-18.8 96-48c21.9 29.1 56.7 48 96 48l16 0 0-48-16 0c-39.8 0-72-32.2-72-72l0-112 40 0 24 0 0-48-24 0-40 0 0-112c0-39.8 32.2-72 72-72l16 0 0-48L224 0c-39.3 0-74.1 18.8-96 48z" />
    </Icon>
);

export default ICursor;