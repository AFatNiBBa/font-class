
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-ninja` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-ninja?s=sharp-duotone-solid user-ninja}
 * @preview ![user-ninja](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-ninja.svg)
 */
const UserNinja: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M144 96l16 0 128 0 16 0 0 32-16 0-128 0-16 0 0-32z" />
        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0c-49.6 0-92.6 28.2-113.8 69.4c-3-5.8-6.8-11.3-11.7-16.1c-25-25-67.9-22.6-67.9-22.6s-2.4 42.9 22.6 67.9c5.8 5.8 12.6 10.1 19.6 13.4c-7 3.2-13.8 7.6-19.6 13.4c-25 25-22.6 67.9-22.6 67.9s42.9 2.4 67.9-22.6c1.2-1.2 2.4-2.5 3.5-3.8c16.4 51.8 64.8 89.3 122 89.3zM448 512L384 304l-76 0L224 416 140 304l-76 0L0 512l448 0zM160 96l128 0 16 0 0 32-16 0-128 0-16 0 0-32 16 0z" />
    </Icon>
);

export default UserNinja;