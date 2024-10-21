
import { Icon } from "../../index";

/**
 * A component that renders the `slash-back` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-back?s=thin slash-back}
 * @preview ![slash-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/slash-back.svg)
 */
const SlashBack: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M3.8 1.2C.1 3.5-1.1 8.4 1.2 12.2l304 496c2.3 3.8 7.2 5 11 2.6s4.9-7.2 2.6-11L14.8 3.8C12.5 .1 7.6-1.1 3.8 1.2z" />
    </Icon>
);

export default SlashBack;