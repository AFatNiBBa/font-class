
import { Icon, generic } from "../../index";

/**
 * A component that renders the `republican` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/republican?s=sharp-duotone-solid republican}
 * @preview ![republican](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/republican.svg)
 */
const Republican: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 288l0 96 0 96 128 0 0-96 192 0 0 96 128 0 0-96 0-32 32 0 0 48c0 44.2 35.8 80 80 80s80-35.8 80-80l0-48 0-32-64 0 0 32 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80 0-32-32 0-64 0-32 0-96 0-192 0L0 288z" />
        <path d="M160 32C71.6 32 0 103.6 0 192l0 96 544 0 0-96c0-88.4-71.6-160-160-160L160 32zM143.6 160l36.3 4.6-26.5 24.4L160 224l-32.1-16.9L95.7 224l6.7-34.9L75.8 164.7l36.3-4.6 15.7-32 15.7 32zm128.3-32l15.7 32 36.3 4.6-26.5 24.4L304 224l-32.1-16.9L239.7 224l6.7-34.9-26.5-24.4 36.3-4.6 15.7-32zm159.7 32l36.3 4.6-26.5 24.4L448 224l-32.1-16.9L383.7 224l6.7-34.9-26.5-24.4 36.3-4.6 15.7-32 15.7 32z" />
    </Icon>
);

export default Republican;