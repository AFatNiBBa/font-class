
import { Icon } from "../../index";

/**
 * A component that renders the `7` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/7?s=thin 7}
 * @preview ![7](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/7.svg)
 */
const $7: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M0 40c0-4.4 3.6-8 8-8l304 0c2.9 0 5.6 1.6 7 4.1s1.3 5.7-.2 8.1l-272 432c-2.4 3.7-7.3 4.9-11 2.5s-4.9-7.3-2.5-11L297.5 48 8 48c-4.4 0-8-3.6-8-8z" />
    </Icon>
);

export default $7;