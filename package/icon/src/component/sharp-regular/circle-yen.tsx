
import { Icon } from "../../index";

/**
 * A component that renders the `circle-yen` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-yen?s=sharp-regular circle-yen}
 * @preview ![circle-yen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-yen.svg)
 */
const CircleYen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM137.5 144l61 0L256 217.2 313.5 144l61 0-11.7 14.8L286.5 256l33.5 0 16 0 0 32-16 0-40 0 0 32 40 0 16 0 0 32-16 0-40 0 0 25 0 24-48 0 0-24 0-25-40 0-16 0 0-32 16 0 40 0 0-32-40 0-16 0 0-32 16 0 33.5 0-76.3-97.2L137.5 144z" />
    </Icon>
);

export default CircleYen;