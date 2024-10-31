
import { Icon } from "../../index";

/**
 * A component that renders the `user-minus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-minus?s=thin user-minus}
 * @preview ![user-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-minus.svg)
 */
const UserMinus: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 240A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 64l91.4 0C359.3 320 432 392.7 432 482.3c0 7.6-6.1 13.7-13.7 13.7L29.7 496c-7.6 0-13.7-6.1-13.7-13.7C16 392.7 88.7 320 178.3 320zm0-16C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0zM432 200c-4.4 0-8 3.6-8 8s3.6 8 8 8l192 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-192 0z" />
    </Icon>
);

export default UserMinus;