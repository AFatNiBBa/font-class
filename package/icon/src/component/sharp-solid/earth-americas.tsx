
import { Icon } from "../../index";

/**
 * A component that renders the `earth-americas` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/earth-americas?s=sharp-solid earth-americas}
 * @preview ![earth-americas](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/earth-americas.svg)
 */
const EarthAmericas: typeof Icon = x => (
    <Icon {...x}>
        <path d="M55.7 199.7L96 240l48 0 48 48 0 64 32 32 0 64 64 0 0-48 64-64 0-80-128 0-32-32 0-32 80 0 0-32-32-32 0-16 32-32 0-31.4c-5.3-.4-10.6-.6-16-.6C160.6 48 80.3 112.2 55.7 199.7zM464 256c0-36.9-9.6-71.5-26.4-101.6L400 192l0 80 63.4 0c.4-5.3 .6-10.6 .6-16zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z" />
    </Icon>
);

export default EarthAmericas;