
import { Icon } from "../../index";

/**
 * A component that renders the `sign-post` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-post?s=solid sign-post}
 * @preview ![sign-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/sign-post.svg)
 */
const SignPost: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 129 0c9.5 0 18.5 4.2 24.6 11.5l61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5L80 256c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l144 0 0-32zm64 448c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192 64 0 0 192z" />
    </Icon>
);

export default SignPost;