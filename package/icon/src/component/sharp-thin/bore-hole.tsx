
import { Icon } from "../../index";

/**
 * A component that renders the `bore-hole` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bore-hole?s=sharp-thin bore-hole}
 * @preview ![bore-hole](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bore-hole.svg)
 */
const BoreHole: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 8l0 264.5c31.6 3.9 56 30.9 56 63.5c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-32.6 24.4-59.6 56-63.5L248 8l0-8 16 0 0 8zM208 336a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM496 144l-128 0 0 192c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-192L16 144l0 352 480 0 0-352zM144 128l16 0 0 16 0 192c0 53 43 96 96 96s96-43 96-96l0-192 0-16 16 0 128 0 16 0 0 16 0 352 0 16-16 0L16 512 0 512l0-16L0 144l0-16 16 0 128 0z" />
    </Icon>
);

export default BoreHole;