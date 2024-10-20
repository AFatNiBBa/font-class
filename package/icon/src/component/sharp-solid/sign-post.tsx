
import { Icon } from "../../index";

/**
 * A component that renders the `sign-post` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-post?s=sharp-solid sign-post}
 * @preview ![sign-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/sign-post.svg)
 */
const SignPost: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 0l64 0 0 64 144 0 80 96-80 96L32 256 32 64l192 0 0-64zm64 288l0 224-64 0 0-224 64 0z" />
    </Icon>
);

export default SignPost;