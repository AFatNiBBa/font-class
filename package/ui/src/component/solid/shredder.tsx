
import { Icon } from "../../index";

/**
 * A component that renders the `shredder` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shredder?s=solid shredder}
 * @preview ![shredder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/shredder.svg)
 */
const Shredder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 64C64 28.7 92.7 0 128 0L354.7 0c17 0 33.3 6.7 45.3 18.7L429.3 48c12 12 18.7 28.3 18.7 45.3l0 98.7c35.3 0 64 28.7 64 64l0 96c0 17.7-14.3 32-32 32L32 384c-17.7 0-32-14.3-32-32l0-96c0-35.3 28.7-64 64-64L64 64zM384 93.3L354.7 64 128 64l0 128 256 0 0-98.7zM432 296a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM40 416l48 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72zm96 0l48 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72zm96 0l48 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72zm96 0l48 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72zm96 0l48 0 0 72c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-72z" />
    </Icon>
);

export default Shredder;