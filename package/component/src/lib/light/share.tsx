
import { Icon } from "../../index";

/**
 * A component that renders the `share` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share?s=light share}
 * @preview ![share](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/share.svg)
 */
const Share: typeof Icon = x => (
    <Icon {...x}>
        <path d="M296 160c13.3 0 24-10.7 24-24l0-8 0-16 0-48L480 208 320 352l0-48 0-16 0-8c0-13.3-10.7-24-24-24l-8 0-96 0c-70.7 0-128 57.3-128 128c0 8.3 .7 16.1 2 23.2C47.9 383.7 32 350.1 32 304c0-79.5 64.5-144 144-144l112 0 8 0zm-8 144l0 16 0 32c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4s-19 16.6-19 29.2l0 32 0 16 0 16-32 0-80 0C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96l64 0 32 0 0 16z" />
    </Icon>
);

export default Share;