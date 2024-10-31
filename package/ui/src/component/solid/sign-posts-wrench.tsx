
import { Icon } from "../../index";

/**
 * A component that renders the `sign-posts-wrench` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sign-posts-wrench?s=solid sign-posts-wrench}
 * @preview ![sign-posts-wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/sign-posts-wrench.svg)
 */
const SignPostsWrench: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M96 0C78.3 0 64 14.3 64 32L48 32C21.5 32 0 53.5 0 80L0 368c0 26.5 21.5 48 48 48l336 0c-20.1-26.7-32-60-32-96c0-49.9 22.9-94.5 58.6-123.8c14.2-11.7 32.6-12.2 46.7-4.6c13.6 7.3 22.7 21.7 22.7 38.3l0 58.1c0 17.7 14.3 32 32 32s32-14.3 32-32l0-58.1c0-16.6 9.1-31 22.7-38.3c2.9-1.6 6.1-2.8 9.3-3.7L576 80c0-26.5-21.5-48-48-48l-16 0c0-17.7-14.3-32-32-32s-32 14.3-32 32L128 32c0-17.7-14.3-32-32-32zm32 448l-64 0 0 32c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32zM640 320c0-39.9-18.3-75.6-46.9-99c-7.1-5.9-17.1-.3-17.1 9l0 58.1c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-58.1c0-9.2-9.9-14.8-17.1-9c-28.6 23.5-46.9 59.1-46.9 99c0 40.4 18.7 76.5 48 99.9l0 56.1c0 19.9 16.1 36 36 36l88 0c19.9 0 36-16.1 36-36l0-56.1c29.3-23.5 48-59.5 48-99.9z" />
    </Icon>
);

export default SignPostsWrench;