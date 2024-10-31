
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cruzeiro-sign` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cruzeiro-sign?s=sharp-duotone-solid cruzeiro-sign}
 * @preview ![cruzeiro-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cruzeiro-sign.svg)
 */
const CruzeiroSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M192 224l0 94.6 0 1.4 0 82.7c19.6 8.6 41.2 13.3 64 13.3l0-96 0-1.4c0-16.9 13.7-30.6 30.6-30.6c5.6 0 11 1.5 15.8 4.4l25.1 15.1 32.9-54.9-25.1-15.1c-14.7-8.8-31.5-13.5-48.7-13.5c-10.7 0-21 1.8-30.6 5.1l0-5.1-64 0z" />
        <path d="M256 96C167.6 96 96 167.6 96 256s71.6 160 160 160c47.8 0 90.6-20.9 120-54.2l48 42.4C383 450.6 322.9 480 256 480C132.3 480 32 379.7 32 256S132.3 32 256 32c66.9 0 127 29.4 168 75.8l-48 42.4C346.6 116.9 303.8 96 256 96z" />
    </Icon>
);

export default CruzeiroSign;