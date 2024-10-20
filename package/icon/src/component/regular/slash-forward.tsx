
import { Icon } from "../../index";

/**
 * A component that renders the `slash-forward` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-forward?s=regular slash-forward}
 * @preview ![slash-forward](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/slash-forward.svg)
 */
const SlashForward: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M308.1 3.3c11.4 6.7 15.3 21.4 8.6 32.8l-272 464c-6.7 11.4-21.4 15.3-32.8 8.6S-3.4 487.3 3.3 475.9l272-464C282 .4 296.7-3.4 308.1 3.3z" />
    </Icon>
);

export default SlashForward;