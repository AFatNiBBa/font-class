
import { Icon } from "../../index";

/**
 * A component that renders the `circle-arrow-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-arrow-up?s=light circle-arrow-up}
 * @preview ![circle-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-arrow-up.svg)
 */
const CircleArrowUp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 212.7l-96-96c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L240 166.6 240 368c0 8.8 7.2 16 16 16s16-7.2 16-16l0-201.4 68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6z" />
    </Icon>
);

export default CircleArrowUp;