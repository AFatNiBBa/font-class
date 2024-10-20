
import { Icon } from "../../index";

/**
 * A component that renders the `key-skeleton` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key-skeleton?s=regular key-skeleton}
 * @preview ![key-skeleton](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/key-skeleton.svg)
 */
const KeySkeleton: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M304 48a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 240c79.5 0 144-64.5 144-144S383.5 0 304 0S160 64.5 160 144c0 31.1 9.9 59.9 26.6 83.4L7 407c-9.4 9.4-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47L88 393.9l47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 98.6-98.6C244.1 278.1 272.9 288 304 288z" />
    </Icon>
);

export default KeySkeleton;