
import { Icon } from "../../index";

/**
 * A component that renders the `garage` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/garage?s=sharp-solid garage}
 * @preview ![garage](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/garage.svg)
 */
const Garage: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M0 128L0 512l96 0 0-320 448 0 0 320 96 0 0-384L320 0 0 128zm512 96l-384 0 0 96 384 0 0-96zM128 512l384 0 0-160-384 0 0 160zm128-96l16 0 96 0 16 0 0 32-16 0-96 0-16 0 0-32z" />
    </Icon>
);

export default Garage;