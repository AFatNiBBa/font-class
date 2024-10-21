
import { Icon } from "../../index";

/**
 * A component that renders the `slash-back` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-back?s=sharp-solid slash-back}
 * @preview ![slash-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/slash-back.svg)
 */
const SlashBack: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M.1 0L71.2 0 319.9 512l-71.2 0L.1 0z" />
    </Icon>
);

export default SlashBack;