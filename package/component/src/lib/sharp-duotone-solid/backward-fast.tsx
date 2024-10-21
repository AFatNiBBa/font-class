
import { Icon, generic } from "../../index";

/**
 * A component that renders the `backward-fast` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/backward-fast?s=sharp-duotone-solid backward-fast}
 * @preview ![backward-fast](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/backward-fast.svg)
 */
const BackwardFast: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64L0 96 0 416l0 32 64 0 0-32 0-136 0-48L64 96l0-32L0 64z" />
        <path d="M64 280L288 448l0-168L512 448l0-384L288 232l0-168L64 232l0 48z" />
    </Icon>
);

export default BackwardFast;