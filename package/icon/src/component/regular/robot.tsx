
import { Icon } from "../../index";

/**
 * A component that renders the `robot` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/robot?s=regular robot}
 * @preview ![robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/robot.svg)
 */
const Robot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M320 0c13.3 0 24 10.7 24 24l0 72 104 0c53 0 96 43 96 96l0 224c0 53-43 96-96 96l-256 0c-53 0-96-43-96-96l0-224c0-53 43-96 96-96l104 0 0-72c0-13.3 10.7-24 24-24zM192 144c-26.5 0-48 21.5-48 48l0 224c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-224c0-26.5-21.5-48-48-48l-128 0-128 0zM48 224l16 0 0 192-16 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zm544 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-16 0 0-192 16 0zM208 384l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm96 0l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm96 0l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM200 256a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm200-40a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
    </Icon>
);

export default Robot;