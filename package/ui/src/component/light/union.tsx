
import { Icon } from "../../index";

/**
 * A component that renders the `union` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/union?s=light union}
 * @preview ![union](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/union.svg)
 */
const Union: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M16 32c8.8 0 16 7.2 16 16l0 240c0 88.4 71.6 160 160 160s160-71.6 160-160l0-240c0-8.8 7.2-16 16-16s16 7.2 16 16l0 240c0 106-86 192-192 192S0 394 0 288L0 48c0-8.8 7.2-16 16-16z" />
    </Icon>
);

export default Union;