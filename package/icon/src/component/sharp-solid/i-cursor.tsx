
import { Icon } from "../../index";

/**
 * A component that renders the `i-cursor` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i-cursor?s=sharp-solid i-cursor}
 * @preview ![i-cursor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/i-cursor.svg)
 */
const ICursor: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M32 0c38.2 0 72.5 16.8 96 43.3C151.5 16.8 185.8 0 224 0l32 0 0 64-32 0c-35.3 0-64 28.7-64 64l0 96 32 0 32 0 0 64-32 0-32 0 0 96c0 35.3 28.7 64 64 64l32 0 0 64-32 0c-38.2 0-72.5-16.8-96-43.3C104.5 495.2 70.2 512 32 512L0 512l0-64 32 0c35.3 0 64-28.7 64-64l0-96-32 0-32 0 0-64 32 0 32 0 0-96c0-35.3-28.7-64-64-64L0 64 0 0 32 0z" />
    </Icon>
);

export default ICursor;