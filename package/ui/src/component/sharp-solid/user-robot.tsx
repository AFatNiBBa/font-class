
import { Icon } from "../../index";

/**
 * A component that renders the `user-robot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-robot?s=sharp-solid user-robot}
 * @preview ![user-robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/user-robot.svg)
 */
const UserRobot: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M240 0l0 16 0 48 128 0 0 256L80 320 80 64l128 0 0-48 0-16 32 0zM16 128l32 0 0 128-32 0 0-128zm384 0l32 0 0 128-32 0 0-128zM160 192a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm160-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-80 80l-32 0 0 32 32 0 0-32zM400 352l48 160-96 0 0-96L96 416l0 96L0 512 48 352l352 0zM176 464l0 48-32 0 0-48 0-16 32 0 0 16zm64 0l0 48-32 0 0-48 0-16 32 0 0 16zM176 240l-32 0 0 32 32 0 0-32zm96 0l0 32 32 0 0-32-32 0zm32 224l0 48-32 0 0-48 0-16 32 0 0 16z" />
    </Icon>
);

export default UserRobot;