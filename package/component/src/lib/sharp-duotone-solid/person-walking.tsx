
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-walking` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-walking?s=sharp-duotone-solid person-walking}
 * @preview ![person-walking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-walking.svg)
 */
const PersonWalking: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path class={generic.secondary} d="M2.7 464L48 509.3l22.6-22.6 48-48 4.6-4.6 2.4-6.1 28.9-72.2c-10.1-11-20.2-22.1-30.3-33.1c-1.8-2-3.4-4-4.9-6.1s-2.9-4.3-4.1-6.5c-2.4-4.5-4.3-9.2-5.6-14.1L68.7 398 25.4 441.4 2.7 464z" />
        <path d="M208 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM132.3 126.6l10 2 80 16 15.3 3.1 7 14 35.2 70.5 38.5 19.2-28.6 57.2-48-24-9.5-4.8-4.8-9.5-13.7-27.4-18.4 62.4 52.3 57 5.2 5.7 2 7.5 24 88 8.4 30.9-61.7 16.8-8.4-30.9-22-80.5-70.9-77.4c-14.8-16.1-20.3-38.6-14.7-59.7l17-63.6L89.9 215.5 78.4 250.1 68.2 280.5 7.5 260.2l10.1-30.4 16-48 4.5-13.4L51 162.8l72-32 9.3-4.1z" />
    </Icon>
);

export default PersonWalking;