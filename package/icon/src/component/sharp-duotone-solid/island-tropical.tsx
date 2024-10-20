
import { Icon, generic } from "../../index";

/**
 * A component that renders the `island-tropical` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/island-tropical?s=sharp-duotone-solid island-tropical}
 * @preview ![island-tropical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/island-tropical.svg)
 */
const IslandTropical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M224 352l64 0c1 0 2 0 3 0s2 .1 3 .1c2 .1 3.9 .2 5.9 .4c3.9 .4 7.7 .9 11.5 1.6c11.3-55.9 18.2-146.2-9.9-226.1l-24.7 0c-10 10-20 20-30 30c6.6 43.1 6.9 114.7-22.8 194z" />
        <path d="M62.2 96L112 96l32-32 30.6 30.6c-1.4 1.3-2.7 2.6-4.1 3.9c-63.4 63.4-48.1 132.9-22.6 158.4L276.8 128 384 128l32-32 32 32 64 0c0-36-38.4-96-128-96c-33.8 0-60.4 8.6-80.3 21.2C285.2 25.5 248.6 0 190.2 0c-89.6 0-128 60-128 96zM160 352C89.3 352 32 409.3 32 480l0 32 384 0 0-32c0-70.7-57.3-128-128-128l-128 0z" />
    </Icon>
);

export default IslandTropical;