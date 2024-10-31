
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-robot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-robot?s=duotone user-robot}
 * @preview ![user-robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/user-robot.svg)
 */
const UserRobot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 160l0 64c0 17.7 14.3 32 32 32l16 0 0-128-16 0c-17.7 0-32 14.3-32 32zM144 464l0 48 32 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16zM208 16l0 48 32 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16zm0 448l0 48 32 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16zm64 0l0 48 32 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16zm96-336l0 128 16 0c17.7 0 32-14.3 32-32l0-64c0-17.7-14.3-32-32-32l-16 0z" />
        <path d="M80 128c0-35.3 28.7-64 64-64l160 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64l-160 0c-35.3 0-64-28.7-64-64l0-128zm112 32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM144 256a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zm80-16a16 16 0 1 0 0 32 16 16 0 1 0 0-32zm48 16a16 16 0 1 0 32 0 16 16 0 1 0 -32 0zM0 448c0-53 43-96 96-96l256 0c53 0 96 43 96 96l0 32c0 17.7-14.3 32-32 32l-64 0 0-64c0-17.7-14.3-32-32-32l-192 0c-17.7 0-32 14.3-32 32l0 64-64 0c-17.7 0-32-14.3-32-32l0-32z" />
    </Icon>
);

export default UserRobot;