
import { Icon } from "../../index";

/**
 * A component that renders the `slash-back` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-back?s=sharp-light slash-back}
 * @preview ![slash-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/slash-back.svg)
 */
const SlashBack: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M1.8 0L38.3 0 318.2 512l-36.5 0L1.8 0z" />
    </Icon>
);

export default SlashBack;