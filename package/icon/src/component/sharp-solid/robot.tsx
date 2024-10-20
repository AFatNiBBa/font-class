
import { Icon } from "../../index";

/**
 * A component that renders the `robot` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/robot?s=sharp-solid robot}
 * @preview ![robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/robot.svg)
 */
const Robot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M352 0l0 32 0 64 192 0 0 416L96 512 96 96l192 0 0-64 0-32 64 0zM208 384l-16 0 0 32 16 0 32 0 16 0 0-32-16 0-32 0zm96 0l-16 0 0 32 16 0 32 0 16 0 0-32-16 0-32 0zm96 0l-16 0 0 32 16 0 32 0 16 0 0-32-16 0-32 0zM264 256a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm152 40a40 40 0 1 0 0-80 40 40 0 1 0 0 80zM64 224l0 192L0 416 0 224l64 0zm576 0l0 192-64 0 0-192 64 0z" />
    </Icon>
);

export default Robot;