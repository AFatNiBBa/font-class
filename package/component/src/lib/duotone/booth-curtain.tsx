
import { Icon, generic } from "../../index";

/**
 * A component that renders the `booth-curtain` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/booth-curtain?s=duotone booth-curtain}
 * @preview ![booth-curtain](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/booth-curtain.svg)
 */
const BoothCurtain: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0l96 0 0 64L64 64l0 416c0 17.7-14.3 32-32 32s-32-14.3-32-32L0 64zM448 0c35.3 0 64 28.7 64 64l0 416c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-80 0-336 0-64z" />
        <path d="M160 0l96 0 96 0 96 0 0 400c0 26.5-21.5 48-48 48s-48-21.5-48-48c0 26.5-21.5 48-48 48s-48-21.5-48-48c0 26.5-21.5 48-48 48s-48-21.5-48-48L160 0z" />
    </Icon>
);

export default BoothCurtain;