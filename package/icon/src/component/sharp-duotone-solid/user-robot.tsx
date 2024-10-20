
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-robot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-robot?s=sharp-duotone-solid user-robot}
 * @preview ![user-robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-robot.svg)
 */
const UserRobot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 128l0 128 48 0 0-128-48 0zM144 448l0 16 0 48 32 0 0-48 0-16-32 0zM208 0l0 16 0 48 32 0 0-48 0-16L208 0zm0 448l0 16 0 48 32 0 0-48 0-16-32 0zm64 0l0 16 0 48 32 0 0-48 0-16-32 0zm96-320l0 128 48 0 0-128-48 0z" />
        <path d="M80 64l288 0 0 256L80 320 80 64zm112 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM176 240l-32 0 0 32 32 0 0-32zm32 0l0 32 32 0 0-32-32 0zm64 0l0 32 32 0 0-32-32 0zM48 352l352 0 48 160-96 0 0-96L96 416l0 96L0 512 48 352z" />
    </Icon>
);

export default UserRobot;