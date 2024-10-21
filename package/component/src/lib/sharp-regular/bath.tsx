
import { Icon } from "../../index";

/**
 * A component that renders the `bath` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bath?s=sharp-regular bath}
 * @preview ![bath](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/bath.svg)
 */
const Bath: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 0L56 0l64 0 9.9 0 7 7 18 18c11.1-5.8 23.7-9.1 37-9.1c23.6 0 44.9 10.2 59.5 26.5L264 30.1 297.9 64 281 81 177 185l-17 17L126.1 168l12.5-12.5C122.2 140.9 112 119.6 112 96c0-13.4 3.3-25.9 9.1-37l-11-11L80 48l0 208 352 0 48 0 8 0 24 0 0 48-24 0-8 0-48 0L80 304l-48 0-8 0L0 304l0-48 24 0 8 0L32 24 32 0zm0 336l48 0 0 32c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48l0-32 48 0 0 32c0 28.4-12.4 54-32 71.6l0 48.4 0 24-48 0 0-24 0-25.3c-5.2 .9-10.5 1.3-16 1.3l-256 0c-5.5 0-10.8-.5-16-1.3l0 25.3 0 24-48 0 0-24 0-48.4C44.4 422 32 396.4 32 368l0-32zM192 64c-17.7 0-32 14.3-32 32c0 10.4 4.9 19.6 12.6 25.5l44.8-44.8C211.6 68.9 202.4 64 192 64z" />
    </Icon>
);

export default Bath;