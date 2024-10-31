
import { Icon } from "../../index";

/**
 * A component that renders the `outlet` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outlet?s=sharp-solid outlet}
 * @preview ![outlet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/outlet.svg)
 */
const Outlet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M448 32L0 32 0 480l448 0 0-448zM64 256c0-88 64-128 64-128l192 0s64 40 64 128s-64 128-64 128l-192 0s-64-40-64-128zm112-64l-32 0 0 16 0 48 0 16 32 0 0-16 0-48 0-16zm128 0l-32 0 0 16 0 48 0 16 32 0 0-16 0-48 0-16zm-80 96c-13.3 0-24 10.7-24 24l0 24 48 0 0-24c0-13.3-10.7-24-24-24z" />
    </Icon>
);

export default Outlet;