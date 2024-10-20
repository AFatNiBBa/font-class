
import { Icon } from "../../index";

/**
 * A component that renders the `user-minus` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-minus?s=regular user-minus}
 * @preview ![user-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/user-minus.svg)
 */
const UserMinus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 48a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm0 208A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 96l91.4 0c65.7 0 120.1 48.7 129 112L49.3 464c8.9-63.3 63.3-112 129-112zm0-48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0zM472 200c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z" />
    </Icon>
);

export default UserMinus;