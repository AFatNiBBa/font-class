
import { Icon, generic } from "../../index";

/**
 * A component that renders the `shield-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shield-exclamation?s=duotone shield-exclamation}
 * @preview ![shield-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/shield-exclamation.svg)
 */
const ShieldExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 139.7c.5 99.5 41.3 281 213.6 363.5c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c0-26.4-16.4-47.9-38.3-57.2L269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8C32.4 92.1 16 113.6 16 139.7zM224 352c0-17.7 14.3-32 32-32c8.8 0 16.8 3.6 22.6 9.4c2.9 2.9 5.2 6.3 6.9 10.2c.8 1.9 1.4 3.9 1.9 6c.2 1.1 .4 2.2 .5 3.3c.1 .5 .1 1.1 .1 1.5c0 .5 0 1 0 1.2l0 .5 0 .5c0 .3 0 .8 0 1.4c0 .4-.1 .9-.1 1.5c-.1 1-.3 2.1-.5 3.2c-.4 2.1-1.1 4.1-1.9 6c-1.6 3.8-4 7.3-6.9 10.2c-5.8 5.8-13.8 9.4-22.6 9.4c-17.7 0-32-14.3-32-32zm8-200c0-13.3 10.7-24 24-24c6.6 0 12.6 2.7 17 7c2.2 2.2 3.9 4.8 5.1 7.6c.6 1.4 1.1 2.9 1.4 4.5c.2 .8 .3 1.6 .4 2.4s.1 1.6 .1 2.1l0 .4c0 37.3 0 74.7 0 112l0 .4c0 .5 0 1.3-.1 2.1c-.1 .8-.2 1.6-.4 2.4c-.3 1.5-.8 3.1-1.4 4.5c-1.2 2.9-3 5.4-5.1 7.6c-4.3 4.3-10.3 7-17 7c-13.3 0-24-10.7-24-24c0-37.3 0-74.7 0-112z" />
        <path d="M280 152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zM256 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default ShieldExclamation;