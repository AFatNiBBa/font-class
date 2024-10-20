
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dreidel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dreidel?s=sharp-duotone-solid dreidel}
 * @preview ![dreidel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dreidel.svg)
 */
const Dreidel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M89.4 153.4L326.6 390.6c26.7-26.7 53.3-53.3 80-80L429.3 288l-22.6-22.6L333.3 192l89.4-89.4L445.3 80 400 34.7 377.4 57.4 288 146.7 214.6 73.4 192 50.7 169.4 73.4c-26.7 26.7-53.3 53.3-80 80z" />
        <path d="M326.6 390.6L89.4 153.4l-80 80L0 242.7 0 256 0 448l0 32 32 0 192 0 13.3 0 9.4-9.4 80-80z" />
    </Icon>
);

export default Dreidel;