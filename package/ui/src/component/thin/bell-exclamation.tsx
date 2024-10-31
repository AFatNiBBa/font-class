
import { Icon } from "../../index";

/**
 * A component that renders the `bell-exclamation` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-exclamation?s=thin bell-exclamation}
 * @preview ![bell-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bell-exclamation.svg)
 */
const BellExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M216 8c0-4.4 3.6-8 8-8s8 3.6 8 8l0 24 0 .2c84.6 4.2 152 74.1 152 159.8l0 36.6c0 41.8 14.2 82.3 40.3 114.9l16.7 20.9c4.5 5.6 6.9 12.6 6.9 19.8c0 17.5-14.2 31.7-31.7 31.7L31.7 416C14.2 416 0 401.8 0 384.3c0-7.2 2.4-14.2 6.9-19.8l16.7-20.9C49.8 311 64 270.4 64 228.6L64 192c0-85.7 67.4-155.6 152-159.8l0-.2 0-24zm8 40C144.5 48 80 112.5 80 192l0 36.6c0 45.4-15.5 89.5-43.8 124.9L19.4 374.5c-2.2 2.8-3.4 6.2-3.4 9.8C16 393 23 400 31.7 400l384.6 0c8.7 0 15.7-7 15.7-15.7c0-3.6-1.2-7-3.4-9.8l-16.7-20.9C383.5 318.1 368 274.1 368 228.6l0-36.6c0-79.5-64.5-144-144-144zM176 448c0 12.7 5.1 24.9 14.1 33.9s21.2 14.1 33.9 14.1s24.9-5.1 33.9-14.1s14.1-21.2 14.1-33.9c0-4.4 3.6-8 8-8s8 3.6 8 8c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3c0-4.4 3.6-8 8-8s8 3.6 8 8zm32-128a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm24-184l0 128c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-128c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default BellExclamation;