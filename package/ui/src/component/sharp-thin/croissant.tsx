
import { Icon } from "../../index";

/**
 * A component that renders the `croissant` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/croissant?s=sharp-thin croissant}
 * @preview ![croissant](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/croissant.svg)
 */
const Croissant: typeof Icon = x => (
    <Icon {...x}>
        <path d="M19.7 182.9C48.9 108.3 108.3 49 182.9 19.8L318.6 269.1l-49.4 49.4L19.7 182.9zM190.4 0C100.9 30.3 30.2 100.9 0 190.4l14.3 7.8C5 226.4 0 256.6 0 288c0 60.9 18.9 117.4 51.2 163.9c3 4.3 6 8.5 9.2 12.6l.2 .3s0 0 0 0l23.8-18.5c26.9 29 60.5 51.7 98.2 65.7L224 480l-16-96 0-33.8 35.3-27.5L272 338.4 338.4 272l-15.6-28.7L350.2 208l33.8 0 96 16 32-41.3c-14.1-37.8-36.8-71.3-65.7-98.2l18.5-23.8s0 0 0 0l-.3-.2c-4.1-3.2-8.3-6.3-12.6-9.2C405.4 18.9 348.9 0 288 0c-31.4 0-61.6 5-89.8 14.3L190.4 0zm246 97.2c24.6 23.1 44.2 51.3 57.4 82.9l-20.6 26.5-86.6-14.4-1.3-.2-1.3 0-21.3 0 73.8-94.8zM192 362.7l0 21.3 0 1.3 .2 1.3 14.4 86.6-26.5 20.6c-31.6-13.1-59.8-32.8-82.9-57.4L192 362.7zM16 288c0-28.6 4.4-56.2 12.6-82L228 314.4 63.8 442.1C33.7 398.3 16 345.2 16 288zM442.1 63.8L314.4 228 206 28.6C231.9 20.4 259.4 16 288 16c57.2 0 110.3 17.7 154.1 47.8z" />
    </Icon>
);

export default Croissant;