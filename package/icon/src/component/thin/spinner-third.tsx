
import { Icon } from "../../index";

/**
 * A component that renders the `spinner-third` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-third?s=thin spinner-third}
 * @preview ![spinner-third](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/spinner-third.svg)
 */
const SpinnerThird: typeof Icon = x => (
    <Icon {...x}>
        <path d="M470.8 380c3.8 2.2 8.7 .9 10.8-3C501 341 512 299.8 512 256C512 117.3 401.7 4.4 264 .1c-4.4-.1-8 3.5-8 7.9s3.6 8 8 8.1c128.8 4.2 232 110 232 239.9c0 40.9-10.2 79.3-28.2 113c-2.1 3.9-.8 8.8 3 11z" />
    </Icon>
);

export default SpinnerThird;