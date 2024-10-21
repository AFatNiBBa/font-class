
import { Icon } from "../../index";

/**
 * A component that renders the `accent-grave` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/accent-grave?s=sharp-solid accent-grave}
 * @preview ![accent-grave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/accent-grave.svg)
 */
const AccentGrave: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M144 0l32 224H112L32 0H144z" />
    </Icon>
);

export default AccentGrave;