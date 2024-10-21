
import { Icon } from "../../index";

/**
 * A component that renders the `user-minus` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-minus?s=sharp-thin user-minus}
 * @preview ![user-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-minus.svg)
 */
const UserMinus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 128a112 112 0 1 0 -224 0 112 112 0 1 0 224 0zM21.7 496l404.7 0L372.2 320 75.8 320 21.7 496zM384 304l59.1 192 4.9 16-16.7 0L16.7 512 0 512l4.9-16L64 304l320 0zM224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM424 216l0-16 208 0 0 16-208 0z" />
    </Icon>
);

export default UserMinus;