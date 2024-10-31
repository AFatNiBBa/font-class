
import { Icon, generic } from "../../index";

/**
 * A component that renders the `ski-boot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ski-boot?s=duotone ski-boot}
 * @preview ![ski-boot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/ski-boot.svg)
 */
const SkiBoot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 480c0-2 .2-4 .6-6c1.7-8.7 3.3-17.3 5-26L480 448c17.7 0 32 14.3 32 32c0 17.7-14.3 32-31.9 32L31.9 512c-9.5 0-18.5-4.3-24.6-11.6C2.6 494.6 0 487.4 0 480zM35.4 292.8C50.5 214.5 65.5 136.3 80.6 58C83.5 42.9 96.7 32 112 32l117.4 0C194.3 234.8 81.1 282 35.4 292.8z" />
        <path d="M358 .6c17.4 3.3 28.7 20.1 25.4 37.5l-6.2 32L360 160l-72 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l65.8 0-12.3 64L272 256c-8.8 0-16 7.2-16 16s7.2 16 16 16l68 0 122 59.2c11 5.4 18 16.5 18 28.8l0 72L5.6 448 35.4 292.8c45.7-10.8 158.9-58 194-260.8l90 0 1.2-6C323.9 8.6 340.7-2.8 358 .6z" />
    </Icon>
);

export default SkiBoot;