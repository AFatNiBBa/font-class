
import { Icon } from "../../index";

/**
 * A component that renders the `user-check` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-check?s=thin user-check}
 * @preview ![user-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-check.svg)
 */
const UserCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 16a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 240A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 64l91.4 0C359.3 320 432 392.7 432 482.3c0 7.6-6.1 13.7-13.7 13.7L29.7 496c-7.6 0-13.7-6.1-13.7-13.7C16 392.7 88.7 320 178.3 320zm0-16C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0zM629.7 149.7c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L496 260.7l-58.3-58.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l64 64c3.1 3.1 8.2 3.1 11.3 0l128-128z" />
    </Icon>
);

export default UserCheck;