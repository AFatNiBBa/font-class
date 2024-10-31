
import { Icon } from "../../index";

/**
 * A component that renders the `light-emergency` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-emergency?s=sharp-thin light-emergency}
 * @preview ![light-emergency](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/light-emergency.svg)
 */
const LightEmergency: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M368 320l0-128c0-79.5-64.5-144-144-144S80 112.5 80 192l0 128-16 0 0-128c0-88.4 71.6-160 160-160s160 71.6 160 160l0 128-16 0zM16 368l0 96 416 0 0-96L16 368zm0-16l416 0 16 0 0 16 0 96 0 16-16 0L16 480 0 480l0-16 0-96 0-16 16 0zM144 192l-16 0c0-53 43-96 96-96l0 16c-44.2 0-80 35.8-80 80z" />
    </Icon>
);

export default LightEmergency;