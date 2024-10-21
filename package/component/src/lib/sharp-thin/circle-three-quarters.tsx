
import { Icon } from "../../index";

/**
 * A component that renders the `circle-three-quarters` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters?s=sharp-thin circle-three-quarters}
 * @preview ![circle-three-quarters](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-three-quarters.svg)
 */
const CircleThreeQuarters: typeof Icon = x => (
    <Icon {...x}>
        <path d="M240 272l0-16 0-239.5C114.9 24.8 16 128.8 16 256c0 132.5 107.5 240 240 240c127.2 0 231.2-98.9 239.5-224L256 272l-16 0zm271.5 0C503.2 405.9 392 512 256 512C114.6 512 0 397.4 0 256C0 120 106.1 8.8 240 .5c5.3-.3 10.6-.5 16-.5l0 16 0 224 0 16 16 0 224 0 16 0c0 5.4-.2 10.7-.5 16z" />
    </Icon>
);

export default CircleThreeQuarters;