
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-group-simple` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-group-simple?s=duotone user-group-simple}
 * @preview ![user-group-simple](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-group-simple.svg)
 */
const UserGroupSimple: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M321.9 322.6C340.8 348.9 352 381.1 352 416l0 16c0 1.5 0 3-.1 4.5C375.3 463.2 409.7 480 448 480l64 0c70.7 0 128-57.3 128-128l0-16c0-26.5-21.5-48-48-48l-224 0c-21.8 0-40.3 14.6-46.1 34.6zM376 136a104 104 0 1 0 208 0 104 104 0 1 0 -208 0z" />
        <path d="M160 240a104 104 0 1 0 0-208 104 104 0 1 0 0 208zm-32 48C57.3 288 0 345.3 0 416l0 16c0 26.5 21.5 48 48 48l224 0c26.5 0 48-21.5 48-48l0-16c0-70.7-57.3-128-128-128l-64 0z" />
    </Icon>
);

export default UserGroupSimple;