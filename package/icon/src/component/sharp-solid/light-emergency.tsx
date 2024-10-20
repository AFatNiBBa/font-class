
import { Icon } from "../../index";

/**
 * A component that renders the `light-emergency` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-emergency?s=sharp-solid light-emergency}
 * @preview ![light-emergency](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/light-emergency.svg)
 */
const LightEmergency: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 192c0-88.4 71.6-160 160-160s160 71.6 160 160l0 160L64 352l0-160zm160-80l0-32c-61.9 0-112 50.1-112 112l32 0c0-44.2 35.8-80 80-80zM448 480L0 480l0-96 448 0 0 96z" />
    </Icon>
);

export default LightEmergency;