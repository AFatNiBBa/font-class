
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-check?s=duotone shield-check}
 * @preview ![shield-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shield-check.svg)
 */
const ShieldCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 139.7c.5 99.5 41.3 281 213.6 363.5c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c0-26.4-16.4-47.9-38.3-57.2L269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8C32.4 92.1 16 113.6 16 139.7zM136 256c0-6.1 2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l47 47c37-37 74-74 111-111c4.7-4.7 10.8-7 17-7s12.3 2.3 17 7c2.3 2.3 4.1 5 5.3 7.9c.6 1.4 1 2.9 1.3 4.4c.2 1.1 .3 2.2 .3 2.2c.1 1.2 .1 1.2 .1 2.5c-.1 1.5-.1 1.9-.1 2.3c-.1 .7-.2 1.5-.3 2.2c-.3 1.5-.7 3-1.3 4.4c-1.2 2.9-2.9 5.6-5.3 7.9c-42.7 42.7-85.3 85.3-128 128c-4.7 4.7-10.8 7-17 7s-12.3-2.3-17-7c-21.3-21.3-42.7-42.7-64-64c-4.7-4.7-7-10.8-7-17z" />
        <path d="M369 175c9.4 9.4 9.4 24.6 0 33.9L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0z" />
    </Icon>
);

export default ShieldCheck;