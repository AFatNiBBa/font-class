
import { Icon } from "../../index";

/**
 * A component that renders the `b` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/b?s=sharp-light b}
 * @preview ![b](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/b.svg)
 */
const B: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16 32L0 32 0 48 0 224l0 16 0 16L0 464l0 16 16 0 176 0c70.7 0 128-57.3 128-128c0-52.8-32-98.2-77.7-117.7C270 213.9 288 181 288 144c0-61.9-50.1-112-112-112L16 32zM192 256c53 0 96 43 96 96s-43 96-96 96L32 448l0-192 144 0 16 0zm-16-32L32 224 32 64l144 0c44.2 0 80 35.8 80 80s-35.8 80-80 80z" />
    </Icon>
);

export default B;