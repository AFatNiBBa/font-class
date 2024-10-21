
import { Icon } from "../../index";

/**
 * A component that renders the `robot-astromech` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/robot-astromech?s=sharp-solid robot-astromech}
 * @preview ![robot-astromech](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/robot-astromech.svg)
 */
const RobotAstromech: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 128l0 32 256 0 0-32C384 57.3 326.7 0 256 0S128 57.3 128 128zm96-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm64 48a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM0 512l128 0 0-128 64 64 128 0 64-64 0 128 128 0 0-32-48-64 0-224L48 192l0 224L0 480l0 32zM208 256l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0zm0 64l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0z" />
    </Icon>
);

export default RobotAstromech;