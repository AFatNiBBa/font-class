
import { Icon } from "../../index";

/**
 * A component that renders the `blender` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blender?s=sharp-light blender}
 * @preview ![blender](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/blender.svg)
 */
const Blender: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L16 0 128 0l24 0 8.1 0L479 0l33 0-8 32-24 96L424 352l24 0 32 0 0 32 0 96 0 32-32 0-320 0-32 0 0-32 0-96 0-32 32 0 29.3 0L148 240 16 240 0 240l0-16L0 16 0 0zM423 224l-119 0-16 0 0-32 16 0 127 0 16-64-143 0-16 0 0-32 16 0 151 0 16-64L162.8 32l26.7 320L391 352l32-128zM128 384l0 96 320 0 0-96-32 0-256 0-32 0zM32 32l0 176 113.3 0L130.7 32 32 32zM288 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Blender;