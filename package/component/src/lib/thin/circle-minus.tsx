
import { Icon } from "../../index";

/**
 * A component that renders the `circle-minus` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-minus?s=thin circle-minus}
 * @preview ![circle-minus](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-minus.svg)
 */
const CircleMinus: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l192 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-192 0z" />
    </Icon>
);

export default CircleMinus;