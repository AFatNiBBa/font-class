
import { Icon } from "../../index";

/**
 * A component that renders the `grill` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/grill?s=regular grill}
 * @preview ![grill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/grill.svg)
 */
const Grill: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M48 80l352 0 0 16c0 97.2-78.8 176-176 176S48 193.2 48 96l0-16zM40 32C17.9 32 0 49.9 0 72L0 96c0 89.8 52.9 167.3 129.2 203l-23.1 53.8c-3.3-.5-6.7-.8-10.1-.8c-35.3 0-64 28.7-64 64s28.7 64 64 64s64-28.7 64-64l156.7 0 21.2 49.5c5.2 12.2 19.3 17.8 31.5 12.6s17.8-19.3 12.6-31.5L318.8 299C395.1 263.3 448 185.8 448 96l0-24c0-22.1-17.9-40-40-40L40 32zM151.8 368l22.9-53.4c15.9 3.6 32.3 5.4 49.3 5.4s33.4-1.9 49.3-5.4L296.2 368l-144.3 0zM72 416a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z" />
    </Icon>
);

export default Grill;