
import { Icon, generic } from "../../index";

/**
 * A component that renders the `weight-hanging` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/weight-hanging?s=sharp-duotone-solid weight-hanging}
 * @preview ![weight-hanging](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/weight-hanging.svg)
 */
const WeightHanging: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M160 96c0 11.2 1.9 22 5.5 32l81 0c-12.7-4.4-22-17-22.4-31c0-.3 0-.7 0-1c0-17.7 14.3-32 32-32s32 14.3 32 32c0 .3 0 .6 0 .8c-.4 14-9.7 26.8-22.4 31.2l81 0c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96z" />
        <path d="M0 512L88 128H424l88 384H0z" />
    </Icon>
);

export default WeightHanging;