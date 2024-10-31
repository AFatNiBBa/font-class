
import { Icon, generic } from "../../index";

/**
 * A component that renders the `leaf` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/leaf?s=duotone leaf}
 * @preview ![leaf](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/leaf.svg)
 */
const Leaf: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M96.4 260.1C102.5 168.5 178.8 96 272 96l104 0c42.7 0 79.9-23.9 98.8-59.1c3.5-6.5 13.6-6.8 16.2 .1c13.5 36.5 21.1 77 21.1 119.6C512 317.1 405.1 447.3 273 448l-1 0c-81.7 0-150.4-55.7-170.2-131.2c15-13.9 32.5-25.1 51.8-32.8c9.6-3.9 19.7-6.9 30.2-8.9c5.2-1 10.5-1.8 15.9-2.3c2.7-.3 5.4-.5 8.1-.6c1.3-.1 2.7-.1 4.1-.1c1.3 0 2.6 0 4.1 0c24 0 48 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24c-24 0-48 0-72 0c-44.2 0-85.4 13.3-119.6 36.1z" />
        <path d="M216 272c-92.8 0-168 75.2-168 168l0 16c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-16C0 320.7 96.7 224 216 224l72 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-72 0z" />
    </Icon>
);

export default Leaf;