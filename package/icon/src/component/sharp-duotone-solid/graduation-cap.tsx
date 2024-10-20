
import { Icon, generic } from "../../index";

/**
 * A component that renders the `graduation-cap` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/graduation-cap?s=sharp-duotone-solid graduation-cap}
 * @preview ![graduation-cap](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/graduation-cap.svg)
 */
const GraduationCap: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 464l80 16c27.8-64.8 15.4-108.2 0-133.2l0-106.9c16.5-6.2 33-12.4 49.5-18.6l196.1-73.5 15-5.6-11.2-30-15 5.6c-77.4 29-154.7 58-232 87c-8 3-16 6-24 9L48 217.7l0 11.1 0 138.3C32.5 417.5 0 464 0 464z" />
        <path d="M640 176L320 288 129.5 221.3l196.1-73.5 15-5.6-11.2-30-15 5.6-232 87L0 176l0-32L320 32 640 144l0 32zM143.6 260.2l165.9 58.1 10.6 3.7 10.6-3.7 165.9-58.1L512 408c0 35.3-86 72-192 72s-192-36.7-192-72l15.6-147.8z" />
    </Icon>
);

export default GraduationCap;