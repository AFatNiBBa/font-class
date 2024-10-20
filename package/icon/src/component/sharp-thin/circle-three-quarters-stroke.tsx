
import { Icon } from "../../index";

/**
 * A component that renders the `circle-three-quarters-stroke` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-three-quarters-stroke?s=sharp-thin circle-three-quarters-stroke}
 * @preview ![circle-three-quarters-stroke](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-three-quarters-stroke.svg)
 */
const CircleThreeQuartersStroke: typeof Icon = x => (
    <Icon {...x}>
        <path d="M495.5 272L248 272l-8 0 0-8 0-247.5C114.9 24.8 16 128.8 16 256c0 132.5 107.5 240 240 240c127.2 0 231.2-98.9 239.5-224zm.5-16C496 123.5 388.5 16 256 16l0 240 240 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default CircleThreeQuartersStroke;