
import { Icon } from "../../index";

/**
 * A component that renders the `sign-post` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-post?s=regular sign-post}
 * @preview ![sign-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/sign-post.svg)
 */
const SignPost: typeof Icon = x => (
    <Icon {...x}>
        <path d="M232 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 137 0c9.5 0 18.5 4.2 24.6 11.5l61.9 74.2c4.9 5.9 4.9 14.6 0 20.5l-61.9 74.2c-6.1 7.3-15.1 11.5-24.6 11.5l-137 0 0 232c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-232L80 256c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l152 0 0-40zM449.5 160l-40-48L80 112l0 96 329.5 0 40-48z" />
    </Icon>
);

export default SignPost;