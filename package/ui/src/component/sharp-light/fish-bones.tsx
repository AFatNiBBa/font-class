
import { Icon } from "../../index";

/**
 * A component that renders the `fish-bones` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish-bones?s=sharp-light fish-bones}
 * @preview ![fish-bones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/fish-bones.svg)
 */
const FishBones: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M76.2 240l-38-101.5L96 177.1l0-38.5L32 96 0 128 48 256 0 384l32 32 64-42.7 0-38.5L38.1 373.5 76.2 272l67.8 0 0 80 0 16 32 0 0-16 0-80 64 0 0 80 0 16 32 0 0-16 0-80 64 0 0 80 0 16 32 0 0-16 0-80 48 0 0 96 0 32 32 0L576 256 448 112l-32 0 0 32 0 96-48 0 0-80 0-16-32 0 0 16 0 80-64 0 0-80 0-16-32 0 0 16 0 80-64 0 0-80 0-16-32 0 0 16 0 80-67.8 0zM448 351.8l0-79.8 0-32 0-79.8L533.2 256 448 351.8z" />
    </Icon>
);

export default FishBones;