
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hotel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hotel?s=sharp-duotone-solid hotel}
 * @preview ![hotel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hotel.svg)
 */
const Hotel: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 448l0 64 208 0 0-96 96 0 0 96 208 0 0-64-32 0 0-384L32 64l0 384L0 448zM96 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zm64 192c0-53 43-96 96-96s96 43 96 96l-192 0zM224 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64zM352 96l64 0 0 64-64 0 0-64zm0 96l64 0 0 64-64 0 0-64z" />
        <path d="M512 0L0 0 0 64l512 0 0-64zM160 96L96 96l0 64 64 0 0-64zm128 0l-64 0 0 64 64 0 0-64zm64 0l0 64 64 0 0-64-64 0zM160 192l-64 0 0 64 64 0 0-64zm64 0l0 64 64 0 0-64-64 0zm192 0l-64 0 0 64 64 0 0-64zM352 384c0-53-43-96-96-96s-96 43-96 96l192 0z" />
    </Icon>
);

export default Hotel;