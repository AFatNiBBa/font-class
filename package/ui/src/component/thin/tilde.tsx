
import { Icon } from "../../index";

/**
 * A component that renders the `tilde` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tilde?s=thin tilde}
 * @preview ![tilde](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/tilde.svg)
 */
const Tilde: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M91.5 160C49.8 160 16 193.8 16 235.5L16 320c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-84.5C0 184.9 40.9 144 91.5 144c25.5 0 49.9 10.7 67.2 29.4L301.1 327.7c14.3 15.5 34.4 24.3 55.4 24.3c41.7 0 75.5-33.8 75.5-75.5l0-84.5c0-4.4 3.6-8 8-8s8 3.6 8 8l0 84.5c0 50.5-40.9 91.5-91.5 91.5c-25.5 0-49.9-10.7-67.2-29.4L146.9 184.3C132.6 168.8 112.5 160 91.5 160z" />
    </Icon>
);

export default Tilde;