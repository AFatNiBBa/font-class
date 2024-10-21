
import { Icon } from "../../index";

/**
 * A component that renders the `bell-on` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bell-on?s=sharp-thin bell-on}
 * @preview ![bell-on](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bell-on.svg)
 */
const BellOn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M312 0l16 0 0 32.2c84.6 4.2 152 74.1 152 159.8l0 93.2L542.2 363l1.8 2.2 0 2.8 0 40 0 8-8 0-432 0-8 0 0-8 0-40 0-2.8 1.8-2.2L160 285.2l0-93.2c0-85.7 67.4-155.6 152-159.8L312 0zm8 48c-79.5 0-144 64.5-144 144l0 96 0 2.8-1.8 2.2L112 370.8l0 29.2 416 0 0-29.2L465.8 293l-1.8-2.2 0-2.8 0-96c0-79.5-64.5-144-144-144zM286.1 481.9c9 9 21.2 14.1 33.9 14.1s24.9-5.1 33.9-14.1s14.1-21.2 14.1-33.9l16 0c0 17-6.7 33.3-18.7 45.3s-28.3 18.7-45.3 18.7s-33.3-6.7-45.3-18.7s-18.7-28.3-18.7-45.3l16 0c0 12.7 5.1 24.9 14.1 33.9zM0 176l8 0 96 0 8 0 0 16-8 0L8 192l-8 0 0-16zm536 0l96 0 8 0 0 16-8 0-96 0-8 0 0-16 8 0zM610.7 43.6l-7.2 3.6-80 40-7.2 3.6-7.2-14.3 7.2-3.6 80-40 7.2-3.6 7.2 14.3zM36.4 47.2l-7.2-3.6 7.2-14.3 7.2 3.6 80 40 7.2 3.6-7.2 14.3-7.2-3.6-80-40z" />
    </Icon>
);

export default BellOn;