
import { Icon } from "../../index";

/**
 * A component that renders the `slash-back` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-back?s=sharp-thin slash-back}
 * @preview ![slash-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/slash-back.svg)
 */
const SlashBack: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M.4 0L19 0 319.6 512 301 512 .4 0z" />
    </Icon>
);

export default SlashBack;