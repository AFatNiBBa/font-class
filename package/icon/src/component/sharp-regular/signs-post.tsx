
import { Icon } from "../../index";

/**
 * A component that renders the `signs-post` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/signs-post?s=sharp-regular signs-post}
 * @preview ![signs-post](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/signs-post.svg)
 */
const SignsPost: typeof Icon = x => (
    <Icon {...x}>
        <path d="M232 0l48 0 0 32 168 0 64 80-64 80-168 0 0 32 152 0 48 0 0 48 0 64 0 48-48 0-152 0 0 128-48 0 0-128L64 384 0 304l64-80 168 0 0-32L80 192l-48 0 0-48 0-64 0-48 48 0 152 0 0-32zM424.9 80L80 80l0 64 344.9 0 25.6-32L424.9 80zM87.1 272L61.5 304l25.6 32L432 336l0-64L87.1 272z" />
    </Icon>
);

export default SignsPost;