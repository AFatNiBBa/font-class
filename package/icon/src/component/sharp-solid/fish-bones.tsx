
import { Icon } from "../../index";

/**
 * A component that renders the `fish-bones` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/fish-bones?s=sharp-solid fish-bones}
 * @preview ![fish-bones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/fish-bones.svg)
 */
const FishBones: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 96L0 128 64 256 0 384l32 32 64-64 0-48 0-24 40 0 0 72 0 24 48 0 0-24 0-72 48 0 0 72 0 24 48 0 0-24 0-72 48 0 0 72 0 24 48 0 0-24 0-72 40 0 0 120 32 0L576 256 448 112l-32 0 0 120-40 0 0-72 0-24-48 0 0 24 0 72-48 0 0-72 0-24-48 0 0 24 0 72-48 0 0-72 0-24-48 0 0 24 0 72-40 0 0-24 0-48L32 96z" />
    </Icon>
);

export default FishBones;