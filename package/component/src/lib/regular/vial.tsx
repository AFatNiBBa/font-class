
import { Icon } from "../../index";

/**
 * A component that renders the `vial` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vial?s=regular vial}
 * @preview ![vial](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/vial.svg)
 */
const Vial: typeof Icon = x => (
    <Icon {...x}>
        <path d="M329 7c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l15 15L30.2 335.8C10.9 355.2 0 381.4 0 408.8C0 465.8 46.2 512 103.2 512c27.4 0 53.6-10.9 73-30.2L456 201.9l15 15c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-32-32L361 39 329 7zm-151 249L344 89.9 422.1 168l-88 88-156.1 0z" />
    </Icon>
);

export default Vial;