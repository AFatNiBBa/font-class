
import { Icon } from "../../index";

/**
 * A component that renders the `slash-back` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-back?s=solid slash-back}
 * @preview ![slash-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/slash-back.svg)
 */
const SlashBack: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M16.1 4.2C.8 13-4.6 32.5 4.2 47.9l256 448c8.8 15.3 28.3 20.7 43.7 11.9s20.7-28.3 11.9-43.7l-256-448C51 .8 31.5-4.6 16.1 4.2z" />
    </Icon>
);

export default SlashBack;