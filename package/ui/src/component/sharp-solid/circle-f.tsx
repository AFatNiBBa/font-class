
import { Icon } from "../../index";

/**
 * A component that renders the `circle-f` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-f?s=sharp-solid circle-f}
 * @preview ![circle-f](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-f.svg)
 */
const CircleF: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128l144 0 24 0 0 48-24 0-120 0 0 64 88 0 24 0 0 48-24 0-88 0 0 72 0 24-48 0 0-24 0-96 0-112 0-24 24 0z" />
    </Icon>
);

export default CircleF;