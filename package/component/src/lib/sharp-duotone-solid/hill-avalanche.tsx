
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hill-avalanche` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hill-avalanche?s=sharp-duotone-solid hill-avalanche}
 * @preview ![hill-avalanche](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hill-avalanche.svg)
 */
const HillAvalanche: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M128 80c0 4 .5 7.9 1.4 11.6L439.7 401.9c34.2 23.1 81.1 19.5 111.4-10.8c17.2-17.2 25.8-39.7 25.8-62.2s-8.6-45-25.8-62.2c-34.4-34.4-90.1-34.4-124.5 0l33.9 33.9c15.6-15.6 40.9-15.6 56.6 0s15.6 40.9 0 56.6s-40.9 15.6-56.6 0l-81.7-81.7C401.2 261.3 416 236.4 416 208c0-33.9-21.1-62.9-50.9-74.5c1.9-6.8 2.9-14 2.9-21.5c0-44.2-35.8-80-80-80c-27.3 0-51.5 13.7-65.9 34.6C216.3 46.6 197.9 32 176 32c-26.5 0-48 21.5-48 48zM416 64a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm32 96a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M480 512H0V32L480 512z" />
    </Icon>
);

export default HillAvalanche;