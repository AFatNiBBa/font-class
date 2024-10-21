
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bicycle` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bicycle?s=sharp-duotone-solid bicycle}
 * @preview ![bicycle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/bicycle.svg)
 */
const Bicycle: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352c0 70.7 57.3 128 128 128c65.3 0 119.1-48.9 127-112l-56.8 0c-7.3 32.1-36 56-70.2 56c-39.8 0-72-32.2-72-72s32.2-72 72-72c1.7 0 3.4 .1 5.1 .2l26.2-52.3c-10-2.5-20.5-3.8-31.2-3.8C57.3 224 0 281.3 0 352zm384 0c0 70.7 57.3 128 128 128s128-57.3 128-128s-57.3-128-128-128c-13.5 0-26.5 2.1-38.7 6c9.2 17 18.3 33.9 27.5 50.9c3.6-.6 7.4-.9 11.2-.9c39.8 0 72 32.2 72 72s-32.2 72-72 72s-72-32.2-72-72c0-18.6 7-35.5 18.6-48.3c-9.2-17-18.3-33.9-27.5-50.9C402.4 276.3 384 312 384 352z" />
        <path d="M312 32l-24 0 0 48 24 0 25.7 0 34.6 64-149.4 0-27.4-38-7.2-10L176 96l-56 0L96 96l0 48 24 0 43.7 0 22.1 30.7L106.5 333.3 128 368l176 0 13.7 0 7-11.8 84.8-143.5 81.4 150.7 11.4 21.1 42.2-22.8-11.4-21.1-160-296L366.3 32 352 32l-40 0zM166.8 320l50.7-101.3 72.9 101.2-.1 .1-123.5 0zm90.6-128l108.5 0L317 274.8 257.4 192z" />
    </Icon>
);

export default Bicycle;