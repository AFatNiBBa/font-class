
import { Icon } from "../../index";

/**
 * A component that renders the `stamp` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stamp?s=sharp-regular stamp}
 * @preview ![stamp](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/stamp.svg)
 */
const Stamp: typeof Icon = x => (
    <Icon {...x}>
        <path d="M292 127.7l-12 13.6 0 18.2 0 96.5 0 48 48 0 88 0c26.5 0 48 21.5 48 48l0 16L48 368l0-16c0-26.5 21.5-48 48-48l88 0 48 0 0-48 0-96.5 0-18.2-12-13.6c-7.5-8.5-12-19.5-12-31.7c0-26.5 21.5-48 48-48s48 21.5 48 48c0 12.2-4.5 23.2-12 31.7zM512 416l0-48 0-16c0-53-43-96-96-96l-40 0-48 0 0-48 0-48.5c14.9-16.9 24-39.2 24-63.5c0-53-43-96-96-96s-96 43-96 96c0 24.3 9.1 46.6 24 63.5l0 48.5 0 48-48 0-40 0c-53 0-96 43-96 96l0 16 0 48 48 0 416 0 48 0zM32 448l0 16 0 32 0 16 48 0 352 0 48 0 0-16 0-32 0-16-48 0L80 448l-48 0z" />
    </Icon>
);

export default Stamp;