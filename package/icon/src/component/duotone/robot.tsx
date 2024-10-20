
import { Icon, generic } from "../../index";

/**
 * A component that renders the `robot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/robot?s=duotone robot}
 * @preview ![robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/robot.svg)
 */
const Robot: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M32 272l0 96c0 26.5 21.5 48 48 48l16 0 0-192-16 0c-26.5 0-48 21.5-48 48zM192 400c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM288 32l0 64 64 0 0-64c0-17.7-14.3-32-32-32s-32 14.3-32 32zm0 368c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm96 0c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zM544 224l0 192 16 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-16 0z" />
        <path d="M168 96c-39.8 0-72 32.2-72 72l0 272c0 39.8 32.2 72 72 72l304 0c39.8 0 72-32.2 72-72l0-272c0-39.8-32.2-72-72-72L168 96zm40 288l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm96 0l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm96 0l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zM184 256a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zm232-40a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
    </Icon>
);

export default Robot;