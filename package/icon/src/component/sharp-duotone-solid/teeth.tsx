
import { Icon, generic } from "../../index";

/**
 * A component that renders the `teeth` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/teeth?s=sharp-duotone-solid teeth}
 * @preview ![teeth](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/teeth.svg)
 */
const Teeth: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M48 208l0 48 96 0 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48zm0 80l0 48c0 26.5 21.5 48 48 48s48-21.5 48-48l0-48-96 0zM176 176l0 80 96 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48zm0 112l0 48c0 26.5 21.5 48 48 48s48-21.5 48-48l0-48-96 0zM304 176l0 80 96 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48zm0 112l0 48c0 26.5 21.5 48 48 48s48-21.5 48-48l0-48-96 0zm128-80l0 48 96 0 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48zm0 80l0 48c0 26.5 21.5 48 48 48s48-21.5 48-48l0-48-96 0z" />
        <path d="M0 32l576 0 0 448L0 480 0 32zM176 176l0 80 96 0 0-80c0-26.5-21.5-48-48-48s-48 21.5-48 48zm176-48c-26.5 0-48 21.5-48 48l0 80 96 0 0-80c0-26.5-21.5-48-48-48zM48 208l0 48 96 0 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48zM96 384c26.5 0 48-21.5 48-48l0-48-96 0 0 48c0 26.5 21.5 48 48 48zm80-48c0 26.5 21.5 48 48 48s48-21.5 48-48l0-48-96 0 0 48zm176 48c26.5 0 48-21.5 48-48l0-48-96 0 0 48c0 26.5 21.5 48 48 48zm80-176l0 48 96 0 0-48c0-26.5-21.5-48-48-48s-48 21.5-48 48zm48 176c26.5 0 48-21.5 48-48l0-48-96 0 0 48c0 26.5 21.5 48 48 48z" />
    </Icon>
);

export default Teeth;