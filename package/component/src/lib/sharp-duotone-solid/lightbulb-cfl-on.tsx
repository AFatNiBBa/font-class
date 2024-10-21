
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lightbulb-cfl-on` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-cfl-on?s=sharp-duotone-solid lightbulb-cfl-on}
 * @preview ![lightbulb-cfl-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lightbulb-cfl-on.svg)
 */
const LightbulbCflOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M160 32l0 64L320 64l0-64L160 32zm0 96l0 64 320-64 0-64L160 128zm0 96l0 64 320-64 0-64L160 224zm96 77.4l0 82.6 48 0 0-92.2-48 9.6zm80-16.6l0 35.2 0 28.8 0 35.2 48 0 0-44.8L480 320l0-64L336 284.8z" />
        <path d="M55.3 16l6 4 24 16 20 13.3L78.7 89.3 58.7 76l-24-16-6-4L8.7 42.7 35.3 2.7 55.3 16zM611.3 56l-6 4-24 16-20 13.3L534.7 49.3l20-13.3 24-16 6-4 20-13.3 26.6 39.9L611.3 56zM24 160l50 0 24 0 0 48-24 0-50 0L0 208l0-48 24 0zm542 0l50 0 24 0 0 48-24 0-50 0-24 0 0-48 24 0zM85.3 332l-24 16-6 4-20 13.3L8.7 325.3l20-13.3 6-4 24-16 20-13.3 26.6 39.9L85.3 332zm496-39.9l24 16 6 4 20 13.3-26.6 39.9-20-13.3-6-4-24-16-20-13.3 26.6-39.9 20 13.3zM224 384l192 0 0 96-64 0 0 32-64 0 0-32-64 0 0-96z" />
    </Icon>
);

export default LightbulbCflOn;