
import { Icon, generic } from "../../index";

/**
 * A component that renders the `key-skeleton-left-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/key-skeleton-left-right?s=sharp-duotone-solid key-skeleton-left-right}
 * @preview ![key-skeleton-left-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/key-skeleton-left-right.svg)
 */
const KeySkeletonLeftRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 384c0 70.7 57.3 128 128 128c59.6 0 109.8-40.8 124-96l196 0 32 0 0-32 0-64 0-32-64 0 0 32 0 32-32 0 0-32 0-32-64 0 0 32 0 32-68 0c-14.2-55.2-64.3-96-124-96C57.3 256 0 313.3 0 384zm192 0A64 64 0 1 1 64 384a64 64 0 1 1 128 0z" />
        <path d="M512 192a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm0 64c-59.6 0-109.8-40.8-124-96l-68 0 0 32 0 32-64 0 0-32 0-32-32 0 0 32 0 32-64 0 0-32 0-64 0-32 32 0 196 0C402.2 40.8 452.4 0 512 0c70.7 0 128 57.3 128 128s-57.3 128-128 128z" />
    </Icon>
);

export default KeySkeletonLeftRight;