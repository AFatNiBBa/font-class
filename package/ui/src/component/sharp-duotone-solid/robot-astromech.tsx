
import { Icon, generic } from "../../index";

/**
 * A component that renders the `robot-astromech` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/robot-astromech?s=sharp-duotone-solid robot-astromech}
 * @preview ![robot-astromech](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/robot-astromech.svg)
 */
const RobotAstromech: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480l0 32 128 0 0-128 64 64 128 0 64-64 0 128 128 0 0-32-48-64 0-224-80 0-256 0-80 0 0 224L0 480zM192 256l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32zm0 64l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32z" />
        <path d="M128 128C128 57.3 185.3 0 256 0s128 57.3 128 128l0 64-256 0 0-64zm96 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM208 256l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0zm0 64l96 0 16 0 0 32-16 0-96 0-16 0 0-32 16 0z" />
    </Icon>
);

export default RobotAstromech;