
import { Icon } from "../../index";

/**
 * A component that renders the `share` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/share?s=sharp-thin share}
 * @preview ![share](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/share.svg)
 */
const Share: typeof Icon = x => (
    <Icon {...x}>
        <path d="M97.2 464.3C114.9 475.1 128 480 128 480s-10-10-18.8-27.2C102.2 439.2 96 421.2 96 400c0-61.9 50.1-112 112-112l64 0 16 0 0 16 0 64 0 16 16 0 16 0L500.2 218.9 512 208l-11.8-10.9L320 32l-16 0-16 0 0 16 0 64 0 16-16 0-96 0C78.8 128 0 206.8 0 304c0 87.1 59.3 137.2 97.2 160.3zM85.6 437c-3.6-2.8-7.3-5.8-11-9C44.8 401.9 16 362 16 304c0-88.4 71.6-160 160-160l112 0 16 0 0-16 0-80 9.8 0L488.3 208 313.8 368l-9.8 0 0-80 0-16-16 0-80 0c-70.7 0-128 57.3-128 128c0 13.6 2.2 26 5.6 37z" />
    </Icon>
);

export default Share;