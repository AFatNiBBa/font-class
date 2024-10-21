
import { Icon } from "../../index";

/**
 * A component that renders the `slash-forward` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-forward?s=light slash-forward}
 * @preview ![slash-forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/slash-forward.svg)
 */
const SlashForward: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M312.2 2.3c7.6 4.5 10 14.4 5.5 22l-288 480c-4.5 7.6-14.4 10-22 5.5s-10-14.4-5.5-22l288-480c4.5-7.6 14.4-10 22-5.5z" />
    </Icon>
);

export default SlashForward;