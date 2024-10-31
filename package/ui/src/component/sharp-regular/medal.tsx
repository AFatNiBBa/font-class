
import { Icon } from "../../index";

/**
 * A component that renders the `medal` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/medal?s=sharp-regular medal}
 * @preview ![medal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/medal.svg)
 */
const Medal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M227.2 100.7L160 0 57.7 0 0 0 32 48l87.4 131.1c12.1-10.5 25.3-19.6 39.6-27.2L89.7 48l44.6 0 59.6 89.4c16.4-5.1 33.7-8.3 51.6-9.2l-18.4-27.5zM480 48L512 0 454.3 0 352 0 284.8 100.7l-18.4 27.5c17.9 .9 35.2 4 51.6 9.2L377.7 48l44.6 0L353 152c14.3 7.5 27.5 16.7 39.6 27.2L480 48zM256 208a128 128 0 1 1 0 256 128 128 0 1 1 0-256zm0 304a176 176 0 1 0 0-352 176 176 0 1 0 0 352zm0-272l-28.2 57.2-63.1 9.2 45.7 44.5-10.8 62.8L256 384l56.4 29.7-10.8-62.8 45.7-44.5-63.1-9.2L256 240z" />
    </Icon>
);

export default Medal;