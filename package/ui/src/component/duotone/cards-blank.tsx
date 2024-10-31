
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cards-blank` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cards-blank?s=duotone cards-blank}
 * @preview ![cards-blank](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/cards-blank.svg)
 */
const CardsBlank: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M306.4 472.3c45.7-26.4 91.3-52.7 137-79.1c3.3-1.9 6.4-4.1 9.1-6.6c6-5.4 10.7-11.9 13.9-19s4.8-14.9 4.8-22.7c0-9.4-2.4-19-7.5-27.8c-46.3-80.2-92.7-160.5-139-240.7C334.4 68.7 346.7 64 360 64l224 0c30.9 0 56 25.1 56 56l0 336c0 30.9-25.1 56-56 56l-224 0c-25.3 0-46.6-16.7-53.6-39.7z" />
        <path d="M7.5 194.9c-15.4-26.6-6.3-60.7 20.4-76.1L220.7 7.5c26.6-15.4 60.7-6.3 76.1 20.4l167 289.3c15.4 26.6 6.2 60.7-20.4 76.1L250.5 504.5c-26.6 15.4-60.7 6.2-76.1-20.4L7.5 194.9z" />
    </Icon>
);

export default CardsBlank;