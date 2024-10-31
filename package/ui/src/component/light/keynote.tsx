
import { Icon } from "../../index";

/**
 * A component that renders the `keynote` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/keynote?s=light keynote}
 * @preview ![keynote](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/keynote.svg)
 */
const Keynote: typeof Icon = x => (
    <Icon {...x}>
        <path d="M304 32c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16l64 0zM240 0c-20.9 0-38.7 13.4-45.3 32L184 32c-44.2 0-80 35.8-80 80l0 48-10.3 0c-18.2 0-34.8 10.3-42.9 26.5L5.1 277.9c-3.3 6.7-5.1 14-5.1 21.5L0 304l0 48c0 17.7 14.3 32 32 32l448 0c17.7 0 32-14.3 32-32l0-48 0-4.7c0-7.5-1.7-14.8-5.1-21.5l-45.7-91.3c-8.1-16.3-24.8-26.5-42.9-26.5L136 160l0-48c0-26.5 21.5-48 48-48l10.7 0c6.6 18.6 24.4 32 45.3 32l64 0c26.5 0 48-21.5 48-48s-21.5-48-48-48L240 0zM32 352l0-32 448 0 0 32L32 352zm3.8-64l43.6-87.2c2.7-5.4 8.3-8.8 14.3-8.8l324.7 0c6.1 0 11.6 3.4 14.3 8.8L476.2 288 35.8 288zM144 480c-8.8 0-16 7.2-16 16s7.2 16 16 16l112 0 112 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-96 0 0-64-32 0 0 64-96 0z" />
    </Icon>
);

export default Keynote;