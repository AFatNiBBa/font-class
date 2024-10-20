
import { Icon } from "../../index";

/**
 * A component that renders the `circle-divide` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-divide?s=thin circle-divide}
 * @preview ![circle-divide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-divide.svg)
 */
const CircleDivide: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM240 160a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM152 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l208 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-208 0zm104 88a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default CircleDivide;