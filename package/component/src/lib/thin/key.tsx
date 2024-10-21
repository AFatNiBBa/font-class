
import { Icon } from "../../index";

/**
 * A component that renders the `key` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key?s=thin key}
 * @preview ![key](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/key.svg)
 */
const Key: typeof Icon = x => (
    <Icon {...x}>
        <path d="M287.2 328.4c15.4 4.9 31.8 7.6 48.8 7.6c88.4 0 160-71.6 160-160s-71.6-160-160-160s-160 71.6-160 160c0 17.1 2.7 33.5 7.6 48.8c1.8 5.7 .3 12-3.9 16.2L18.3 402.3c-1.5 1.5-2.3 3.5-2.3 5.7l0 80c0 4.4 3.6 8 8 8l80 0c4.4 0 8-3.6 8-8l0-40c0-8.8 7.2-16 16-16l40 0c4.4 0 8-3.6 8-8l0-40c0-8.8 7.2-16 16-16l40 0c2.1 0 4.2-.8 5.7-2.3L271 332.3c4.2-4.2 10.5-5.8 16.2-3.9zM336 352c-18.7 0-36.8-2.9-53.7-8.3L249 377c-4.5 4.5-10.6 7-17 7l-24 0-16 0 0 16 0 24c0 13.3-10.7 24-24 24l-24 0-16 0 0 16 0 24c0 13.3-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24l0-80c0-6.4 2.5-12.5 7-17L168.3 229.7c-5.4-16.9-8.3-35-8.3-53.7C160 78.8 238.8 0 336 0s176 78.8 176 176s-78.8 176-176 176zm32-248a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm24 40a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z" />
    </Icon>
);

export default Key;