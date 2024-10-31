
import { Icon } from "../../index";

/**
 * A component that renders the `accent-grave` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/accent-grave?s=light accent-grave}
 * @preview ![accent-grave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/accent-grave.svg)
 */
const AccentGrave: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M64 65.3C64 46.9 78.9 32 97.3 32c16.1 0 30 11.6 32.8 27.5l22.5 126.2c.6 3.3-1.9 6.3-5.3 6.3c-1.7 0-3.4-.8-4.4-2.3L70.4 86.9C66.2 81 64 74 64 66.8l0-1.5zm-32 0l0 1.5c0 13.8 4.3 27.3 12.2 38.5l72.6 102.9c7 9.9 18.4 15.8 30.5 15.8c23.3 0 40.9-21 36.8-43.9L161.6 53.8C156.1 22.7 129 0 97.3 0C61.2 0 32 29.2 32 65.3z" />
    </Icon>
);

export default AccentGrave;