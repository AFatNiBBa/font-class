
import { Icon } from "../../index";

/**
 * A component that renders the `robot` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/robot?s=sharp-light robot}
 * @preview ![robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/robot.svg)
 */
const Robot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M336 0l0 16 0 80 176 0 32 0 0 32 0 352 0 32-32 0-384 0-32 0 0-32 0-352 0-32 32 0 176 0 0-80 0-16 32 0zM128 128l0 352 384 0 0-352-176 0-32 0-176 0zm80 256l32 0 16 0 0 32-16 0-32 0-16 0 0-32 16 0zm96 0l32 0 16 0 0 32-16 0-32 0-16 0 0-32 16 0zm96 0l32 0 16 0 0 32-16 0-32 0-16 0 0-32 16 0zM224 224a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm64 32a64 64 0 1 1 -128 0 64 64 0 1 1 128 0zm96 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 64a64 64 0 1 1 0-128 64 64 0 1 1 0 128zM32 224l32 0 0 32-32 0 0 128 32 0 0 32-32 0L0 416l0-32L0 256l0-32 32 0zM608 384l0-128-32 0 0-32 32 0 32 0 0 32 0 128 0 32-32 0-32 0 0-32 32 0z" />
    </Icon>
);

export default Robot;