
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wreath-laurel` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wreath-laurel?s=sharp-duotone-solid wreath-laurel}
 * @preview ![wreath-laurel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/wreath-laurel.svg)
 */
const WreathLaurel: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M173.3 466.5l21.5 42.9L253.7 480l66.3 0c-1.3 0-2.6 0-3.8 0s-2.6-.1-3.8-.1c-2.6-.1-5.1-.2-7.6-.4c-5.1-.3-10.1-.8-15-1.5c-9.9-1.3-19.6-3.3-29.1-5.9c-18.9-5.2-36.8-12.8-53.4-22.5l-33.9 17zM320 432l72 0 5.7 0c1.7 .8 3.4 1.7 5.1 2.5l30.1 15c5.1-3 10.1-6.1 14.9-9.5c59.6 28.2 131.9 6.3 165.4-51.8l16-27.7-13.9-8c-13.8-8-28.4-13.1-43.3-15.5c40.4-21.5 68-64.1 68-113.1l0-32-16 0c-15.9 0-31.1 2.9-45.2 8.2c24.3-38.8 26.8-89.5 2.3-131.9l-16-27.7-13.9 8C525 63.7 506.2 86.8 496 113l0-1C496 50.1 445.9 0 384 0L352 0l0 32c0 60.2 47.5 109.3 107 111.9c23.9 32.2 37 71.5 37 112.1c0 97.2-78.8 176-176 176z" />
        <path d="M144 112C144 50.1 194.1 0 256 0l32 0 0 32c0 60.2-47.5 109.3-107 111.9c-23.9 32.2-37 71.5-37 112.1c0 97.2 78.8 176 176 176l72 0 5.7 0 5.1 2.5 64 32-21.5 42.9L386.3 480 320 480c-47.5 0-91.5-14.8-127.7-39.9c-59.6 28.2-131.9 6.3-165.4-51.8l-16-27.7 13.9-8c13.8-8 28.4-13.1 43.3-15.5C27.5 315.6 0 273 0 224l0-32 16 0c15.9 0 31.1 2.9 45.2 8.2c-24.3-38.8-26.8-89.5-2.3-131.9l16-27.7 13.9 8C115 63.7 133.8 86.8 144 113l0-1z" />
    </Icon>
);

export default WreathLaurel;