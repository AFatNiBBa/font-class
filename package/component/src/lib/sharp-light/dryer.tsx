
import { Icon } from "../../index";

/**
 * A component that renders the `dryer` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dryer?s=sharp-light dryer}
 * @preview ![dryer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/dryer.svg)
 */
const Dryer: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M416 32l0 448L32 480 32 32l384 0zM32 0L0 0 0 32 0 480l0 32 32 0 384 0 32 0 0-32 0-448 0-32L416 0 32 0zm96 96A24 24 0 1 0 80 96a24 24 0 1 0 48 0zm56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm40 296c-56.4 0-103.1-41.7-110.9-96l62.9 0 16 0 0-32-16 0-62.9 0c7.8-54.3 54.4-96 110.9-96c61.9 0 112 50.1 112 112s-50.1 112-112 112zm0 32a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
    </Icon>
);

export default Dryer;