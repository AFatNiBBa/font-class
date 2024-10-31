
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lightbulb-cfl` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lightbulb-cfl?s=sharp-duotone-solid lightbulb-cfl}
 * @preview ![lightbulb-cfl](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lightbulb-cfl.svg)
 */
const LightbulbCfl: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 96 160 64l0-64L0 32zm0 96l0 64 320-64 0-64L0 128zm0 96l0 64 320-64 0-64L0 224zm96 77.4L96 384l48 0 0-92.2-48 9.6zm80-16.6l0 35.2 0 28.8 0 35.2 48 0 0-44.8L320 320l0-64L176 284.8z" />
        <path d="M256 384L64 384l0 96 64 0 0 32 64 0 0-32 64 0 0-96z" />
    </Icon>
);

export default LightbulbCfl;