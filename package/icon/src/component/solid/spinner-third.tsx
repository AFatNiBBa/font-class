
import { Icon } from "../../index";

/**
 * A component that renders the `spinner-third` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-third?s=solid spinner-third}
 * @preview ![spinner-third](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/spinner-third.svg)
 */
const SpinnerThird: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 32c0-17.7 14.3-32 32-32C397.4 0 512 114.6 512 256c0 46.6-12.5 90.4-34.3 128c-8.8 15.3-28.4 20.5-43.7 11.7s-20.5-28.4-11.7-43.7c16.3-28.2 25.7-61 25.7-96c0-106-86-192-192-192c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default SpinnerThird;