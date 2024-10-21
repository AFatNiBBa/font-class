
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tricycle-adult` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tricycle-adult?s=sharp-duotone-solid tricycle-adult}
 * @preview ![tricycle-adult](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tricycle-adult.svg)
 */
const TricycleAdult: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352c0-28.4 12.3-53.9 31.9-71.4C48.9 265.3 71.3 256 96 256c39.9 0 74.1 24.3 88.6 58.9c4.8 11.4 7.4 23.9 7.4 37.1c0 16.9-4.3 32.7-12 46.5c3.8 1 7.8 1.5 12 1.5c26.5 0 48-21.5 48-48c0-9.7-2.9-18.8-7.9-26.4c18.3 4.1 36.6 8.2 54.9 12.3c.7 4.6 1 9.3 1 14c0 53-43 96-96 96c-17.5 0-33.9-4.7-48-12.8c-14.1 8.2-30.5 12.8-48 12.8c-53 0-96-43-96-96zM23.1 108.7L83.3 87.1l10.8 30.1 18 50.1 86.5 18.2 31.3 6.6-13.2 62.6-31.3-6.6-104-21.9-17.5-3.7-6-16.8-24-66.9L23.1 108.7zM48 352a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm592 0a96 96 0 1 1 -192 0 96 96 0 1 1 192 0zm-144 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M312 64l-24 0 0 48 24 0 35.5 0 81.5 115.9L372 304l-17.3 0L37.3 232.6l-23.4-5.3L3.3 274.1l23.4 5.3 5.1 1.2C48.9 265.3 71.3 256 96 256c39.9 0 74.1 24.3 88.6 58.9l162.2 36.5 2.6 .6 2.7 0 32 0 12 0 7.2-9.6 54.9-73.2 13.7 19.5c10.6-12.1 24.2-21.5 39.7-27L379.6 74.2 372.5 64 360 64l-48 0z" />
    </Icon>
);

export default TricycleAdult;