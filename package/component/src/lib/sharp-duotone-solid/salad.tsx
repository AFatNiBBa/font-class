
import { Icon, generic } from "../../index";

/**
 * A component that renders the `salad` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/salad?s=sharp-duotone-solid salad}
 * @preview ![salad](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/salad.svg)
 */
const Salad: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 160c0 53 43 96 96 96l73.4 0L84.7 171.3 73.4 160 96 137.4l11.3 11.3L208 249.4 208 112l0-16 32 0 0 16 0 144 52 0c-2.6-10.2-4-21-4-32c0-70.7 57.3-128 128-128c2.6 0 5.2 .1 7.8 .2C406.2 76.5 380.5 64 352 64c-8.7 0-17.2 1.2-25.3 3.4C309.5 27.7 270 0 224 0s-85.5 27.7-102.7 67.4c-8-2.2-16.5-3.4-25.3-3.4C43 64 0 107 0 160zm320 64c0 11.2 1.9 22 5.5 32l181.1 0c3.5-10 5.5-20.8 5.5-32c0-53-43-96-96-96s-96 43-96 96z" />
        <path d="M512 288L0 288l0 24c0 67 39.2 124.9 96 151.8L96 512l320 0 0-48.2c56.8-27 96-84.8 96-151.8l0-24z" />
    </Icon>
);

export default Salad;