
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tilde` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tilde?s=duotone tilde}
 * @preview ![tilde](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tilde.svg)
 */
const Tilde: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M99.9 192C80.1 192 64 208.1 64 227.9L64 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-92.1C0 172.7 44.7 128 99.9 128c26.5 0 51.9 10.5 70.6 29.3L322.7 309.5c6.7 6.7 15.9 10.5 25.4 10.5c19.8 0 35.9-16.1 35.9-35.9l0-92.1c0-17.7 14.3-32 32-32s32 14.3 32 32l0 92.1c0 55.2-44.7 99.9-99.9 99.9c-26.5 0-51.9-10.5-70.6-29.3L125.3 202.5c-6.7-6.7-15.9-10.5-25.4-10.5z" />
    </Icon>
);

export default Tilde;