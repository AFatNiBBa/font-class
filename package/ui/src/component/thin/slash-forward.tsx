
import { Icon } from "../../index";

/**
 * A component that renders the `slash-forward` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-forward?s=thin slash-forward}
 * @preview ![slash-forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/slash-forward.svg)
 */
const SlashForward: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M316.2 1.2c3.8 2.3 4.9 7.2 2.6 11l-304 496c-2.3 3.8-7.2 5-11 2.6s-4.9-7.2-2.6-11l304-496c2.3-3.8 7.2-4.9 11-2.6z" />
    </Icon>
);

export default SlashForward;