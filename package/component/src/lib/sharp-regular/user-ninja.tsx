
import { Icon } from "../../index";

/**
 * A component that renders the `user-ninja` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-ninja?s=sharp-regular user-ninja}
 * @preview ![user-ninja](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-ninja.svg)
 */
const UserNinja: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0c-49.6 0-92.6 28.2-113.8 69.4c-3-5.8-6.8-11.3-11.7-16.1c-25-25-67.9-22.6-67.9-22.6s-2.4 42.9 22.6 67.9c5.8 5.8 12.6 10.1 19.6 13.4c-7 3.2-13.8 7.6-19.6 13.4c-25 25-22.6 67.9-22.6 67.9s42.9 2.4 67.9-22.6c1.2-1.2 2.4-2.5 3.5-3.8c16.4 51.8 64.8 89.3 122 89.3zM160 96l128 0 16 0 0 32-16 0-128 0-16 0 0-32 16 0zm97.3 322.6l.6-.6L323.9 352l24.7 0L383 464l-80.3 0-45.4-45.4zM292.8 512l105 0 50.2 0-14.8-48L384 304l-80 0-46.1 46.1L224 384l-33.9-33.9L144 304l-80 0L14.8 464 0 512l50.2 0 242.6 0zm-57.9-48L65 464 99.5 352l23.4 0 112 112z" />
    </Icon>
);

export default UserNinja;