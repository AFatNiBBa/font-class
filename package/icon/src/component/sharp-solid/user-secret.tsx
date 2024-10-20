
import { Icon } from "../../index";

/**
 * A component that renders the `user-secret` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-secret?s=sharp-solid user-secret}
 * @preview ![user-secret](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-secret.svg)
 */
const UserSecret: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M121.1 87.5L160 0l64 32L288 0l38.9 87.5C380.5 96 416 111 416 128c0 14.3-25 27.1-64.6 35.9c.4 4 .6 8 .6 12.1c0 17-3.3 33.2-9.3 48l73.3 0L375.3 336l40.7 0 32 176L0 512 32 336l40.7 0L32 224l73.3 0c-6-14.8-9.3-31-9.3-48c0-4.1 .2-8.1 .6-12.1C57 155.1 32 142.3 32 128c0-17 35.5-32 89.1-40.5zM144 224l64 0 8-32 16 0 8 32 64 0 13.5-54.1C289.8 173.8 258 176 224 176s-65.8-2.2-93.5-6.1L144 224zm-16 64l48 192 32-128-16-32-64-32zM272 480l48-192-64 32-16 32 32 128z" />
    </Icon>
);

export default UserSecret;