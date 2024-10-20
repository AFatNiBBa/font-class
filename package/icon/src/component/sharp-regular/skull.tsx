
import { Icon } from "../../index";

/**
 * A component that renders the `skull` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull?s=sharp-regular skull}
 * @preview ![skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/skull.svg)
 */
const Skull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M368 373.9l0 25 0 65.1-48 0 0-24 0-24-48 0 0 24 0 24-32 0 0-24 0-24-48 0 0 24 0 24-48 0 0-65.1 0-25-20.4-14.3C75.9 326.2 48 276.9 48 224c0-91.4 86.9-176 208-176s208 84.6 208 176c0 52.9-27.9 102.2-75.6 135.6L368 373.9zm48 25c58.5-41.1 96-104.1 96-174.9C512 100.3 397.4 0 256 0S0 100.3 0 224c0 70.7 37.5 133.8 96 174.9L96 464l0 48 48 0 224 0 48 0 0-48 0-65.1zM224 256a56 56 0 1 0 -112 0 56 56 0 1 0 112 0zm120 56a56 56 0 1 0 0-112 56 56 0 1 0 0 112z" />
    </Icon>
);

export default Skull;