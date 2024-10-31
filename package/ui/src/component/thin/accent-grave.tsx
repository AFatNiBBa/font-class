
import { Icon } from "../../index";

/**
 * A component that renders the `accent-grave` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/accent-grave?s=thin accent-grave}
 * @preview ![accent-grave](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/accent-grave.svg)
 */
const AccentGrave: typeof Icon = x => (
    <Icon viewBox="0 0 192 512" {...x}>
        <path d="M55.6 86.6c-5-7.4-7.6-16.3-7.6-25.3C48 36.4 68.2 16 93 16c21.8 0 40.4 15.6 44.3 37.1l24.2 135.7c1.8 10-5.9 19.3-16.1 19.3c-5.5 0-10.6-2.7-13.6-7.3L55.6 86.6zM42.3 95.5l76.1 114.1c6 9 16.1 14.4 26.9 14.4c20.2 0 35.4-18.2 31.9-38.1L153 50.2C147.8 21.2 122.5 0 93 0C59.3 0 32 27.6 32 61.3c0 12.1 3.6 24.1 10.3 34.2z" />
    </Icon>
);

export default AccentGrave;