
import { Icon } from "../../index";

/**
 * A component that renders the `person-biking` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-biking?s=thin person-biking}
 * @preview ![person-biking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/person-biking.svg)
 */
const PersonBiking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M392 16a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm0 96A56 56 0 1 0 392 0a56 56 0 1 0 0 112zM240 384A112 112 0 1 1 16 384a112 112 0 1 1 224 0zM128 256a128 128 0 1 0 0 256 128 128 0 1 0 0-256zM624 384a112 112 0 1 1 -224 0 112 112 0 1 1 224 0zM512 256a128 128 0 1 0 0 256 128 128 0 1 0 0-256zM304.9 151.5c8.8-7.6 21.8-7.7 30.8-.4l67.3 55c1.4 1.2 3.2 1.8 5.1 1.8l80 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-77.1 0-65-53.2c-15-12.3-36.6-12-51.4 .6L235.3 190c-20.3 17.4-18.1 49.4 4.3 64L336 316.4l0 99.6c0 4.4 3.6 8 8 8s8-3.6 8-8l0-104c0-2.7-1.4-5.2-3.7-6.7l-100-64.7c-13.5-8.7-14.8-27.9-2.6-38.4l59.1-50.7z" />
    </Icon>
);

export default PersonBiking;