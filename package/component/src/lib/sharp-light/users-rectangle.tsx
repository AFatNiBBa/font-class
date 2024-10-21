
import { Icon } from "../../index";

/**
 * A component that renders the `users-rectangle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/users-rectangle?s=sharp-light users-rectangle}
 * @preview ![users-rectangle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/users-rectangle.svg)
 */
const UsersRectangle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M16 0L0 0 0 16 0 496l0 16 16 0 608 0 16 0 0-16 0-480 0-16L624 0 16 0zM32 480L32 32l576 0 0 448L32 480zM159.8 176a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM288 192a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm96 0a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm80.2-32a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 64a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM129.4 336l14.4-48 46.5 0 3.4-10.1 7.3-21.9L120 256 96 336l33.4 0zm366.8-48l14.4 48 33.4 0-24-80-80.9 0 7.3 21.9 3.4 10.1 46.5 0zM224 288l-21.3 64L192 384l33.7 0 188.5 0 33.7 0-10.7-32L416 288l-192 0zm23.1 32l145.9 0 10.7 32-167.2 0 10.7-32z" />
    </Icon>
);

export default UsersRectangle;