
import { Icon } from "../../index";

/**
 * A component that renders the `earth-africa` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/earth-africa?s=sharp-regular earth-africa}
 * @preview ![earth-africa](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/earth-africa.svg)
 */
const EarthAfrica: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 256c0-22.3-3.5-43.8-10-64l-102 0 0 32 32 32 0 64-32 0 0 48-48 48-48 0 0-96-96 0 0-88 40-40 88 0 64-64-96 0-32 32-32 0 0-102C108.4 85 48 163.5 48 256c0 114.9 93.1 208 208 208s208-93.1 208-208zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default EarthAfrica;