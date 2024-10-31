
import { Icon } from "../../index";

/**
 * A component that renders the `images-user` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/images-user?s=sharp-regular images-user}
 * @preview ![images-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/images-user.svg)
 */
const ImagesUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M528 80L144 80l0 256 88 0 24-64 160 0 24 64 88 0 0-256zM144 32l384 0 48 0 0 48 0 256 0 48-48 0-384 0-48 0 0-48L96 80l0-48 48 0zM48 96l0 24 0 312 408 0 24 0 0 48-24 0L24 480 0 480l0-24L0 120 0 96l48 0zm224 80a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default ImagesUser;