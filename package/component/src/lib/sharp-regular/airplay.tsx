
import { Icon } from "../../index";

/**
 * A component that renders the `airplay` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/airplay?s=sharp-regular airplay}
 * @preview ![airplay](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/airplay.svg)
 */
const Airplay: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M48 80l480 0 0 288-103.3 0 44.7 40.2 8.7 7.8 49.9 0 48 0 0-48 0-288 0-48-48 0L48 32 0 32 0 80 0 368l0 48 48 0 49.9 0 8.7-7.8L151.3 368 48 368 48 80zm80 400l48 0 224 0 48 0 0-48L288 288 128 432l0 48zM288 352.6L376.2 432l-176.5 0L288 352.6z" />
    </Icon>
);

export default Airplay;