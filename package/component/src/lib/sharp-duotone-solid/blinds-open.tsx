
import { Icon, generic } from "../../index";

/**
 * A component that renders the `blinds-open` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/blinds-open?s=sharp-duotone-solid blinds-open}
 * @preview ![blinds-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/blinds-open.svg)
 */
const BlindsOpen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 192l128 0 0-64-88 0L0 192zM0 352l144 0c-26.5 0-48-21.5-48-48c0-.7 0-1.4 0-2.1s.1-1.4 .1-2.1c.1-1.4 .3-2.7 .5-4.1c.5-2.7 1.1-5.3 2-7.8L40 288 0 352zM0 512l512 0-40-64L40 448 0 512zM144 352l368 0-40-64-282.7 0c1.8 5 2.7 10.4 2.7 16c0 26.5-21.5 48-48 48zm16-224l0 64 352 0-40-64-312 0z" />
        <path d="M32 0L0 0 0 64l32 0 96 0 0 194.7c-18.6 6.6-32 24.4-32 45.3c0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.7-32-45.3L160 64l320 0 32 0 0-64L480 0 32 0z" />
    </Icon>
);

export default BlindsOpen;