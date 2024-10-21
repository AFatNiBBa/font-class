
import { Icon } from "../../index";

/**
 * A component that renders the `slash-forward` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-forward?s=sharp-thin slash-forward}
 * @preview ![slash-forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/slash-forward.svg)
 */
const SlashForward: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M319.6 0L301 0 .4 512 19 512 319.6 0z" />
    </Icon>
);

export default SlashForward;