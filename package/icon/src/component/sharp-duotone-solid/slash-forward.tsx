
import { Icon, generic } from "../../index";

/**
 * A component that renders the `slash-forward` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-forward?s=sharp-duotone-solid slash-forward}
 * @preview ![slash-forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/slash-forward.svg)
 */
const SlashForward: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M319.9 0L248.8 0 .1 512l71.2 0L319.9 0z" />
    </Icon>
);

export default SlashForward;