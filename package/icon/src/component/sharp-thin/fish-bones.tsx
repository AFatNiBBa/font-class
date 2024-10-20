
import { Icon } from "../../index";

/**
 * A component that renders the `fish-bones` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish-bones?s=sharp-thin fish-bones}
 * @preview ![fish-bones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/fish-bones.svg)
 */
const FishBones: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M62.1 248l81.9 0 0-88 0-8 16 0 0 8 0 88 80 0 0-88 0-8 16 0 0 8 0 88 80 0 0-88 0-8 16 0 0 8 0 88 64 0 0-120 0-16 16 0 16 0L576 256 448 400l-16 0-16 0 0-16 0-120-64 0 0 88 0 8-16 0 0-8 0-88-80 0 0 88 0 8-16 0 0-8 0-88-80 0 0 88 0 8-16 0 0-8 0-88-81.9 0L18.6 380 34 395.4l62-41.3 0 19.2L32 416 0 384 48 256 0 128 32 96l64 42.7 0 19.2L34 116.6 18.6 132 62.1 248zM432 264l0 120 8.8 0L554.6 256 440.8 128l-8.8 0 0 120 0 16z" />
    </Icon>
);

export default FishBones;