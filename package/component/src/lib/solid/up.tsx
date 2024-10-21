
import { Icon } from "../../index";

/**
 * A component that renders the `up` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up?s=solid up}
 * @preview ![up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/up.svg)
 */
const Up: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M169.4 41.4c12.5-12.5 32.8-12.5 45.3 0l160 160c9.2 9.2 11.9 22.9 6.9 34.9s-16.6 19.8-29.6 19.8l-96 0 0 184c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-184-96 0c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9l160-160z" />
    </Icon>
);

export default Up;