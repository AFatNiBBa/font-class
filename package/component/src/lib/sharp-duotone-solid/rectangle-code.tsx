
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-code` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-code?s=sharp-duotone-solid rectangle-code}
 * @preview ![rectangle-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/rectangle-code.svg)
 */
const RectangleCode: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32L0 480l512 0 0-448L0 32zM94.1 256l17-17 64-64 17-17c11.3 11.3 22.6 22.6 33.9 33.9l-17 17-47 47c15.7 15.7 31.4 31.4 47 47c5.7 5.7 11.3 11.3 17 17c-11.3 11.3-22.6 22.6-33.9 33.9l-17-17c-21.3-21.3-42.7-42.7-64-64l-17-17zm192-64L320 158.1c5.7 5.7 11.3 11.3 17 17c21.3 21.3 42.7 42.7 64 64c5.7 5.7 11.3 11.3 17 17c-5.7 5.7-11.3 11.3-17 17c-21.3 21.3-42.7 42.7-64 64l-17 17c-11.3-11.3-22.6-22.6-33.9-33.9c5.7-5.7 11.3-11.3 17-17c15.7-15.7 31.4-31.4 47-47c-15.7-15.7-31.4-31.4-47-47c-5.7-5.7-11.3-11.3-17-17z" />
        <path d="M225.9 192l-17 17-47 47 47 47 17 17L192 353.9l-17-17-64-64-17-17 17-17 64-64 17-17L225.9 192zM320 158.1l17 17 64 64 17 17-17 17-64 64-17 17L286.1 320l17-17 47-47-47-47-17-17L320 158.1z" />
    </Icon>
);

export default RectangleCode;