
import { Icon } from "../../index";

/**
 * A component that renders the `right-left-large` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-left-large?s=sharp-solid right-left-large}
 * @preview ![right-left-large](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/right-left-large.svg)
 */
const RightLeftLarge: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M154.7 512L0 357.3V314.7L154.7 160H256v64H448v64h10.7l112-112L458.7 64H448v64H288V64h96V0H485.3L640 154.7v42.5L485.3 352H384V288H192V224H181.3L69.3 336l112 112H192V384H352v64H256v64H154.7z" />
    </Icon>
);

export default RightLeftLarge;