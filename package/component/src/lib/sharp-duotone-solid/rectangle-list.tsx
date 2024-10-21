
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-list` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-list?s=sharp-duotone-solid rectangle-list}
 * @preview ![rectangle-list](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rectangle-list.svg)
 */
const RectangleList: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32l576 0 0 448L0 480 0 32zM96 160a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm0 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zM200 136l0 48 24 0 224 0 24 0 0-48-24 0-224 0-24 0zm0 96l0 48 24 0 224 0 24 0 0-48-24 0-224 0-24 0zm0 96l0 48 24 0 224 0 24 0 0-48-24 0-224 0-24 0z" />
        <path d="M200 136l24 0 224 0 24 0 0 48-24 0-224 0-24 0 0-48zm0 192l24 0 224 0 24 0 0 48-24 0-224 0-24 0 0-48zm24-96l224 0 24 0 0 48-24 0-224 0-24 0 0-48 24 0z" />
    </Icon>
);

export default RectangleList;