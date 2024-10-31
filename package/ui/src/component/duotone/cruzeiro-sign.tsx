
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cruzeiro-sign` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cruzeiro-sign?s=duotone cruzeiro-sign}
 * @preview ![cruzeiro-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cruzeiro-sign.svg)
 */
const CruzeiroSign: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M192 256l0 55.3 0 8.7 0 82.7c19.6 8.6 41.2 13.3 64 13.3l0-96 0-8.7c0-12.8 10.4-23.3 23.3-23.3c4.6 0 9.1 1.4 12.9 3.9l10.1 6.7c14.7 9.8 34.6 5.8 44.4-8.9s5.8-34.6-8.9-44.4l-10.1-6.7c-14.3-9.6-31.2-14.7-48.4-14.7c-12.4 0-24.2 2.6-34.9 7.3c-5.5-4.5-12.6-7.3-20.3-7.3c-17.7 0-32 14.3-32 32z" />
        <path d="M256 96C167.6 96 96 167.6 96 256s71.6 160 160 160c41 0 78.3-15.4 106.7-40.7c13.2-11.8 33.4-10.7 45.2 2.5s10.7 33.4-2.5 45.2c-39.6 35.5-92 57-149.3 57C132.3 480 32 379.7 32 256S132.3 32 256 32c57.4 0 109.7 21.6 149.3 57c13.2 11.8 14.3 32 2.5 45.2s-32 14.3-45.2 2.5C334.3 111.4 297 96 256 96z" />
    </Icon>
);

export default CruzeiroSign;