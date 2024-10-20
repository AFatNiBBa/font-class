
import { Icon } from "../../index";

/**
 * A component that renders the `dreidel` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dreidel?s=sharp-solid dreidel}
 * @preview ![dreidel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/dreidel.svg)
 */
const Dreidel: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M422.6 102.6L445.3 80 400 34.7 377.4 57.4 288 146.7 214.6 73.4 192 50.7 169.4 73.4l-68.7 68.7L337.9 379.3l68.7-68.7L429.3 288l-22.6-22.6L333.3 192l89.4-89.4zM315.3 401.9L78.1 164.7 9.4 233.4 0 242.7 0 256 0 448l0 32 32 0 192 0 13.3 0 9.4-9.4 68.7-68.7z" />
    </Icon>
);

export default Dreidel;