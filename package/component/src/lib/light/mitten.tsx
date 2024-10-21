
import { Icon } from "../../index";

/**
 * A component that renders the `mitten` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mitten?s=light mitten}
 * @preview ![mitten](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/mitten.svg)
 */
const Mitten: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 144.2C0 64.6 65.1 0 144.6 0C208 0 264.4 41.5 282.8 102.3l24.6 81.3c15.3-15 36-23.6 57.9-23.6l1.8 0c44.7 0 80.9 36.2 80.9 80.9c0 18.6-6.4 36.6-18.1 51l-61.8 76L328 368c.6-1.7 1.5-3.3 2.6-4.7L405 271.8c7.1-8.7 11-19.6 11-30.9c0-27-21.9-48.9-48.9-48.9l-1.8 0c-17.6 0-34 9.1-43.2 24.1l-7 11.4c-3.3 5.4-9.4 8.3-15.7 7.5s-11.4-5.2-13.3-11.2L252.2 111.6C237.9 64.4 194 32 144.6 32C82.6 32 32 82.4 32 144.2c0 9.2 1.1 18.3 3.3 27.2L84.5 368l-33 0L4.3 179.2C1.4 167.7 0 156 0 144.2zM64 432l0 48 288 0 0-48L64 432zm-32 0c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32l0 48c0 17.7-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32l0-48z" />
    </Icon>
);

export default Mitten;