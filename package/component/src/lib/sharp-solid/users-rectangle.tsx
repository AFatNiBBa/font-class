
import { Icon } from "../../index";

/**
 * A component that renders the `users-rectangle` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-rectangle?s=sharp-solid users-rectangle}
 * @preview ![users-rectangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/users-rectangle.svg)
 */
const UsersRectangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 0L0 0 0 32 0 480l0 32 32 0 576 0 32 0 0-32 0-448 0-32L608 0 32 0zM64 448L64 64l512 0 0 384L64 448zM223.8 176a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM120 256L96 336l94.3 0 19.4-58.1 7.3-21.9L120 256zm329.7 80l94.3 0-24-80-96.9 0 7.3 21.9L449.7 336zM432 384l-16-48-16-48-17.6 0-124.8 0L240 288l-16 48-16 48 224 0zm80-208a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM320 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default UsersRectangle;