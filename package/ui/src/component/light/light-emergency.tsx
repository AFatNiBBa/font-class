
import { Icon } from "../../index";

/**
 * A component that renders the `light-emergency` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/light-emergency?s=light light-emergency}
 * @preview ![light-emergency](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/light-emergency.svg)
 */
const LightEmergency: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 320l0-128c0-70.7-57.3-128-128-128S96 121.3 96 192l0 128-32 0 0-128c0-88.4 71.6-160 160-160s160 71.6 160 160l0 128-32 0zM48 384c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l352 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16L48 384zm0-32l352 0c26.5 0 48 21.5 48 48l0 32c0 26.5-21.5 48-48 48L48 480c-26.5 0-48-21.5-48-48l0-32c0-26.5 21.5-48 48-48zM160 192c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-53 43-96 96-96c8.8 0 16 7.2 16 16s-7.2 16-16 16c-35.3 0-64 28.7-64 64z" />
    </Icon>
);

export default LightEmergency;