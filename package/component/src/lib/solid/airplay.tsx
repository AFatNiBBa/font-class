
import { Icon } from "../../index";

/**
 * A component that renders the `airplay` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/airplay?s=solid airplay}
 * @preview ![airplay](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/airplay.svg)
 */
const Airplay: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M480 96L96 96c-17.7 0-32 14.3-32 32l0 192c0 17.7 14.3 32 32 32l69.5 0-50.7 50.7c-4 4-7.4 8.5-10.2 13.3L96 416c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l384 0c53 0 96 43 96 96l0 192c0 53-43 96-96 96l-8.6 0c-2.8-4.8-6.2-9.2-10.2-13.3L410.5 352l69.5 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32zM265.4 297.4c12.5-12.5 32.8-12.5 45.3 0l128 128c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8l-256 0c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l128-128z" />
    </Icon>
);

export default Airplay;