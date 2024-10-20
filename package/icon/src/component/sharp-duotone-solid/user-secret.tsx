
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-secret` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-secret?s=sharp-duotone-solid user-secret}
 * @preview ![user-secret](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-secret.svg)
 */
const UserSecret: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M112 167c3 .5 6 1 9.1 1.5c3.1 .5 6.2 .9 9.4 1.4c4.5 18 9 36 13.5 54.1c21.3 0 42.7 0 64 0c2.7-10.7 5.3-21.3 8-32c5.3 0 10.7 0 16 0c2.7 10.7 5.3 21.3 8 32c21.3 0 42.7 0 64 0c4.5-18 9-36 13.5-54.1c6.4-.9 12.6-1.9 18.5-2.9l0 17c0 61.9-50.1 112-112 112s-112-50.1-112-112l0-17z" />
        <path d="M160 0l64 32L288 0l38.9 87.5C380.5 96 416 111 416 128c0 18-39.7 33.7-98.5 41.9L304 224l-64 0-8-32-16 0-8 32-64 0-13.5-54.1C71.7 161.7 32 146 32 128c0-17 35.5-32 89.1-40.5L160 0zM272 480l72-256 72 0L375.3 336l40.7 0 32 176-168 0-56 0-56 0L0 512 32 336l40.7 0L32 224l72 0 72 256 1.1 .7 31.2-106.9L176 320l48 0 48 0-32.3 53.8 31.2 106.9 1.1-.7z" />
    </Icon>
);

export default UserSecret;