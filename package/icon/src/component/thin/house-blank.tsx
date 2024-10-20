
import { Icon } from "../../index";

/**
 * A component that renders the `house-blank` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-blank?s=thin house-blank}
 * @preview ![house-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/house-blank.svg)
 */
const HouseBlank: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M282.7 2c3-2.7 7.6-2.7 10.6 0l280 248c3.3 2.9 3.6 8 .7 11.3s-8 3.6-11.3 .7L512 217.1 512 448c0 35.3-28.7 64-64 64l-320 0c-35.3 0-64-28.7-64-64l0-230.9L13.3 262c-3.3 2.9-8.4 2.6-11.3-.7S-.6 252.9 2.7 250L282.7 2zM80 202.9L80 448c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-245.1L288 18.7 80 202.9z" />
    </Icon>
);

export default HouseBlank;