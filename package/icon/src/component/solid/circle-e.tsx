
import { Icon } from "../../index";

/**
 * A component that renders the `circle-e` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-e?s=solid circle-e}
 * @preview ![circle-e](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/circle-e.svg)
 */
const CircleE: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 128l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-120 0 0 56 88 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-88 0 0 56 120 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24l0-104 0-104c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default CircleE;