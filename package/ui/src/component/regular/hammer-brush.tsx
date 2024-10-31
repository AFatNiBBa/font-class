
import { Icon } from "../../index";

/**
 * A component that renders the `hammer-brush` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hammer-brush?s=regular hammer-brush}
 * @preview ![hammer-brush](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/hammer-brush.svg)
 */
const HammerBrush: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M152 0C68.1 0 0 68.1 0 152l0 16c0 8.3 4.3 16 11.4 20.4s15.9 4.8 23.4 1.1l45.7-22.9c10.2 10.7 23.2 18.5 37.5 22.5L100.4 448.1C98 482.7 125.4 512 160 512s62-29.3 59.6-63.9L202.2 191.8c23.4-1.7 44.9-13.4 59-31.8l42.8 0 0 8c0 13.3 10.7 24 24 24s24-10.7 24-24l0-31.8 0-.2 0-80 0-.2L352 24c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 8-42.8 0C245.8 12.1 221.9 0 196.2 0L152 0zM304 112l-56 0c-9.1 0-17.4 5.1-21.5 13.3c-5.7 11.5-17.5 18.7-30.3 18.7l-56.4 0c-12.8 0-24.6-7.3-30.3-18.7c-5.9-11.9-20.3-16.7-32.2-10.7L50.8 127.7C61.8 82 102.9 48 152 48l44.2 0c12.8 0 24.6 7.3 30.3 18.7C230.6 74.9 238.9 80 248 80l56 0 0 32zM592 464l-112 0 0-48c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 48-48 0 0-144 192 0 0 144zM380.5 237c-17.8 11.9-28.5 31.9-28.5 53.3L352 464c0 26.5 21.5 48 48 48l192 0c26.5 0 48-21.5 48-48l0-173.7c0-21.4-10.7-41.4-28.5-53.3L544 192l0-144c0-26.5-21.5-48-48-48s-48 21.5-48 48l0 144-67.5 45zM480 48a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default HammerBrush;