
import { Icon, generic } from "../../index";

/**
 * A component that renders the `images-user` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/images-user?s=sharp-duotone-solid images-user}
 * @preview ![images-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/images-user.svg)
 */
const ImagesUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 352 480 0 0-352L96 32zM232 320l24-64 160 0 24 64-208 0zM400 160a64 64 0 1 1 -128 0 64 64 0 1 1 128 0z" />
        <path d="M48 120l0-24L0 96l0 24L0 456l0 24 24 0 432 0 24 0 0-48-24 0L48 432l0-312zm352 40a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm16 96l-160 0-24 64 208 0-24-64z" />
    </Icon>
);

export default ImagesUser;