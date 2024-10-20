
import { Icon } from "../../index";

/**
 * A component that renders the `circle-yen` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-yen?s=sharp-solid circle-yen}
 * @preview ![circle-yen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-yen.svg)
 */
const CircleYen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM137.5 144l61 0L256 217.2 313.5 144l61 0-11.7 14.8L286.5 256l33.5 0 16 0 0 32-16 0-40 0 0 32 40 0 16 0 0 32-16 0-40 0 0 25 0 24-48 0 0-24 0-25-40 0-16 0 0-32 16 0 40 0 0-32-40 0-16 0 0-32 16 0 33.5 0-76.4-97.2L137.5 144z" />
    </Icon>
);

export default CircleYen;