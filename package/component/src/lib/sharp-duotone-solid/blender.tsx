
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blender` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blender?s=sharp-duotone-solid blender}
 * @preview ![blender](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/blender.svg)
 */
const Blender: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 0L0 32 0 224l0 32 32 0 117.3 0L160 384l256 0 24-96-104 0-16 0 0-32 16 0 112 0 16-64-128 0-16 0 0-32 16 0 136 0 16-64L336 96l-16 0 0-32 16 0 160 0L512 0 160 0 128 0 32 0 0 0zM64 64l69.3 0L144 192l-80 0L64 64z" />
        <path d="M336 64l160 0-8 32L336 96l-16 0 0-32 16 0zm0 96l136 0-8 32-128 0-16 0 0-32 16 0zm0 96l112 0-8 32-104 0-16 0 0-32 16 0zM96 384l384 0 0 128L96 512l0-128zm224 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
    </Icon>
);

export default Blender;