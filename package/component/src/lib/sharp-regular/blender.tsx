
import { Icon } from "../../index";

/**
 * A component that renders the `blender` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blender?s=sharp-regular blender}
 * @preview ![blender](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/blender.svg)
 */
const Blender: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 0L24 0 128 0l32 0 16.2 0L462.5 0 512 0 500 48l-20 80L428 336l4 0 48 0 0 48 0 80 0 48-48 0-288 0-48 0 0-48 0-80 0-48 48 0 12 0-6.7-80L24 256 0 256l0-24L0 24 0 0zM406.5 224L304 224l-16 0 0-32 16 0 110.5 0 16-64L304 128l-16 0 0-32 16 0 134.5 0 12-48L180.2 48l24 288 174.4 0 28-112zM144 384l0 80 288 0 0-80-16 0-256 0-16 0zM48 48l0 160 97.3 0L132 48 48 48zM288 400a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Blender;