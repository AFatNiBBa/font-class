
import { Icon } from "../../index";

/**
 * A component that renders the `garage-open` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/garage-open?s=solid garage-open}
 * @preview ![garage-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/garage-open.svg)
 */
const GarageOpen: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 171.3L0 488c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-264c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 264c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-316.7c0-26.2-15.9-49.7-40.2-59.4L331.9 4.8c-7.6-3.1-16.1-3.1-23.8 0L40.2 111.9C15.9 121.6 0 145.2 0 171.3zM194.1 320l-5.2 15c-17.2 9.5-28.9 27.9-28.9 49l0 96c0 17.7 14.3 32 32 32s32-14.3 32-32l0-16 192 0 0 16c0 17.7 14.3 32 32 32s32-14.3 32-32l0-96c0-21.1-11.7-39.5-28.9-49l-5.2-15L395 320l2.8 8-155.6 0 2.8-8-50.8 0zM240 376a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm136 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM512 224l-384 0 0 64 384 0 0-64z" />
    </Icon>
);

export default GarageOpen;