
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-dots-from-line` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dots-from-line?s=duotone person-dots-from-line}
 * @preview ![person-dots-from-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-dots-from-line.svg)
 */
const PersonDotsFromLine: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 336c0 10.8 3.6 21.7 11.1 30.7c17 20.4 47.2 23.1 67.6 6.1c15-12.5 50-34.4 97.3-50.1L176 432l224 0 0-109.3c47.3 15.8 82.3 37.7 97.3 50.1c20.4 17 50.6 14.2 67.6-6.1s14.2-50.6-6.1-67.6c-12-10-30.1-22.5-53.2-35C497.2 278.4 481.7 288 464 288c-26.5 0-48-21.5-48-48c0-4.3 .6-8.4 1.6-12.4C379.1 215.9 335.3 208 288 208c-60.2 0-114.9 12.9-160 29.9c0 .7 0 1.4 0 2.1c0 26.5-21.5 48-48 48c-11.8 0-22.7-4.3-31-11.4c-13.1 8.1-23.7 15.9-31.7 22.5C5.9 308.6 0 322.3 0 336zM200 88a88 88 0 1 0 176 0A88 88 0 1 0 200 88zm72 192a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm80 80a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M64 240a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM0 488c0-13.3 10.7-24 24-24l528 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L24 512c-13.3 0-24-10.7-24-24zM464 224a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default PersonDotsFromLine;