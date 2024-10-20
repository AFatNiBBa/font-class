
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blender-phone` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blender-phone?s=sharp-duotone-solid blender-phone}
 * @preview ![blender-phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/blender-phone.svg)
 */
const BlenderPhone: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M192 0l32 384 256 0 24-96-104 0-16 0 0-32 16 0 112 0 16-64-128 0-16 0 0-32 16 0 136 0 16-64L400 96l-16 0 0-32 16 0 160 0L576 0 192 0z" />
        <path d="M153.6 44.8L84.9 0 72.4 12.8c-96.6 99-96.6 259.4 0 358.4L84.9 384l68.7-44.8-25-89.6-58.9 6.7c-12.6-41.8-12.6-86.8 0-128.6l58.9 6.7 25-89.6zM560 64L400 64l-16 0 0 32 16 0 152 0 8-32zm-24 96l-136 0-16 0 0 32 16 0 128 0 8-32zm-24 96l-112 0-16 0 0 32 16 0 104 0 8-32zm32 128l-384 0 0 128 384 0 0-128zM352 416a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default BlenderPhone;