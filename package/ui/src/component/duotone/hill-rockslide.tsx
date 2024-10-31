
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hill-rockslide` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hill-rockslide?s=duotone hill-rockslide}
 * @preview ![hill-rockslide](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hill-rockslide.svg)
 */
const HillRockslide: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M192 64a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm60.4 24.2l27-48c2.8-5 8.2-8.2 13.9-8.2l53.3 0c5.8 0 11.1 3.1 13.9 8.2l27 48c2.7 4.9 2.7 10.8 0 15.7l-27 48c-2.8 5-8.2 8.2-13.9 8.2l-53.3 0c-5.8 0-11.1-3.1-13.9-8.2l-27-48c-2.7-4.9-2.7-10.8 0-15.7zM416 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm32 53.4c0-5.8 3.1-11.1 8.2-13.9l48-27c4.9-2.7 10.8-2.7 15.7 0l48 27c5 2.8 8.2 8.2 8.2 13.9l0 53.3c0 5.8-3.1 11.1-8.2 13.9l-48 27c-2.4 1.4-5.1 2.1-7.8 2.1s-5.4-.7-7.8-2.1l-48-27c-5-2.8-8.2-8.2-8.2-13.9l0-53.3z" />
        <path d="M54.6 73.4c-9.2-9.2-22.9-11.9-34.9-6.9S0 83.1 0 96L0 480c0 17.7 14.3 32 32 32l384 0c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-384-384z" />
    </Icon>
);

export default HillRockslide;