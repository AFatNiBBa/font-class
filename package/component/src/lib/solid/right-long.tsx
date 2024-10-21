
import { Icon } from "../../index";

/**
 * A component that renders the `right-long` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-long?s=solid right-long}
 * @preview ![right-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/right-long.svg)
 */
const RightLong: typeof Icon = x => (
    <Icon {...x}>
        <path d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z" />
    </Icon>
);

export default RightLong;