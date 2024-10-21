
import { Icon, generic } from "../../index";

/**
 * A component that renders the `smog` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/smog?s=duotone smog}
 * @preview ![smog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/smog.svg)
 */
const Smog: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 488c0 13.3 10.7 24 24 24l336 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 464c-13.3 0-24 10.7-24 24zm72-96c0 13.3 10.7 24 24 24l104 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L96 368c-13.3 0-24 10.7-24 24zm184 0c0 13.3 10.7 24 24 24l336 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-336 0c-13.3 0-24 10.7-24 24zm160 96c0 13.3 10.7 24 24 24l112 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24z" />
        <path d="M176 288C96.5 288 32 223.5 32 144S96.5 0 176 0c34.5 0 66.1 12.1 90.9 32.3C289.6 12.2 319.4 0 352 0c49.1 0 91.8 27.7 113.2 68.3C475 65.5 485.3 64 496 64c61.9 0 112 50.1 112 112s-50.1 112-112 112l-27.3 0c-22.6 19.9-52.2 32-84.7 32s-62.1-12.1-84.7-32L176 288z" />
    </Icon>
);

export default Smog;