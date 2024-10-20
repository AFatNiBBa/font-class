
import { Icon, generic } from "../../index";

/**
 * A component that renders the `monument` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/monument?s=duotone monument}
 * @preview ![monument](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/monument.svg)
 */
const Monument: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 480c0-17.7 14.3-32 32-32l19.9 0 280.2 0 19.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 512c-17.7 0-32-14.3-32-32z" />
        <path d="M203.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-80 80c-2.5 2.5-4.1 5.8-4.6 9.3L51.9 448l280.2 0L287.9 94c-.4-3.5-2-6.8-4.6-9.3l-80-80zM128 296c0-13.3 10.7-24 24-24l80 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default Monument;