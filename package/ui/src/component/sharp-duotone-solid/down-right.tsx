
import { Icon, generic } from "../../index";

/**
 * A component that renders the `down-right` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-right?s=sharp-duotone-solid down-right}
 * @preview ![down-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/down-right.svg)
 */
const DownRight: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 144L152 296l80-80L80 64 0 144z" />
        <path d="M368 432V144l-32-32L48 400l32 32H368z" />
    </Icon>
);

export default DownRight;