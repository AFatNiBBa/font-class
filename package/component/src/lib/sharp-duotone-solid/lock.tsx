
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lock` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lock?s=sharp-duotone-solid lock}
 * @preview ![lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/lock.svg)
 */
const Lock: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M80 144l0 48 64 0 0-48c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 64 0 0-48C368 64.5 303.5 0 224 0S80 64.5 80 144z" />
        <path d="M0 192H448V512H0V192z" />
    </Icon>
);

export default Lock;