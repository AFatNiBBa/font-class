
import { Icon, generic } from "../../index";

/**
 * A component that renders the `chair-office` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/chair-office?s=sharp-duotone-solid chair-office}
 * @preview ![chair-office](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/chair-office.svg)
 */
const ChairOffice: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 0l0 288 256 0L352 0 96 0zm32 448l0 64 32 0 64 0 64 0 32 0 0-64-32 0-32 0 0-32 0-32-64 0 0 32 0 32-32 0-32 0z" />
        <path d="M64 160l0 64 0 32L0 256l0-32 0-64 0-32 64 0 0 32zm384 0l0 64 0 32-64 0 0-32 0-64 0-32 64 0 0 32zM32 384l0-32 32-64 320 0 32 64 0 32L32 384z" />
    </Icon>
);

export default ChairOffice;