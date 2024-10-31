
import { Icon } from "../../index";

/**
 * A component that renders the `circle-v` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-v?s=sharp-solid circle-v}
 * @preview ![circle-v](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-v.svg)
 */
const CircleV: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM383.9 144L278 385.6 271.7 400l-31.4 0L234 385.6 128.1 144l52.4 0L256 316.2 331.5 144l52.4 0z" />
    </Icon>
);

export default CircleV;