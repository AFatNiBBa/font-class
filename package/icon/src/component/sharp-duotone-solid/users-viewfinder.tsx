
import { Icon, generic } from "../../index";

/**
 * A component that renders the `users-viewfinder` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-viewfinder?s=sharp-duotone-solid users-viewfinder}
 * @preview ![users-viewfinder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/users-viewfinder.svg)
 */
const UsersViewfinder: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 336l94.3 0 19.4-58.1 7.3-21.9L120 256 96 336zm31.8-160a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zM208 384l224 0-16-48-16-48-17.6 0-124.8 0L240 288l-16 48-16 48zm48-192a64 64 0 1 0 128 0 64 64 0 1 0 -128 0zm160-16a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm7.1 80l7.3 21.9L449.7 336l94.3 0-24-80-96.9 0z" />
        <path d="M24 0L0 0 0 24 0 136l0 24 48 0 0-24 0-88 88 0 24 0 0-48L136 0 24 0zM616 0L504 0 480 0l0 48 24 0 88 0 0 88 0 24 48 0 0-24 0-112 0-24L616 0zM0 512l24 0 112 0 24 0 0-48-24 0-88 0 0-88 0-24L0 352l0 24L0 488l0 24zm616 0l24 0 0-24 0-112 0-24-48 0 0 24 0 88-88 0-24 0 0 48 24 0 112 0z" />
    </Icon>
);

export default UsersViewfinder;