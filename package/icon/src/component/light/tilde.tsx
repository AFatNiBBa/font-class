
import { Icon } from "../../index";

/**
 * A component that renders the `tilde` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tilde?s=light tilde}
 * @preview ![tilde](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/tilde.svg)
 */
const Tilde: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96.8 160C61.2 160 32 188.8 32 224l0 96c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-96c0-53.2 43.9-96 96.8-96c29.4 0 57.6 13.5 75.9 36.7l128 162.8c12.1 15.4 31 24.5 50.7 24.5c35.5 0 64.8-28.8 64.8-64l0-96c0-8.8 7.2-16 16-16s16 7.2 16 16l0 96c0 53.2-43.9 96-96.8 96c-29.4 0-57.6-13.5-75.9-36.7l-128-162.9c-12.1-15.4-31-24.5-50.7-24.5z" />
    </Icon>
);

export default Tilde;