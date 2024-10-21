
import { Icon } from "../../index";

/**
 * A component that renders the `circle-sort` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-sort?s=sharp-solid circle-sort}
 * @preview ![circle-sort](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-sort.svg)
 */
const CircleSort: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144-64l0 32 224 0 0-32L256 96 144 192zM256 416l112-96 0-32-224 0 0 32 112 96z" />
    </Icon>
);

export default CircleSort;