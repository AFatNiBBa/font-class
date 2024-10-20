
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vials` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vials?s=sharp-duotone-solid vials}
 * @preview ![vials](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/vials.svg)
 */
const Vials: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 32l32 0 56 0 48 0 56 0 32 0 0 64-32 0 0 304c0 44.2-35.8 80-80 80s-80-35.8-80-80L32 96 0 96 0 32zM88 96l0 160 0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144 0-160L88 96zM288 32l32 0 56 0 48 0 56 0 32 0 0 64-32 0 0 304c0 44.2-35.8 80-80 80s-80-35.8-80-80l0-304-32 0 0-64zm88 64l0 160 0 144c0 13.3 10.7 24 24 24s24-10.7 24-24l0-144 0-160-48 0z" />
        <path d="M88 256l48 0 0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144zm288 0l48 0 0 144c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-144z" />
    </Icon>
);

export default Vials;