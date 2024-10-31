
import { Icon, generic } from "../../index";

/**
 * A component that renders the `h3` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/h3?s=duotone h3}
 * @preview ![h3](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/h3.svg)
 */
const H3: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 256 0 416c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128 192 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-160 0-160c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128L64 224 64 96c0-17.7-14.3-32-32-32S0 78.3 0 96z" />
        <path d="M368 96c0-17.7 14.3-32 32-32l192 0c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9l-89.5 89.5C589 210.8 640 263.4 640 328c0 66.3-53.7 120-120 120l-64.6 0c-43 0-79.7-31.1-86.8-73.5l-.2-1.2c-2.9-17.4 8.9-33.9 26.3-36.8s33.9 8.9 36.8 26.3l.2 1.2c1.9 11.6 11.9 20.1 23.7 20.1l64.6 0c30.9 0 56-25.1 56-56s-25.1-56-56-56l-72 0c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L514.7 128 400 128c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default H3;