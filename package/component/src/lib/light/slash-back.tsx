
import { Icon } from "../../index";

/**
 * A component that renders the `slash-back` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/slash-back?s=light slash-back}
 * @preview ![slash-back](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/slash-back.svg)
 */
const SlashBack: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M7.8 2.3c-7.6 4.5-10 14.4-5.5 22l288 480c4.5 7.6 14.4 10 22 5.5s10-14.4 5.5-21.9L29.7 7.8c-4.5-7.6-14.4-10-22-5.5z" />
    </Icon>
);

export default SlashBack;