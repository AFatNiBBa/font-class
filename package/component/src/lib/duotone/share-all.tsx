
import { Icon, generic } from "../../index";

/**
 * A component that renders the `share-all` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share-all?s=duotone share-all}
 * @preview ![share-all](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/share-all.svg)
 */
const ShareAll: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M352 64l0 43.3 85.4 76.9c6.7 6.1 10.6 14.7 10.6 23.8s-3.8 17.7-10.6 23.8L352 308.7l0 43.3c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-6-5.4-13.7-8.2-21.4-8.2c-4.4 0-8.8 .9-13 2.8c-11.5 5.1-19 16.6-19 29.2z" />
        <path d="M243 34.8c-11.5 5.1-19 16.6-19 29.2l0 64-48 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l32 0 0 64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
    </Icon>
);

export default ShareAll;