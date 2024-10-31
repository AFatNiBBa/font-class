
import { Icon } from "../../index";

/**
 * A component that renders the `circle-gf` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-gf?s=sharp-light circle-gf}
 * @preview ![circle-gf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-gf.svg)
 */
const CircleGf: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256A224 224 0 1 0 32 256a224 224 0 1 0 448 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM192 128c35.3 0 64 28.7 64 64l0 8 0 16-32 0 0-16 0-8c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-32-16 0-16 0 0-32 16 0 32 0 16 0 0 16 0 48c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-128c0-35.3 28.7-64 64-64zm96 0l16 0 64 0 16 0 0 32-16 0-48 0 0 96 32 0 16 0 0 32-16 0-32 0 0 80 0 16-32 0 0-16 0-224 0-16z" />
    </Icon>
);

export default CircleGf;