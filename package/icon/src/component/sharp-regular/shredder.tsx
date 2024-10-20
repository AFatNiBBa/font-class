
import { Icon } from "../../index";

/**
 * A component that renders the `shredder` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/shredder?s=sharp-regular shredder}
 * @preview ![shredder](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/shredder.svg)
 */
const Shredder: typeof Icon = x => (
    <Icon {...x}>
        <path d="M112 192l0-144 252.1 0L400 83.9 400 192l-288 0zm352 0l-16 0 0-128L384 0 112 0 64 0l0 48 0 144-16 0L0 192l0 48 0 96 0 48 48 0 416 0 48 0 0-48 0-96 0-48-48 0zm0 48l0 96L48 336l0-96 416 0zM40 488l0 24 48 0 0-24 0-72-48 0 0 72zm96 0l0 24 48 0 0-24 0-72-48 0 0 72zm96 0l0 24 48 0 0-24 0-72-48 0 0 72zm96 0l0 24 48 0 0-24 0-72-48 0 0 72zm96 0l0 24 48 0 0-24 0-72-48 0 0 72z" />
    </Icon>
);

export default Shredder;