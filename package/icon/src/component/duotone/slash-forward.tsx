
import { Icon, generic } from "../../index";

/**
 * A component that renders the `slash-forward` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-forward?s=duotone slash-forward}
 * @preview ![slash-forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/slash-forward.svg)
 */
const SlashForward: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M303.9 4.2c15.3 8.8 20.7 28.3 11.9 43.7l-256 448c-8.8 15.3-28.3 20.7-43.7 11.9S-4.6 479.5 4.2 464.1l256-448C269 .8 288.5-4.6 303.9 4.2z" />
    </Icon>
);

export default SlashForward;