
import { Icon } from "../../index";

/**
 * A component that renders the `slash-back` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-back?s=regular slash-back}
 * @preview ![slash-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/slash-back.svg)
 */
const SlashBack: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M11.9 3.3C.4 10-3.4 24.7 3.3 36.1l272 464c6.7 11.4 21.4 15.3 32.8 8.6s15.3-21.4 8.6-32.8l-272-464C38 .4 23.3-3.4 11.9 3.3z" />
    </Icon>
);

export default SlashBack;