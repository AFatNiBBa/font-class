
import { Icon } from "../../index";

/**
 * A component that renders the `bong` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bong?s=sharp-solid bong}
 * @preview ![bong](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/bong.svg)
 */
const Bong: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M128 273.1c-19.5 11.3-35.7 27.5-46.9 46.9l221.8 0c-11.2-19.4-27.4-35.6-46.9-46.9l-32-18.5 0-36.9L224 64l-64 0 0 153.7 0 36.9-32 18.5zm228.6 12.2C374 314.1 384 347.9 384 384c0 49.2-18.5 94-48.9 128L48.9 512C18.5 478 0 433.2 0 384c0-71.1 38.6-133.1 96-166.3L96 64 64 64 64 0 96 0l64 0 64 0 64 0 32 0 0 64-32 0 0 153.7c14.2 8.2 27.2 18.2 38.8 29.6L366.1 208l-7-7-17-17L376 150.1l17 17 24 24 24 24 17 17L424 265.9l-17-17-7-7-43.3 43.3z" />
    </Icon>
);

export default Bong;