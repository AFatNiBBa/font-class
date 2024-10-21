
import { Icon } from "../../index";

/**
 * A component that renders the `up-long` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-long?s=sharp-thin up-long}
 * @preview ![up-long](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/up-long.svg)
 */
const UpLong: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M120 176l0 16 0 304 80 0 0-304 0-16 16 0 88 0 0-9.4L160 22.6 16 166.6l0 9.4 88 0 16 0zM0 160L148.7 11.3 160 0l11.3 11.3L320 160l0 16 0 16-16 0-72 0-16 0 0 16 0 288 0 16-16 0-80 0-16 0 0-16 0-288 0-16-16 0-72 0L0 192l0-16 0-16z" />
    </Icon>
);

export default UpLong;