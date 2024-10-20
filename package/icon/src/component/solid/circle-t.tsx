
import { Icon } from "../../index";

/**
 * A component that renders the `circle-t` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-t?s=solid circle-t}
 * @preview ![circle-t](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-t.svg)
 */
const CircleT: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM152 144l104 0 104 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0 0 168c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-168-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z" />
    </Icon>
);

export default CircleT;