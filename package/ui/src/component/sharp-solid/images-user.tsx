
import { Icon } from "../../index";

/**
 * A component that renders the `images-user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/images-user?s=sharp-solid images-user}
 * @preview ![images-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/images-user.svg)
 */
const ImagesUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M96 32l0 352 480 0 0-352L96 32zM336 96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM440 320l-208 0 24-64 160 0 24 64zM48 120l0-24L0 96l0 24L0 456l0 24 24 0 432 0 24 0 0-48-24 0L48 432l0-312z" />
    </Icon>
);

export default ImagesUser;