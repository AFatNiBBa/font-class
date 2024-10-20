
import { Icon } from "../../index";

/**
 * A component that renders the `circle-u` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-u?s=thin circle-u}
 * @preview ![circle-u](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-u.svg)
 */
const CircleU: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM160 152c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 136c0 61.9 50.1 112 112 112s112-50.1 112-112l0-136c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 136c0 53-43 96-96 96s-96-43-96-96l0-136z" />
    </Icon>
);

export default CircleU;