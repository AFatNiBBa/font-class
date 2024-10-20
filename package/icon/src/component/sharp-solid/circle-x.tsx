
import { Icon } from "../../index";

/**
 * A component that renders the `circle-x` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-x?s=sharp-solid circle-x}
 * @preview ![circle-x](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-x.svg)
 */
const CircleX: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM381.1 128L285.9 256l95.2 128-59.8 0L256 296.2 190.7 384l-59.8 0 95.2-128L130.9 128l59.8 0L256 215.8 321.3 128l59.8 0z" />
    </Icon>
);

export default CircleX;