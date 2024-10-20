
import { Icon } from "../../index";

/**
 * A component that renders the `slash-back` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-back?s=sharp-regular slash-back}
 * @preview ![slash-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/slash-back.svg)
 */
const SlashBack: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M9 0L62.3 0 311 512l-53.4 0L9 0z" />
    </Icon>
);

export default SlashBack;