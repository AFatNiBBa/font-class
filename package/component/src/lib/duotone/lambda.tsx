
import { Icon, generic } from "../../index";

/**
 * A component that renders the `lambda` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/lambda?s=duotone lambda}
 * @preview ![lambda](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/lambda.svg)
 */
const Lambda: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l108.2 0 16.4 32.7L18.8 434.9c-7.3 16.1-.1 35.1 16 42.3s35.1 .1 42.3-16L193.5 202.6l121 242c10.8 21.7 33 35.4 57.2 35.4l44.2 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-44.2 0L197.5 67.4C186.6 45.7 164.5 32 140.2 32L32 32z" />
    </Icon>
);

export default Lambda;