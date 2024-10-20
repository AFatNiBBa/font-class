
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cup-straw-swoosh` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cup-straw-swoosh?s=sharp-duotone-solid cup-straw-swoosh}
 * @preview ![cup-straw-swoosh](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cup-straw-swoosh.svg)
 */
const CupStrawSwoosh: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M32 192l320 0-6.4 64c-50.7 .6-85.3 8.9-111.2 22.8c-25.7 13.9-40.8 32.5-53.1 47.7l-1.9 2.3c-12.7 15.6-23.5 28.1-42.8 37.6C119.3 375 93.5 382 51.2 383.6L32 192zM55.9 431.5c45.2-2 77.3-9.8 101.9-22c29.2-14.4 45.4-34 58.7-50.4l.7-.8c13-16 22.7-28 39.9-37.2c16.1-8.7 40.9-15.9 83.6-17L320 512 64 512l-8.1-80.5z" />
        <path d="M224 0L205 0l-4.4 18.5L174.9 128 32 128 0 128l0 64 32 0 320 0 32 0 0-64-32 0-127.8 0L243 48l37 0 24 0 0-48L280 0 224 0z" />
    </Icon>
);

export default CupStrawSwoosh;