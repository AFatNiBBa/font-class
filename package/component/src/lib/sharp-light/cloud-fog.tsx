
import { Icon } from "../../index";

/**
 * A component that renders the `cloud-fog` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cloud-fog?s=sharp-light cloud-fog}
 * @preview ![cloud-fog](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/cloud-fog.svg)
 */
const CloudFog: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M448 128l0 32 32 0c35.3 0 64 28.7 64 64l0 64-64 0-320 0-64 0 0-64c0-27.8 17.8-51.6 42.7-60.4l21.3-7.5 0-22.6 0-21.5c0-44.2 35.8-80 80-80c27 0 50.9 13.4 65.5 34l17.8 25.2 25.9-16.9c10-6.5 22-10.3 34.9-10.3c35.3 0 64 28.7 64 64zM64 320l32 0 64 0 320 0 64 0 32 0 0-32 0-64c0-53-43-96-96-96c0-53-43-96-96-96c-19.3 0-37.3 5.7-52.4 15.5C311.3 18.8 277.9 0 240 0C178.1 0 128 50.1 128 112l0 21.5C90.7 146.6 64 182.2 64 224l0 64 0 32zM0 384l0 32 16 0 544 0 16 0 0-32-16 0L16 384 0 384zm64 96l0 32 16 0 128 0 16 0 0-32-16 0L80 480l-16 0zm224 0l0 32 16 0 320 0 16 0 0-32-16 0-320 0-16 0z" />
    </Icon>
);

export default CloudFog;