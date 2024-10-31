
import { Icon } from "../../index";

/**
 * A component that renders the `accent-grave` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/accent-grave?s=regular accent-grave}
 * @preview ![accent-grave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/accent-grave.svg)
 */
const AccentGrave: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M80 65.3C80 55.8 87.8 48 97.3 48c8.4 0 15.6 6 17 14.3l18.2 102.1L82.9 79.9C81 76.6 80 72.9 80 69.2l0-3.9zm-48 0l0 3.9c0 12.3 3.3 24.4 9.5 35.1l57.3 97.4c8.1 13.8 23 22.3 39 22.3c28.2 0 49.5-25.5 44.6-53.3L161.6 53.8C156.1 22.7 129 0 97.3 0C61.2 0 32 29.2 32 65.3z" />
    </Icon>
);

export default AccentGrave;